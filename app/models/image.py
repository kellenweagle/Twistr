from flask_sqlalchemy import SQLAlchemy
from .user import User
from .post import Post

db = SQLAlchemy()

class Image(db.Model):
  __tablename__ = "images"

  id = db.Column(db.Integer, primary_key=True)
  url = db.Column(db.String(255), nullable=False)
  post_id = db.Column(
    db.Integer, db.ForeignKey('posts.id'), nullable=False 
  )
  
  

  