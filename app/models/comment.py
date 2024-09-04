from flask_sqlalchemy import SQLAlchemy
from .user import User
from .post import Post

db = SQLAlchemy()

class Comment(db.Model):
  __tablename__ = "comments"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(
    db.Integer, db.ForeignKey('users.id'), nullable=False 
  )
  post_id = db.Column(
    db.Integer, db.ForeignKey('posts.id'), nullable=False 
  )
  comment = db.Column(db.String(1000), nullable=False)
  

  