from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_sqlalchemy import SQLAlchemy
from .user import User
from .post import Post


class Comment(db.Model):
  __tablename__ = "comments"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(
    db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False
  )
  post_id = db.Column(
    db.Integer, db.ForeignKey(add_prefix_for_prod('posts.id')), nullable=False
  )
  comment = db.Column(db.String(1000), nullable=False)
  users = db.relationship("User", back_populates="comments")
  posts = db.relationship("Post", back_populates="comments")

  def to_dict(self):
    return {
      'id': self.id,
      'comment': self.comment,
      'post_id': self.post_id,
      'user_id': self.user_id
    }
