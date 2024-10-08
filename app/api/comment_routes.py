from flask import Blueprint, request
from app.models import Comment, db
from flask_login import current_user, login_required
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)

# get all comments
@comment_routes.route('/<int:id>/comments')
def get_comments(id):
  comments = Comment.query.filter_by(post_id=id).all()
  return {'comments': [comment.to_dict() for comment in comments]}

# create a comments
@comment_routes.route('/<int:id>/comments', methods=['POST'])
@login_required
def create_comment(id):
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = current_user.to_dict()
    comment = Comment(
      comment=form.data['comment'],
      post_id=str(id),
      user_id=str(user['id'])
    )
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()
  return form.errors, 401

# update a comment
@comment_routes.route('/<int:id>/comments/<int:commentId>', methods=['PUT'])
@login_required
def update_comment(id, commentId):
  comment = Comment.query.get(commentId)
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = current_user.to_dict()

    if str(comment.user_id) == str(user['id']):
      comment.comment=form.data['comment']
      db.session.commit()
      return comment.to_dict()
  return "Comment doesn't belong to user", 401

# delete a comment
@comment_routes.route('/<int:id>/comments/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(id, commentId):
  comment = Comment.query.get(commentId)
  print('comment', comment)
  user = current_user.to_dict()

  if str(comment.user_id) == str(user['id']):
    comment_data = comment.to_dict()
    db.session.delete(comment)
    db.session.commit()
    return comment_data
  return "Comment doesn't belong to user", 401
