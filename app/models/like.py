from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_sqlalchemy import SQLAlchemy
from .user import User
from .post import Post


class Like(db.Model):
  __tablename__ = "likes"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}


  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(
    db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False 
  )
  post_id = db.Column(
    db.Integer, db.ForeignKey(add_prefix_for_prod('posts.id')), nullable=False 
  )
  users = db.relationship("User", back_populates="likes")
  posts = db.relationship("Post", back_populates="likes")
  
  def to_dict(self):
      return {
        'user_id': self.user_id,
        'post_id': self.post_id
      }
  

  