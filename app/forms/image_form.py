from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Post


class ImageForm(FlaskForm):
    url = StringField(
        'url', validators=[])
    post_id = IntegerField('post_id')
