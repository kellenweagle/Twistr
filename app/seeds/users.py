from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',first_name='Kellen', last_name='Weagle', email='demo@aa.io', password='password1')
    marnie = User(
        username='marnie', first_name='Royce', last_name='Calvin', email='marnie@aa.io', password='password2')
    bobbie = User(
        username='bobbie', first_name='Roy', last_name='Bryant', email='bobbie@aa.io', password='password3')
    charlie = User(
        username='charlie', first_name='Matt', last_name='Howard', email='charlie@aa.io', password='password4')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(charlie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
