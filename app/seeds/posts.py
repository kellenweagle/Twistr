from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text


def seed_posts():
    post_one = Post(
        post='',
        user_id=1
    )
    post_two = Post(
        post="I've been reading a lot of books about urban naturalism recently, and the one big thing they all talk about is how you HAVE to stop seeing nature as something that happens somewhere else. nature is not just charismatic megafauna and state parks and mountain ranges. nature is that abandoned lot that's growing native milkweed in it. nature is the murder of crows that lives in your block. nature is the moss growing on your roof and the dandelions growing in the sidewalk cracks and the song birds at your neighbor's birdfeeder. and you should care about it! you should notice it! that's YOUR nature!",
        user_id=2
    )
    post_three = Post(
        post="Folly in La Garenne Lemot, France.",
        user_id=3
    )
    post_four = Post(
        post='people are always like "enemies to lovers is so toxic, why can\'t all romances be best friends to lovers-" because that\'s literally 99% of relationships in real life. it\'s FICTION, guys. we can get weird in fiction. we can get freaky with it',
        user_id=4
    )
    post_five = Post(
        post='I have no strong opinions regarding the correct length for spaghetti, but I can\'t help but feel that folks who insist they have to break their spaghetti because otherwise it won\'t fit in the pot are fundamentally misunderstanding the nature of pasta.',
        user_id=1
    )
    post_five = Post(
        post='This photo is upside down (how my scans showed up) and it\'s actually kinda rad that way. The stuff in the pond looks like stars and the trees look like their own reflections. It\'s a very neat perspective of this photo.',
        user_id=2
    )
    post_six = Post(
        post='ALLRIGHT i finished some more of the new ruined tilemap!!! sooo what do y\'all think!!! its still a wip and i just put the ruins in the same place as the old tilemap did but i like it so far!!!!!! i think i\'m going into the right direction!',
        user_id=3
    )
    post_seven = Post(
        post='human beings r animals human beings r a part of nature whether u personally engage with it or not!!! Nature is the air you breathe',
        user_id=4
    )
    post_eight = Post(
        post='doodling a bunny vs doodling a hare',
        user_id=1
    )
    post_nine = Post(
        post='remember everyone. soup does not have to be hard to make. soup saves my ass at least three times a week. you don\'t even need broth. and you can make it single serve. in like 15 minutes. get some water put it in a pot. add a little bit of bullion or use broth if you have it. (one jar of bullion lasts me like months you don\'t need a lot) add to that whatever the hell you want. soy sauce. oyster sauce. black vinegar. sesame oil. hoisin sauce. garlic powder. onion powder. salt and pepper. want it spicy? add chili flakes or oil or smoked paprika. literally whatever you have floating around in the cabinet or fridge will do. don\'t forget! add something sweet (sugar honey maple syrup etc) to balance out the salt. let it get hot. add in some vegetables. again, literally anything. whatever you got. can be frozen stuff. onions. corn. peas. edamame. broccoli. carrots. green beans. mushrooms. literally whatever. put in something with protein. tofu. meat of some sort. wait until it boils. add some noodles. any kind of noodles. cook until the noodles are soft. top with whatever you want. and there you have it. soup.',
        user_id=2
    )
    post_ten = Post(
        post='(｀＾´ )',
        user_id=3
    )
    post_eleven = Post(
        post='',
        user_id=4
    )
    post_twelve = Post(
        post='he has made you soup with heart-shaped scallions',
        user_id=1
    )
    post_thirteen = Post(
        post='today\'s bug thing is this beetle bread!',
        user_id=2
    )
    post_fourteen = Post(
        post='I have a friend who, like me, does not have “heart feels” when cooking. We need measurements. We need exact replicable steps. Cooking should be more like baking where if I follow instructions precisely I\'ll have the same meal each time. So when he asked his mom for her recipes he was vexed to find that she\'d say one thing but use a lot more or less than the spice she\'d said. Her approximated recipes were much less vibrant that the real food she made. His solution: he weighed her spices before and after the meal while noting all the steps she took. Finally. A recipe that was true.',
        user_id=4
    )
    post_fifteen = Post(
        post='gab bois',
        user_id=1
    )
    post_sixteen = Post(
        post='"Why do my mashed potatoes never taste like restaurant mashed potatoes" because restaurant mashed potatoes are, according to most published recipes, roughly 15% milk fat by volume. They\'re basically potato-flavoured whipped cream.',
        user_id=2
    )
    post_seventeen = Post(
        post='Maybe everything that dies some day comes back',
        user_id=3
    )
    post_eighteen = Post(
        post='cats know keyboard shortcuts even microsoft doesnt know about',
        user_id=4
    )
    post_nineteen = Post(
        post='If you\'re reading this, you\'re on Tumblr!',
        user_id=1
    )
    post_twenty = Post(
        post='',
        user_id=2
    )


    db.session.add(post_one)
    db.session.add(post_two)
    db.session.add(post_three)
    db.session.add(post_four)
    db.session.add(post_five)
    db.session.add(post_six)
    db.session.add(post_seven)
    db.session.add(post_eight)
    db.session.add(post_nine)
    db.session.add(post_ten)
    db.session.add(post_eleven)
    db.session.add(post_twelve)
    db.session.add(post_thirteen)
    db.session.add(post_fourteen)
    db.session.add(post_fifteen)
    db.session.add(post_sixteen)
    db.session.add(post_seventeen)
    db.session.add(post_eighteen)
    db.session.add(post_nineteen)
    db.session.add(post_twenty)

    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
