from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text


def seed_posts():
    post_one = Post(
        post='',
        user_id=1
    )
    post_two = Post(
        post="I've been reading a lot of books about urban naturalism recently, and the one big thing they all talk about is how you HAVE to stop seeing nature as something that happens somewhere else. nature is not just charismatic megafauna and state parks and mountain ranges. nature is that abandoned lot that's growing native milkweed in it. nature is the murder of crows that lives in your block. nature is the moss growing on your roof and the dandelions growing in the sidewalk cracks and the song birds at your neighbor's birdfeeder. and you should care about it! you should notice it! that's YOUR nature!",
        user_id=2,
        image_one="https://64.media.tumblr.com/bd0b252e24dc8b4b4c319ad4c0f31c96/1108e6e8490775f5-04/s540x810/bad300907fa1ec51ca897273bbda57cdedbf21ff.webp",
        image_two="",
        image_three="",
        image_four=""
    )
    post_three = Post(
        post="Folly in La Garenne Lemot, France.",
        user_id=3,
        image_one="https://64.media.tumblr.com/7bcb28c565ee7248c8f3560e79209bd4/357e8cb1eb52580d-73/s540x810/53038aa224312e39f1e4a8a8fa4497281efec87e.jpg",
        image_two="",
        image_three="",
        image_four=""
    )
    post_four = Post(
        post='people are always like "enemies to lovers is so toxic, why can\'t all romances be best friends to lovers-" because that\'s literally 99% of relationships in real life. it\'s FICTION, guys. we can get weird in fiction. we can get freaky with it',
        user_id=4,
        image_one="",
        image_two="",
        image_three="",
        image_four=""
    )
    post_five = Post(
        post='This photo is upside down (how my scans showed up) and it\'s actually kinda rad that way. The stuff in the pond looks like stars and the trees look like their own reflections. It\'s a very neat perspective of this photo.',
        user_id=2,
        image_one="https://64.media.tumblr.com/0949c19566256e60f684dc901556c5d8/33946233dc724404-24/s540x810/a42da196ac197ef15247f45f6f7c66d79d9dc47a.jpg",
        image_two="",
        image_three="",
        image_four=""
    )
    post_six = Post(
        post='ALLRIGHT i finished some more of the new ruined tilemap!!! sooo what do y\'all think!!! its still a wip and i just put the ruins in the same place as the old tilemap did but i like it so far!!!!!! i think i\'m going into the right direction!',
        user_id=3,
        image_one="https://64.media.tumblr.com/f9fdc6a7f75d40f91d40666812544b78/e3222ac472639139-5b/s500x750/f9b64a30347fe3e7a9e7971fc9f7d49749e2249a.pnj",
        image_two="",
        image_three="",
        image_four=""
    )
    post_seven = Post(
        post='human beings r animals human beings r a part of nature whether u personally engage with it or not!!! Nature is the air you breathe',
        user_id=4,
        image_one="",
        image_two="",
        image_three="",
        image_four=""
    )
    post_eight = Post(
        post='doodling a bunny vs doodling a hare',
        user_id=1,
        image_one="https://64.media.tumblr.com/d05ba09b22b32cec65dca9916effc986/55b4dfb2be985f94-82/s540x810/ef90f1ea8929c5563d959db1dacba86de77ec935.pnj",
        image_two="",
        image_three="",
        image_four=""
    )
    post_nine = Post(
        post='remember everyone. soup does not have to be hard to make. soup saves my ass at least three times a week. you don\'t even need broth. and you can make it single serve. in like 15 minutes. get some water put it in a pot. add a little bit of bullion or use broth if you have it. (one jar of bullion lasts me like months you don\'t need a lot) add to that whatever the hell you want. soy sauce. oyster sauce. black vinegar. sesame oil. hoisin sauce. garlic powder. onion powder. salt and pepper. want it spicy? add chili flakes or oil or smoked paprika. literally whatever you have floating around in the cabinet or fridge will do. don\'t forget! add something sweet (sugar honey maple syrup etc) to balance out the salt. let it get hot. add in some vegetables. again, literally anything. whatever you got. can be frozen stuff. onions. corn. peas. edamame. broccoli. carrots. green beans. mushrooms. literally whatever. put in something with protein. tofu. meat of some sort. wait until it boils. add some noodles. any kind of noodles. cook until the noodles are soft. top with whatever you want. and there you have it. soup.',
        user_id=2,
        image_one="https://64.media.tumblr.com/8204d253144a14aa1628382554d5871d/a71bd88b5e746e5a-00/s540x810/5b63ef913c4818679b0ff70a1abed900378484f4.jpg",
        image_two="",
        image_three="",
        image_four=""
    )
    post_ten = Post(
        post='(｀＾´ )',
        user_id=3,
        image_one="https://64.media.tumblr.com/158b774af6cfdb30996e8b9ee0558193/ab8afeaa00dd7704-48/s400x600/d1802a7f380d1c876de01c12525aaaf20fb4f7f7.pnj",
        image_two="https://64.media.tumblr.com/0d1a3ab1ba797538d88114536f54f929/ab8afeaa00dd7704-c9/s400x600/40bd5f9fdfb884b145a4e04b652da5ef87ffdda5.pnj",
        image_three="https://64.media.tumblr.com/8d354fead055bb20e0d202ebdf0582db/ab8afeaa00dd7704-88/s400x600/99fb879e3ac2217634e5f5194e922e20504f46ec.pnj",
        image_four="https://64.media.tumblr.com/d693cb1d3600db67fa5c0b000481abb4/ab8afeaa00dd7704-e5/s400x600/158e3e1742b4f92aa31ef1b6e99d44042e2663a3.pnj"
    )
    post_eleven = Post(
        post='',
        user_id=4,
        image_one="https://64.media.tumblr.com/693ad6462ebde1cf034a05b794c918e4/08489d14f71bf317-bc/s540x810/9d7aa887fca78f645de2d104480cb0a2c7065c21.jpg",
        image_two="https://64.media.tumblr.com/ea19c0507b4145ad51061f85aecc2beb/08489d14f71bf317-3c/s540x810/e3809540f3ffdd61144af2f7969b55ce757a335d.jpg",
        image_three="",
        image_four=""
    )
    post_twelve = Post(
        post='he has made you soup with heart-shaped scallions',
        user_id=1,
        image_one="https://64.media.tumblr.com/https://64.media.tumblr.com/f5432f6c984daa2f9b24fa7af76e302d/71703aeb04ddc4f7-9c/s540x810/356bc2f5aa7f5efa88a23f357fdba8760ad768bf.jpg",
        image_two="",
        image_three="",
        image_four=""
    )
    post_thirteen = Post(
        post='today\'s bug thing is this beetle bread!',
        user_id=2,
        image_one="https://64.media.tumblr.com/d67bd311e0dece1b24f39d5a888e5f89/409271cd338b071a-a4/s540x810/2b86c005e08a50a7ce8372cec7ecc0164f45a500.jpg",
        image_two="",
        image_three="",
        image_four=""
    )
    post_fourteen = Post(
        post='I have a friend who, like me, does not have “heart feels” when cooking. We need measurements. We need exact replicable steps. Cooking should be more like baking where if I follow instructions precisely I\'ll have the same meal each time. So when he asked his mom for her recipes he was vexed to find that she\'d say one thing but use a lot more or less than the spice she\'d said. Her approximated recipes were much less vibrant that the real food she made. His solution: he weighed her spices before and after the meal while noting all the steps she took. Finally. A recipe that was true.',
        user_id=4,
        image_one="",
        image_two="",
        image_three="",
        image_four=""
    )
    post_fifteen = Post(
        post='gab bois',
        user_id=1,
        image_one="https://64.media.tumblr.com/7ebe3bbdaa2bd7b8fb2cdd8e2a30ffb2/a399208ef209cd96-7f/s540x810/76dd9466b704d9edcdf509a4f9a4a4fb252ba1b9.jpg",
        image_two="",
        image_three="",
        image_four=""
    )
    post_sixteen = Post(
        post='"Why do my mashed potatoes never taste like restaurant mashed potatoes" because restaurant mashed potatoes are, according to most published recipes, roughly 15% milk fat by volume. They\'re basically potato-flavoured whipped cream.',
        user_id=2,
        image_one="",
        image_two="",
        image_three="",
        image_four=""
    )
    post_seventeen = Post(
        post='Maybe everything that dies some day comes back',
        user_id=3,
        image_one="https://64.media.tumblr.com/f287fbe52d6cd4b26ff11eda5c289002/accef160bb1c5ccc-6b/s540x810/43ae96c16a4d591f1adcee20be99c989dd325bc4.webp",
        image_two="https://64.media.tumblr.com/57a0cbe06d84b77ca79a95995eff0b18/accef160bb1c5ccc-d8/s540x810/47d31342d672390707dd57e053ec2b6823f6d1c7.webp",
        image_three="https://64.media.tumblr.com/939ddd490a59e545467bab2d223c7418/accef160bb1c5ccc-f0/s540x810/c88284b5cdea1dcc17e3f7bbd45bbafa093f293f.webp",
        image_four=""
    )
    post_eighteen = Post(
        post='cats know keyboard shortcuts even microsoft doesnt know about',
        user_id=4,
        image_one="",
        image_two="",
        image_three="",
        image_four=""
    )
    post_nineteen = Post(
        post='If you\'re reading this, you\'re on Tumblr!',
        user_id=1,
        image_one="",
        image_two="",
        image_three="",
        image_four=""
    )
    post_twenty = Post(
        post='',
        user_id=2,
        image_one="https://64.media.tumblr.com/1dd84fb3c2f0ba59301e4964133376a0/51ee2fd61c9a129b-69/s540x810/96df6e531cfbd590c6f650d66feab7c4589d586d.jpg",
        image_two="",
        image_three="",
        image_four=""
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
