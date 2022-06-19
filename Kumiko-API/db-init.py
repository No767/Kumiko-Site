import asyncio
import uvloop
from api_utils import EmbedSQLCrud

utils = EmbedSQLCrud()

async def main():
    await utils.initTables()
    
asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())
asyncio.run(main())