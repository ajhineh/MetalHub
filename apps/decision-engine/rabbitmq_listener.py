import pika
import json
import threading
import os
from neo4j_client import neo4j_client

def callback(ch, method, properties, body):
    try:
        event = json.loads(body)
        print(f" [x] Received Event: {event}")
        
        # In a real app, check the routing key or event_type
        if event.get('eventType') == 'RFQDrafted':
            payload = event.get('payload', {})
            rfq_id = event.get('aggregateId')
            buyer_id = payload.get('buyerId')
            title = payload.get('title')
            
            if rfq_id and buyer_id:
                neo4j_client.create_rfq_node(rfq_id, title, buyer_id)
                print(" [v] Successfully processed and stored in Neo4j.")
            
    except Exception as e:
        print(f" [!] Error processing message: {e}")

def start_listening():
    rabbitmq_url = os.getenv("RABBITMQ_URL", "amqp://metalhub_mq:secure_mq_password@localhost:5672/")
    
    try:
        connection = pika.BlockingConnection(pika.URLParameters(rabbitmq_url))
        channel = connection.channel()

        # Declare the exchange and queue
        exchange_name = 'metalhub_events'
        channel.exchange_declare(exchange=exchange_name, exchange_type='topic', durable=True)
        
        result = channel.queue_declare(queue='decision_engine_q', durable=True)
        queue_name = result.method.queue
        
        # Bind queue to listen to RFQ events
        channel.queue_bind(exchange=exchange_name, queue=queue_name, routing_key='rfq.#')

        print(' [*] Waiting for messages. To exit press CTRL+C')
        channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
        channel.start_consuming()
    except Exception as e:
        print(f" [!] Failed to connect to RabbitMQ: {e}")

def run_listener_in_background():
    thread = threading.Thread(target=start_listening, daemon=True)
    thread.start()
