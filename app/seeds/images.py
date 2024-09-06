from app.models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text


def seed_images():
    image_one = Image(
        url='https://64.media.tumblr.com/bd0b252e24dc8b4b4c319ad4c0f31c96/1108e6e8490775f5-04/s540x810/bad300907fa1ec51ca897273bbda57cdedbf21ff.webp',
        post_id=1
    )
    image_two = Image(
        url='https://64.media.tumblr.com/7bcb28c565ee7248c8f3560e79209bd4/357e8cb1eb52580d-73/s540x810/53038aa224312e39f1e4a8a8fa4497281efec87e.jpg',
        post_id=3
    )
    image_three = Image(
        url='https://64.media.tumblr.com/0949c19566256e60f684dc901556c5d8/33946233dc724404-24/s540x810/a42da196ac197ef15247f45f6f7c66d79d9dc47a.jpg',
        post_id=5
    )
    image_four = Image(
        url='https://64.media.tumblr.com/f9fdc6a7f75d40f91d40666812544b78/e3222ac472639139-5b/s500x750/f9b64a30347fe3e7a9e7971fc9f7d49749e2249a.pnj',
        post_id=6
    )
    image_five = Image(
        url='https://64.media.tumblr.com/d05ba09b22b32cec65dca9916effc986/55b4dfb2be985f94-82/s540x810/ef90f1ea8929c5563d959db1dacba86de77ec935.pnj',
        post_id=8
    )
    image_six = Image(
        url='https://64.media.tumblr.com/8204d253144a14aa1628382554d5871d/a71bd88b5e746e5a-00/s540x810/5b63ef913c4818679b0ff70a1abed900378484f4.jpg',
        post_id=9
    )
    image_seven = Image(
        url='https://64.media.tumblr.com/158b774af6cfdb30996e8b9ee0558193/ab8afeaa00dd7704-48/s400x600/d1802a7f380d1c876de01c12525aaaf20fb4f7f7.pnj',
        post_id=10
    )
    image_eight = Image(
        url='https://64.media.tumblr.com/0d1a3ab1ba797538d88114536f54f929/ab8afeaa00dd7704-c9/s400x600/40bd5f9fdfb884b145a4e04b652da5ef87ffdda5.pnj',
        post_id=10
    )
    image_nine = Image(
        url='https://64.media.tumblr.com/8d354fead055bb20e0d202ebdf0582db/ab8afeaa00dd7704-88/s400x600/99fb879e3ac2217634e5f5194e922e20504f46ec.pnj',
        post_id=10
    )
    image_ten = Image(
        url='https://64.media.tumblr.com/d693cb1d3600db67fa5c0b000481abb4/ab8afeaa00dd7704-e5/s400x600/158e3e1742b4f92aa31ef1b6e99d44042e2663a3.pnj',
        post_id=10
    )
    image_eleven = Image(
        url='https://64.media.tumblr.com/693ad6462ebde1cf034a05b794c918e4/08489d14f71bf317-bc/s540x810/9d7aa887fca78f645de2d104480cb0a2c7065c21.jpg',
        post_id=11
    )
    image_twelve = Image(
        url='https://64.media.tumblr.com/ea19c0507b4145ad51061f85aecc2beb/08489d14f71bf317-3c/s540x810/e3809540f3ffdd61144af2f7969b55ce757a335d.jpg',
        post_id=11
    )
    image_thirteen = Image(
        url='https://64.media.tumblr.com/https://64.media.tumblr.com/f5432f6c984daa2f9b24fa7af76e302d/71703aeb04ddc4f7-9c/s540x810/356bc2f5aa7f5efa88a23f357fdba8760ad768bf.jpg',
        post_id=12
    )
    image_fourteen = Image(
        url='https://64.media.tumblr.com/d67bd311e0dece1b24f39d5a888e5f89/409271cd338b071a-a4/s540x810/2b86c005e08a50a7ce8372cec7ecc0164f45a500.jpg',
        post_id=13
    )
    image_fifteen = Image(
        url='https://64.media.tumblr.com/7ebe3bbdaa2bd7b8fb2cdd8e2a30ffb2/a399208ef209cd96-7f/s540x810/76dd9466b704d9edcdf509a4f9a4a4fb252ba1b9.jpg',
        post_id=15
    )
    image_sixteen = Image(
        url='https://64.media.tumblr.com/f287fbe52d6cd4b26ff11eda5c289002/accef160bb1c5ccc-6b/s540x810/43ae96c16a4d591f1adcee20be99c989dd325bc4.webp',
        post_id=17
    )
    image_seventeen = Image(
        url='https://64.media.tumblr.com/57a0cbe06d84b77ca79a95995eff0b18/accef160bb1c5ccc-d8/s540x810/47d31342d672390707dd57e053ec2b6823f6d1c7.webp',
        post_id=17
    )
    image_eighteen = Image(
        url='https://64.media.tumblr.com/939ddd490a59e545467bab2d223c7418/accef160bb1c5ccc-f0/s540x810/c88284b5cdea1dcc17e3f7bbd45bbafa093f293f.webp',
        post_id=17
    )
    image_nineteen = Image(
        url='https://64.media.tumblr.com/1dd84fb3c2f0ba59301e4964133376a0/51ee2fd61c9a129b-69/s540x810/96df6e531cfbd590c6f650d66feab7c4589d586d.jpg',
        post_id=20
    )


    db.session.add(image_one)
    db.session.add(image_two)
    db.session.add(image_three)
    db.session.add(image_four)
    db.session.add(image_five)
    db.session.add(image_six)
    db.session.add(image_seven)
    db.session.add(image_eight)
    db.session.add(image_nine)
    db.session.add(image_ten)
    db.session.add(image_eleven)
    db.session.add(image_twelve)
    db.session.add(image_thirteen)
    db.session.add(image_fourteen)
    db.session.add(image_fifteen)
    db.session.add(image_sixteen)
    db.session.add(image_seventeen)
    db.session.add(image_eighteen)
    db.session.add(image_nineteen)


    db.session.commit()

def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()
