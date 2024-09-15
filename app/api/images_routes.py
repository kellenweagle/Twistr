from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Post,Image, db
from app.forms import ImageForm

images_routes = Blueprint('posts', __name__)



# Create a post
@images_routes.route('post/<int:post_id>/images', methods=['POST'])
@login_required
def post(post_id):
  
  form = ImageForm()
  # image_form = ImageForm()
  
  # image_form['csrf_token'].data = request.cookies['csrf_token']
  # if image_form.validate_on_submit():
  #   user = current_user.to_dict()
   
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = current_user.to_dict()
    

    image_url = []
    for 
    print(post, 'post')
    db.session.add(post)
    db.session.commit()
    print(post.id)

    # image = Image(
    #   url=image_form.data['url'],
    #   post_id=post.id
    # )
    # db.session.add(image)
    # db.session.commit()

    return post.to_dict()
  return form.errors, 401

# Update a post
@images_routes.route('/images/<int:id>', methods=['PUT'])
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


@images_routes.route('/images/<int:id>', methods=['DELETE'])
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