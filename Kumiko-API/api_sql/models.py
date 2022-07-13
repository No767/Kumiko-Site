from sqlalchemy import (BigInteger, Boolean, Column, String, Text, delete,
                        select, ForeignKey)
from sqlalchemy.orm import relationship
from .db import Base

class User(Base):
    # dont deal with passwords rn
    __tablename__ = "users"
    user_uuid = Column(String, primary_key=True)
    is_active = Column(Boolean, default=True)
    items = relationship("Item", back_populates="owner")
    
    
class EmbedItem(Base):
    __tablename__ = "embeds_data"
    
    uuid = Column(String, primary_key=True)
    owner_id = Column(String, ForeignKey("users.user_uuid"))
    owner = relationship("User", back_populates="embeds")
    title = Column(String)
    description = Column(Text)
    embed_name = Column(String)
    embed_description = Column(Text)
    embed_inline = Column(Boolean, default=True)
    
    def __repr__(self):
        return f"EmbedData(uuid={self.uuid}, owner_id={self.owner_id}, title={self.title}, description={self.description}, embed_name={self.embed_name}, embed_description={self.embed_description}, embed_inline={self.embed_inline})"

