from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "what", "another_message": "what again"}

