from pydantic import BaseModel

class EmbedData(BaseModel):
    uuid: str
    title: str