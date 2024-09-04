from flask_sqlalchemy import SQLAlchemy
from .user import User

db = SQLAlchemy()

class Post(db.Model):
  __tablename__ = "posts"

  id = db.Column(
    db.Integer, primary_key=True
  )
  post = db.Column(
    db.String, nullable=False
  )
  user_id = db.Column(
    db.Integer
  )