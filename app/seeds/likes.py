from app.models import db, Like, environment, SCHEMA
from sqlalchemy.sql import text


def seed_likes():
    like_one = Like(
        user_id=1,
        post_id=1
    )
    like_two = Like(
        user_id=1,
        post_id=18
    )
    like_three = Like(
        user_id=3,
        post_id=10
    )
    like_four = Like(
        user_id=2,
        post_id=1
    )
    like_five = Like(
        user_id=3,
        post_id=10
    )
    like_six = Like(
        user_id=2,
        post_id=15
    )
    like_seven = Like(
        user_id=1,
        post_id=13
    )
    like_eight = Like(
        user_id=2,
        post_id=19
    )
    like_nine = Like(
        user_id=3,
        post_id=1
    )
    like_ten = Like(
        user_id=3,
        post_id=12
    )
    like_eleven = Like(
        user_id=2,
        post_id=12
    )
    like_twelve = Like(
        user_id=3,
        post_id=20
    )

    


    db.session.add(like_one)
    db.session.add(like_two)
    db.session.add(like_three)
    db.session.add(like_four)
    db.session.add(like_five)
    db.session.add(like_six)
    db.session.add(like_seven)
    db.session.add(like_eight)
    db.session.add(like_nine)
    db.session.add(like_ten)
    db.session.add(like_eleven)
    db.session.add(like_twelve)
    


    db.session.commit()

def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM likes"))

    db.session.commit()
