import asyncio
import os

import uvloop
from dotenv import load_dotenv
from sqlalchemy import BigInteger, Column, Integer, MetaData, Table, select, String, BigInteger
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.ext.asyncio import create_async_engine

load_dotenv()

PASSWORD = os.getenv("Postgres_Password_Dev")
SERVER_IP = os.getenv("Postgres_Server_IP_Dev")
USERNAME = os.getenv("Postgres_Username_Dev")
DB = os.getenv("Postgres_DB_Dev")
PORT = os.getenv("Postgres_Server_Port_Dev")

    
meta = MetaData()
embedsTable = Table(
        "embeds",
        meta,
        Column("user_id", String),
        Column("embed_id", String),
        Column("title", String),
        Column("description", String),
        Column("embed_fields", JSONB),
)

engine = create_async_engine(
    f"postgresql+asyncpg://{USERNAME}:{PASSWORD}@{SERVER_IP}:{PORT}/{DB}", connect_args={"check_same_thread": False}
)   
class EmbedSQLCrud:
    def __init__(self):
        self.self = self
        
    async def initTables(self):
        engine = create_async_engine(
            f"postgresql+asyncpg://{USERNAME}:{PASSWORD}@{SERVER_IP}:{PORT}/{DB}", echo=True
        )
        async with engine.begin() as conn:
            await conn.run_sync(meta.create_all)
            
    asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())
    
    async def insertData(self, user_id: str, embed_title: str, embed_description: str, embed_fields: dict):
        engine = create_async_engine(
            f"postgresql+asyncpg://{USERNAME}:{PASSWORD}@{SERVER_IP}:{PORT}/{DB}", connect_args={"check_same_thread": False}
        )
        async with engine.begin() as conn:
            ins = embedsTable.insert().values(user_id=user_id, title=embed_title, description=embed_description, embed_fields=embed_fields)
            await conn.execute(ins)
            
    asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())
    
    async def getData(self, embed_title: str):
        meta = MetaData()
        engine = create_async_engine(
            f"postgresql+asyncpg://{USERNAME}:{PASSWORD}@{SERVER_IP}:{PORT}/{DB}", connect_args={"check_same_thread": False}
        )
        dataTable = Table(
            "embeds",
            meta,
            Column("user_id", BigInteger),
            Column("title", String),
            Column("description", String),
            Column("embed_fields", JSONB),
        )
        async with engine.connect() as conn:
            s = dataTable.select(dataTable.c.title == str(embed_title))
            res = await conn.stream(s)
            async for row in res:
                return row
            
    asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())
    
    async def getUserEmbeds(self, user_id: str):
        """Gets all embeds from a user

        Args:
            user_id (str): User's UUID
        """
        async with engine.connect() as conn:
            userSelect = embedsTable.select().filter(embedsTable.c.user_id == user_id)
            async for row in userSelect:
                return row