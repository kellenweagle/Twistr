from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Post, db
from app.forms import PostForm

post_routes = Blueprint('posts', __name__)


@post_routes.route('/')
@login_required
def posts():
  posts = Post.query.all()
  return {'posts': [post.to_dict() for post in posts]}

@post_routes.route('/', methods=['POST'])
@login_required
def post():
  form = PostForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    post = Post(
      post=form.data['post']
    )
    db.session.add(post)
    db.session.commit()
    return post.to_dict()
  return form.errors, 401
