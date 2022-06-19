from fastapi import FastAPI, APIRouter
from api_utils import EmbedSQLCrud
from pydantic import BaseModel

app = FastAPI()
router = APIRouter(prefix="/api/v1")
class EmbedFields(BaseModel):
    name: str
    value: str
    inline: bool = True
    
class Embeds(BaseModel):
    title: str
    description: str
    embed_fields: EmbedFields
    
embedUtils = EmbedSQLCrud
@app.post("/embed")
async def getDBData(embeds: Embeds):
    await embedUtils.insertData(embeds.title, embeds.description, embeds.embed_fields)
    return embeds