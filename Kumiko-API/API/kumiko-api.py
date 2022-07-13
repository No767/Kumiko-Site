from fastapi import FastAPI, APIRouter
from api_utils import EmbedSQLCrud
from pydantic import BaseModel
import databases
import os
from sqlalchemy import BigInteger, Column, Integer, MetaData, Table, select, String, BigInteger
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.ext.asyncio import create_async_engine
from dotenv import load_dotenv
from typing import List

load_dotenv()

POSTGRES_PASSWORD = os.getenv("Postgres_Password_Dev")
POSTGRES_SERVER_IP = os.getenv("Postgres_Server_IP_Dev")
POSTGRES_USERNAME = os.getenv("Postgres_Username_Dev")
POSTGRES_DB = os.getenv("Postgres_DB_Dev")
POSTGRES_PORT = os.getenv("Postgres_Server_Port_Dev")

DATABASE_URL = f"postgresql+asyncpg://{POSTGRES_USERNAME}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER_IP}:{POSTGRES_PORT}/{POSTGRES_DB}"
database = databases.Database(DATABASE_URL)

meta = MetaData()

embedsTable = Table(
        "embeds",
        meta,
        Column("user_id", BigInteger),
        Column("title", String),
        Column("description", String),
        Column("embed_fields", JSONB),
)

engine = create_async_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)

app = FastAPI()
router = APIRouter(prefix="/api/v1")

class EmbedFields(BaseModel):
    name: str
    value: str
    inline: bool = True
    
class Embeds(BaseModel):
    embed_id: str
    title: str
    description: str
    embed_fields: EmbedFields
    

@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()
    
# @app.post("/user/{user_id}/embed")
# async def getDBData(embeds: Embeds):
#     await embedUtils.insertData(embeds.title, embeds.description, embeds.embed_fields)
#     return embeds

@app.get("/user/{user_id}/embeds", response_model=List[Embeds])
async def getUserEmbeds(user_id: str):
    query = embedsTable.select().filter(embedsTable.c.user_id == user_id)
    await database.execute(query)
    return {**Embeds.dict()}

@app.post("/user/{user_id}/embeds", response_model=Embeds)
async def postUserEmbeds(user_id: str, embed: Embeds):
    query = embedsTable.insert().values(user_id=user_id)
    await database.execute(query)
    return {**Embeds.dict()}