from fastapi import FastAPI
import uvicorn
from rabbitmq_listener import run_listener_in_background

app = FastAPI(
    title="MetalHub Decision Engine",
    description="AI-driven analytical engine for Risk Detection and Knowledge validation.",
    version="0.1.0"
)

@app.on_event("startup")
async def startup_event():
    print("Starting RabbitMQ Listener...")
    run_listener_in_background()

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "decision-engine"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
