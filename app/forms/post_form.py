from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Post


class PostForm(FlaskForm):
    post = StringField(
        'post', validators=[DataRequired()])
    image_one = StringField('image_one')
    image_two = StringField('image_two')
    image_three = StringField('image_three')
    image_four = StringField('image_four')
