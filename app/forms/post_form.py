from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Post


class PostForm(FlaskForm):
    post = StringField(
        'post', validators=[DataRequired()])
