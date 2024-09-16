from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Post,Image, db
from app.forms import PostForm, ImageForm

post_routes = Blueprint('posts', __name__)

# Get all posts
@post_routes.route('/')
def posts():
  posts = Post.query.outerjoin(Image, Post.id == Image.post_id).distinct(Post.id).all()
 
  return {'posts': [post.to_dict() for post in posts]}

# Get One Post
@post_routes.route('/<int:id>')
def get_one_post(id):
  post = Post.query.get(id)

  return post.to_dict()

# Create a post
@post_routes.route('/', methods=['POST'])
@login_required
def post():
  
  form = PostForm()
 
   
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = current_user.to_dict()

    print("Form Data:", form.data)
    
    new_post = Post(
      post=form.data['post'],
      user_id=str(user["id"]),
      image_one=form.data['image_one'],
      image_two=form.data['image_two'],
      image_three=form.data['image_three'],
      image_four=form.data['image_four'],
    )
    print(new_post, 'pppppppppppppppppppoooooooooooooooosssssssssssssssstttttttttt')
    db.session.add(new_post)
    db.session.commit()
    

    return new_post.to_dict()
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
    post_data = post.to_dict()
    db.session.delete(post)
    db.session.commit()
    return post_data
  return 'Post does not belong to user', 401
