# front-end-mock-chat-implementation
This is a simple implementation of a chat system using HTML5, CSS3 and vanilla JavaScript.

# Usage

Clone the repository on your local system.
Then open the index.html on your browser (preferably Chrome or Firefox)

# Functionalities

# Add user

You can add a user via the add user menu in the top half of the page. 
Simply type in a user's name and click the + button. This will add a chat box for the new user in the bottom half of the page.
There are checks in place to handle edge cases like:
1. If the username field is left blank and + is clicked, the webpage will alert the user that he needs to input a valid name
2. If an existing username is typed into the input section and the + button is clicked, the page will alert the user that the chat is already active

# Chat features

The chat section will create individual chat-boxes for each user with the following information:
1. The name of the chat box user
2. The list of messages along with timestamp
3. An area to type new messages and send them

The chat messages in the chat box for a user named John will look like this:

You
> Hey guys! What's up?  8:20

Jane
> Not much man.         8:21

The same chats in Jane's chatbox will look like:

Jane
> Hey guys! What's up?  8:20

You
> Not much man.         8:21

# Future enhancements

The following enhancements will be made in the near future:

1. Retention of chat messages on page reload - Planning to use session storage
2. An alert on the other active chat boxes when a user is typing