import os
import psycopg2
from psycopg2.extras import RealDictCursor
import uuid
import datetime

# Database Connection (Same for both Strapi and Core API as per docker-compose)
DB_URL = os.getenv("DATABASE_URL", "postgresql://metalhub_admin:secure_postgres_password_123@localhost:5432/metalhub_production")

def run_migration():
    print("Starting Phase 9.4 Data Migration: Legacy Strapi -> Core API")
    
    try:
        conn = psycopg2.connect(DB_URL)
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        # 1. Check if Strapi users table exists
        cur.execute("SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'up_users');")
        strapi_users_exists = cur.fetchone()['exists']
        
        if not strapi_users_exists:
            print("Strapi legacy tables ('up_users') not found or empty. Generating seed data for Core API instead...")
            # Seed a default buyer and supplier
            buyer_id = str(uuid.uuid4())
            supplier_id = str(uuid.uuid4())
            now = datetime.datetime.now()
            
            cur.execute("""
                INSERT INTO "User" (id, email, role, "createdAt") 
                VALUES (%s, %s, %s, %s) ON CONFLICT DO NOTHING;
            """, (buyer_id, 'buyer@metalhub.com', 'BUYER', now))
            
            cur.execute("""
                INSERT INTO "User" (id, email, role, "createdAt") 
                VALUES (%s, %s, %s, %s) ON CONFLICT DO NOTHING;
            """, (supplier_id, 'supplier@metalhub.com', 'SUPPLIER', now))
            
            # Seed an RFQ
            rfq_id = str(uuid.uuid4())
            cur.execute("""
                INSERT INTO "RFQ" (id, "buyerId", title, status, "createdAt", "updatedAt") 
                VALUES (%s, %s, %s, %s, %s, %s) ON CONFLICT DO NOTHING;
            """, (rfq_id, buyer_id, 'Legacy Steel Structure RFQ #001', 'DRAFT', now, now))
            
            print(f"Seeded: Buyer ({buyer_id}), Supplier ({supplier_id}), RFQ ({rfq_id})")
        else:
            print("Strapi tables found. Extracting data...")
            cur.execute("SELECT * FROM up_users LIMIT 10;")
            users = cur.fetchall()
            for user in users:
                print(f"Migrating user: {user.get('email')}")
                # Insert into Prisma "User" table...
                user_id = str(uuid.uuid4())
                cur.execute("""
                    INSERT INTO "User" (id, email, role, "createdAt") 
                    VALUES (%s, %s, %s, NOW()) ON CONFLICT (email) DO NOTHING;
                """, (user_id, user.get('email'), 'BUYER'))
            print(f"Successfully migrated {len(users)} users from Strapi to Core API structure.")
            
        conn.commit()
        cur.close()
        conn.close()
        print("Migration process completed successfully!")
        
    except Exception as e:
        print(f"Migration failed: {e}")
        print("Please ensure you have installed psycopg2 (pip install psycopg2-binary) and the Postgres container is running.")

if __name__ == "__main__":
    run_migration()
