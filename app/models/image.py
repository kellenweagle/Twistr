from flask_sqlalchemy import SQLAlchemy
from .user import User
from .post import Post
from .db import db, environment, SCHEMA, add_prefix_for_prod



class Image(db.Model):
  __tablename__ = "images"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}


  id = db.Column(db.Integer, primary_key=True)
  url = db.Column(db.String(255), nullable=False)
  post_id = db.Column(
    db.Integer, db.ForeignKey('posts.id'), nullable=False 
  )
  
  

  