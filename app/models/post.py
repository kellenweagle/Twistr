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
  image_one = db.Column(db.String(255), nullable=True)
  image_two = db.Column(db.String(255), nullable=True)
  image_three = db.Column(db.String(255), nullable=True)
  image_four = db.Column(db.String(255), nullable=True)

  comments = db.relationship('Comment', back_populates='posts', cascade="all, delete-orphan")
  likes = db.relationship('Like', back_populates='posts', cascade="all, delete-orphan")
  images = db.relationship('Image', back_populates='posts', cascade="all, delete-orphan")
  users = db.relationship("User", back_populates="posts")

  def to_dict(self):
    return {
      'id': self.id,
      'post': self.post,
      'user_id': self.user_id,
      'image_one': self.image_one,
      'image_two': self.image_two,
      'image_three': self.image_three,
      'image_four': self.image_four,
    }
