# Twistr
Check out the live version at https://twistr-pqag.onrender.com

Twistr is a clone of tumblr, which is a social media website where users are able to share things like images or posts. Other users are also able to hear posts too. The backend of Twistr is built with flask with a PostgreSQL database. React is what is used on the frontend. Redux is used to manage state for the frontend.

# Features and Implementation

## React router and components

Twister is built as a single-page application (SPA) using React with Redux for efficient state management. The app’s routing structure places a persistent header component at the top, with all other components organized as its children, ensuring a cohesive and seamless navigation experience. When the page reloads, React calls Redux to re-render necessary components, allowing each page and interaction to load dynamically without requiring a full page refresh. This setup provides users with a smooth, uninterrupted experience across the platform.


## Frontend and Backend Interaction

Twister optimizes data retrieval by loading all posts from the server in a single request and storing them in the app’s state. This approach minimizes the need for repeated server calls, as other components are only rendered as needed. By reducing page reloads, this setup enhances site speed, ensuring a fast and seamless experience for users as they navigate through different sections of the app in React.

## splash page

![splashPage](./images/Screenshot%202024-11-13%20at%209.29.45%20PM.png)

Upon entering Twister, users are welcomed with a splash page displaying all posts in a scrollable feed. Unauthenticated users can view posts, likes, and comments, providing a preview of the community content. However, to interact—such as liking or commenting on posts—users need to log in, which encourages engagement while maintaining accessibility for browsing.

## Authentication

To create posts, like, or comment on content, users must log in or sign up via a modal form. The login form requires a username or email along with a hashed and encrypted password for security. During signup, unique usernames and emails are enforced to prevent multiple accounts, enhancing both user integrity and security on the platform.

### attributes
The User table includes columns for userName and hashedPassword, both stored as strings. It also contains an email column, formatted as a string to match email requirements, ensuring accurate data storage for user credentials and contact information.

## Posts CRUD
Retrieving posts is central to Twister's functionality, as the platform emphasizes user interaction through viewing, liking, and commenting on content. The splash page plays a critical role by loading all posts for easy browsing, creating a dynamic and engaging experience for users right from the start.

### attributes
The Posts table includes a user_id column as a foreign key referencing the User table, linking each post to its creator. Additional columns include post, image_one, image_two, image_three, and image_four, all stored as strings to accommodate text content and multiple images per post.

## Comments CRUD
Comments are essential to Twister’s social experience, allowing users to interact, socialize, and build connections around shared content. By enabling users to comment on posts, Twister fosters a sense of community and encourages engagement, making it easier for users to connect and form friendships on the platform.

### attributes
The Comments table includes user_id and post_id columns, both foreign keys that link each comment to a specific user and post. This structure ensures easy retrieval of comment data. Additionally, the comment column stores the text of the comment as a string, enabling users to leave messages on posts for social interaction.

## Likes CRUD
Likes are a key feature of Twister’s social experience, enabling users to express their interest in posts. By liking a post, users can engage with content they appreciate, fostering interaction and encouraging content discovery across the platform.

### attributes
The Likes table includes user_id and post_id columns, both foreign keys that associate each like with a specific user and post, allowing for efficient tracking of user interactions with content on the platform.


# Features
Here is a short description of each of the features


## create a new post

![postModal](./images/Screenshot%202024-11-13%20at%209.52.21%20PM.png)

When logged in, a button appears allowing users to create a new post. Clicking the button opens a modal with a form for submitting the post. Upon submission, a fetch request is sent to the backend to create the post. If successful, the modal closes, and the new post is displayed at the top of the splash page. In case of any errors, they are clearly shown in a designated area to guide the user in correcting the issue before submitting again.

## update Posts

![updatePost](./images/Screenshot%202024-11-13%20at%209.56.14%20PM.png)

To manage a post, users can click the three dots next to their post, revealing a button to update it. Clicking this button opens the same modal as when creating a new post, but with the existing post data pre-filled. Users can edit the content, erase previous data, and make changes as needed. Once they’re satisfied, clicking "Post" will save the updates and refresh the display with the updated post.

## Comment or like a Post

![CommentOrLike](./images/Screenshot%202024-11-13%20at%2010.01.20%20PM.png)

To like a post, simply click the heart icon, which will turn red to indicate the like. To unlike, click the heart again, and it will return to its original state. To comment on a post, click the comment button located at the top of the post. You can then type your comment and click the submit button. If everything works correctly, your comment will appear at the top of the comment section, allowing you to easily engage with others.

## Update Comment 

![updateComment](./images/Screenshot%202024-11-13%20at%2010.06.38%20PM.png)

To update a comment, click the three dots next to your comment. This will transform the comment into an editable format, allowing you to make changes. Once you've updated your comment, click the submit button to save the changes. The updated comment will replace the old one in the comment section.

## What to make it better
Future enhancements for Twister could include the addition of a search feature, allowing users to find posts or users based on specific keywords or criteria. Implementing query parameters would further refine the search functionality and improve the overall user experience. Integrating AWS could enhance file storage capabilities, especially for images, providing greater scalability and reliability. Additionally, adding following functionality, similar to Tumblr’s, would enable users to follow other accounts, while a radar-like feature could offer real-time updates or notifications based on user activity or posts, further enhancing the social aspect of the platform.



# Struggles
Some challenges during the development of Twister included issues with the like functionality, where initially all hearts turned red due to state management bugs. There were also difficulties in creating and updating posts, particularly with ensuring the correct data was saved and displayed. Additionally, the logic for loading posts created an infinite loop, which overwhelmed the website and affected performance. These issues were addressed by debugging and refining the state handling, ensuring smooth user interactions and improved performance across the platform.

# How To run this on locally

## technologies used for this project

### backend
click\
gunicorn\
itsdangerous\
python-dotenv\
six\
alembic\
python-dateutil\
python-editor\
greenlet\
flask\
flask-cors\
flask-login\
flask-migrate\
flask-sqlalchemy\
flask-wtf\
jinja2\
mako\
markupsafe\
sqlalchemy\
werkzeug\
wtforms\
importlib-metadata\
zipp\

### frontend
js-cookie\
react\
redux\
vite\
eslint

The first thing that you should do to run this locally on your computer is run pipenv install -r requirements.txt to install all the dependencies on the backend. you should also put a .env file just like the .env.example file that is included with your own items. Get into your pipenv, migrate your database, seed your database, and run your Flask app:
pipenv shell
flask db upgrade
flask seed all
flask run

next, you will cd into the frontend folder and run npm install to install the dependencies on the frontend. after you have installed those dependencies you will run npm run dev.



