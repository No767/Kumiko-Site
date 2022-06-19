import asyncio
import os

import uvloop
from dotenv import load_dotenv
from sqlalchemy import BigInteger, Column, Integer, MetaData, Table, select, String
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.ext.asyncio import create_async_engine

load_dotenv()

PASSWORD = os.getenv("Postgres_Password_Dev")
SERVER_IP = os.getenv("Postgres_Server_IP_Dev")
USERNAME = os.getenv("Postgres_Username_Dev")
DB = os.getenv("Postgres_DB_Dev")
PORT = os.getenv("Postgres_Server_Port_Dev")


class EmbedSQLCrud:
    def __init__(self):
        self.self = self
        
    async def initTables(self):
        meta = MetaData()
        engine = create_async_engine(
            f"postgresql+asyncpg://{USERNAME}:{PASSWORD}@{SERVER_IP}:{PORT}/{DB}", echo=True
        )
        Table(
            "embeds",
            meta,
            Column("title", String),
            Column("description", String),
            Column("embed_fields", JSONB),
        )
        async with engine.begin() as conn:
            await conn.run_sync(meta.create_all)
            
    asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())
    
    async def insertData(self, embed_title: str, embed_description: str, embed_fields: dict):
        meta = MetaData()
        engine = create_async_engine(
            f"postgresql+asyncpg://{USERNAME}:{PASSWORD}@{SERVER_IP}:{PORT}/{DB}", connect_args={"check_same_thread": False}
        )
        dataTable = Table(
            "embeds",
            meta,
            Column("title", String),
            Column("description", String),
            Column("embed_fields", JSONB),
        )
        async with engine.begin() as conn:
            ins = dataTable.insert().values(title=embed_title, description=embed_description, embed_fields=embed_fields)
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