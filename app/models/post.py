from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_sqlalchemy import SQLAlchemy
from .user import User
# from datetime import datetime



class Post(db.Model):
  __tablename__ = "posts"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}


  id = db.Column(db.Integer, primary_key=True)
  post = db.Column(db.String(10000), nullable=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  # created_at = db.Column(
  #   db.DateTime, default=datetime.now
  # )
  # updated_at = db.Column(
  #   db.DateTime, default=datetime.now, onupdate=datetime.now
  # )
  comments = db.relationship('Comment', back_populates='posts')
  likes = db.relationship('Like', back_populates='posts')
  images = db.relationship('Image', back_populates='posts')
  users = db.relationship("User", back_populates="posts")

  def to_dict(self):
    return {
      'id': self.id,
      'post': self.post,
      'user_id': self.user_id,
      'images': [image.to_dict() for image in self.images]
      
    }
