from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Post, db
from app.forms import PostForm

post_routes = Blueprint('posts', __name__)

# Get all posts
@post_routes.route('/')
def posts():
  posts = Post.query.all()

  return {'posts': [post.to_dict() for post in posts]}

# Create a post
@post_routes.route('/', methods=['POST'])
@login_required
def post():
  form = PostForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = current_user.to_dict()

    post = Post(
      post=form.data['post'],
      user_id=str(user["id"])
    )
    db.session.add(post)
    db.session.commit()
    return post.to_dict()
  return form.errors, 401

# Update a post
@post_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update(id):
  post = Post.query.get(id)
  form = PostForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = current_user.to_dict()
    if str(post.user_id) == str(user['id']):
      post.post = form.data['post']

      db.session.commit()
      return post.to_dict()
  return 'Post does not belong to user', 401

# Delete a post
@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete(id):
  post = Post.query.get(id)
  user = current_user.to_dict()
  if str(post.user_id) == str(user['id']):
    db.session.delete(post)
    db.session.commit()
    return 'Delete Successful'
  return 'Post does not belong to user', 401
