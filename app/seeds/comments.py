from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text


def seed_comments():
    comment_one = Comment(
        comment='my guy i think you took a photo of the fae world',
        user_id=2,
        post_id=5
    )
    comment_two = Comment(
        comment='Actually very rad',
        user_id=3,
        post_id=5
    )
    comment_three = Comment(
        comment='France is a point and click mystery game from the 90s',
        user_id=1,
        post_id=3
    )
    comment_four = Comment(
        comment='The cockroach in your apartment, that’s nature babeyyyy',
        user_id=3,
        post_id=2
    )
    comment_five = Comment(
        comment='A house spider that lives in your house is a wild animal.',
        user_id=4,
        post_id=2
    )
    comment_six = Comment(
        comment='your art kinda reminds me of those karameru animations',
        user_id=2,
        post_id=8
    )
    comment_seven = Comment(
        comment='OMG ADORABLE',
        user_id=3,
        post_id=8
    )
    comment_eight = Comment(
        comment='Ty for drawing the difference, cute art btw!!',
        user_id=4,
        post_id=8
    )
    comment_nine = Comment(
        comment='THATS SOME GOOD LOOKIN SOOP',
        user_id=1,
        post_id=9
    )
    comment_ten = Comment(
        comment='put chocolate in it',
        user_id=3,
        post_id=9
    )
    comment_eleven = Comment(
        comment='I love your art style ^_^',
        user_id=1,
        post_id=10
    )
    comment_twelve = Comment(
        comment='cute bunny',
        user_id=2,
        post_id=11
    )
    comment_thirteen = Comment(
        comment='That\'s very sweet, but I ordered an Angriest Whopper with a Spider-Verse cup.',
        user_id=3,
        post_id=12
    )
    comment_fourteen = Comment(
        comment='I LONG TO CONSUME THE BEETLE BREAD',
        user_id=1,
        post_id=13
    )
    comment_fifteen = Comment(
        comment='Dang it now I wanna make these',
        user_id=3,
        post_id=13
    )
    comment_sixteen = Comment(
        comment='HOW??????',
        user_id=4,
        post_id=13
    )
    comment_seventeen = Comment(
        comment='I wish I had the ability to do that for my egg donor\'s recipes...',
        user_id=1,
        post_id=14
    )
    comment_eighteen = Comment(
        comment='Oh, that\'s a solution I never would have thought of! Genius!',
        user_id=2,
        post_id=14
    )
    comment_nineteen = Comment(
        comment='That\'s such a great idea!! I cook by heart/taste, and this is gonna help my adhd ass so much!',
        user_id=3,
        post_id=14
    )
    comment_twenty = Comment(
        comment='Buying a bunch of things for $0 and having the total be $118 is true to life',
        user_id=2,
        post_id=15
    )
    comment_twentyone = Comment(
        comment='CVS Pharmacy',
        user_id=3,
        post_id=15
    )
    comment_twentytwo = Comment(
        comment='That\'s a receipt',
        user_id=4,
        post_id=15
    )
    comment_twentythree = Comment(
        comment='huh. so that\'s why i don\'t like restaurant mashed potatoes',
        user_id=1,
        post_id=16
    )
    comment_twentyfour = Comment(
        comment='also many restaurants use a ricer to “mash” the potatoes which makes them very smooth',
        user_id=3,
        post_id=16
    )
    comment_twentyfive = Comment(
        comment='The secret is always more butter.',
        user_id=4,
        post_id=16
    )
    comment_twentysix = Comment(
        comment='wow',
        user_id=1,
        post_id=17
    )
    comment_twentyseven = Comment(
        comment='My sisters cat put all her desktop folders into a subfolder and she still doesn’t know how he did it',
        user_id=1,
        post_id=18
    )
    comment_twentyeight = Comment(
        comment='Its the thumbs up turtle',
        user_id=2,
        post_id=18
    )
    comment_twentynine = Comment(
        comment='my cat pressed alt + f4 during an online call with a tutor and closed every single tab I had open',
        user_id=3,
        post_id=18
    )
    comment_thirty = Comment(
        comment='anybody know the way out?',
        user_id=2,
        post_id=19
    )
    comment_thirtyone = Comment(
        comment='The pinterest screenshotters are gonna find you',
        user_id=3,
        post_id=19
    )
    comment_thirtytwo = Comment(
        comment='No I\'m on a chair',
        user_id=4,
        post_id=19
    )
    comment_thirtythree = Comment(
        comment='For some reason my username is just not that common.',
        user_id=1,
        post_id=20
    )
    comment_thirtyfour = Comment(
        comment='I\'m the lord of my own kingdom(tumblr page)',
        user_id=3,
        post_id=20
    )
    comment_thirtyfive = Comment(
        comment='If the desired username is taken, you try to add numbers or the extra letters just to see if it will accept it lol',
        user_id=4,
        post_id=20
    )


    db.session.add(comment_one)
    db.session.add(comment_two)
    db.session.add(comment_three)
    db.session.add(comment_four)
    db.session.add(comment_five)
    db.session.add(comment_six)
    db.session.add(comment_seven)
    db.session.add(comment_eight)
    db.session.add(comment_nine)
    db.session.add(comment_ten)
    db.session.add(comment_eleven)
    db.session.add(comment_twelve)
    db.session.add(comment_thirteen)
    db.session.add(comment_fourteen)
    db.session.add(comment_fifteen)
    db.session.add(comment_sixteen)
    db.session.add(comment_seventeen)
    db.session.add(comment_eighteen)
    db.session.add(comment_nineteen)
    db.session.add(comment_twenty)
    db.session.add(comment_twentyone)
    db.session.add(comment_twentytwo)
    db.session.add(comment_twentythree)
    db.session.add(comment_twentyfour)
    db.session.add(comment_twentyfive)
    db.session.add(comment_twentysix)
    db.session.add(comment_twentyseven)
    db.session.add(comment_twentyeight)
    db.session.add(comment_twentynine)
    db.session.add(comment_thirty)
    db.session.add(comment_thirtyone)
    db.session.add(comment_thirtytwo)
    db.session.add(comment_thirtythree)
    db.session.add(comment_thirtyfour)
    db.session.add(comment_thirtyfive)

    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
