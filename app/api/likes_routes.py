from flask import Blueprint, jsonify, session
from flask_login import current_user, login_required
from app.models import Like , db

likes_routes = Blueprint('likes', __name__)


@likes_routes.route('<int:id>/likes')
def get_likes(id):
    """
    Query for all likes and returns them in a list of user dictionaries
    by post id
    """
    likes = Like.query.filter_by(post_id=id).all()
    

    return {'likes': [like.to_dict() for like in likes]}


@likes_routes.route('<int:id>/likes', methods=['post'])
@login_required
def like_post(id):
    """
    Query for a user by id and returns that user in a dictionary

    """
    user = current_user.to_dict()

    likes = Like.query.filter_by(post_id=id, user_id=str(user["id"])).all()

    if len(likes) < 1:
        new_like = Like(post_id=id, user_id= str(user["id"]))
        db.session.add(new_like)
        db.session.commit()
        return new_like.to_dict()
    else:
        return 'post has already been liked by this user.', 401

@likes_routes.route('<int:id>/likes', methods=['delete'])
@login_required
def delete_like(id):
    
    user = current_user.to_dict()
    like = Like.query.filter_by(post_id=id, user_id=user['id'])[0]
    
    
    if like:

        like_data = like.to_dict()
        db.session.delete(like)
        db.session.commit()
        return  like_data
    else:
        return 'Like does not belong to user', 401
