from flask_sqlalchemy import SQLAlchemy
from .user import User

db = SQLAlchemy()

class Post(db.Model):
  __tablename__ = "posts"

  id = db.Column(
    db.Integer, primary_key=True
  )
  post = db.Column(
    db.String(1000), nullable=False
  )
  user_id = db.Column(
    db.Integer, db.ForeignKey('users.id'), nullable=False 
  )
  comments = db.relationship('Comment', back_populates='post')
  likes = db.relationship('Like', back_populates='post')
  images = db.relationship('Image', back_populates='post')