from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_sqlalchemy import SQLAlchemy
from .user import User



class Post(db.Model):
  __tablename__ = "posts"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}


  id = db.Column(
    db.Integer, primary_key=True
  )
  post = db.Column(
    db.String(1000)
  )
  user_id = db.Column(
    db.Integer, db.ForeignKey('users.id'), nullable=False
  )
  comments = db.relationship('Comment', back_populates='posts')
  likes = db.relationship('Like', back_populates='posts')
  images = db.relationship('Image', back_populates='posts')
  users = db.relationship("User", back_populates="posts")
