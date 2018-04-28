# BOOKCLUB FULL STACK APP #

Book Club App - Tirzah Evangelista

This is an app for Book Club members to create & follow club events and comment on the books they are reading. Sometimes you just can't wait for 3 weeks to share your thoughts about what you are reading.

Uses goodreads API:
https://www.goodreads.com/api

- Find books by title, author, or ISBN and pulls ratings and image of book.
- Login with Goodreads (after MVP is met)

## MVP USER STORIES: 
<!-- EVENTS:  -->
-As a user I want to create  an Event that includes the book(name, image, blurb/quote and (link to GoodReads.com reviews), Event Host name, Event Date & Event Location Address.
-As a user I want to be able to edit any element of an event I created, so I can make updates or fix errors in the event.
-As a user I want to be able to delete any event I created, so that I can remove an irrelevant or erroneous event.
-As a user, I want to be able to view details of any event past, current or future.
-As a user, I want to be able to get back to the main event page, so that I can view a different event or create a new one.
<!-- COMMENTS ON EVENTS-->
-As a user I want to create/read/update/delete comments, so that I can communicate with others that are following an Event.
-As a user I want to be able to indicate what chapter, page or Audio(time) I'm commenting about. (Is there a way to map what page/chapter the audio is on based on time input??), so that those reading my comment will know where/what my comment is refering to.

## POST MVP Ideas:
An * indicates the first idea I want to implement when I've completed MVP.
<!-- Directions -->
-As a User, I want to be able to click on the Event address and get directions to the event, so I don't have to copy the event address, then exit the app to access another app then paste my address then click get directions. (Maybe use Google maps API for directions?? https://developers.google.com/maps/documentation/directions/ ).
<!-- Clarity in commenting -->
-As a user I want to create/read/update/delete comments for both the event itself and the book, so that I can clearly communicate with others following an Event.
-As a user I want the areas to comment on the Event itself and the book to be visibly separate.
    <!-- comment replies & nesting -->
    -As a user I want to be able to reply to a comment, so that I can share my thoughts.
    -As a user I want to continue a reply thread, so that my reply to a comment has context and doesn't get lost.
    -As a user I only want to see one level of nesting in replies, so that it doesn't get too convoluted and remains easy to read.
    <!-- masked comments -->
    *-As a user I want to be able to mask(blur out) comments that have spoilers, along with chapter indicator, it allows the "comment-reader" to decide if they want to unmask spoiler comments based on where they are in the book as well.
    -As a user I do not want to reply to comments that are masked, so I don't unintentionally make an unrelated reply to a comment I can't read anyway.
    -As a User I want to be able to unmask comments that have spoilers in them, so that I can read the comment and possibly reply to it.
    -As a user I would like the option of getting notifications.

## Mind Map
![mindmap](https://user-images.githubusercontent.com/16514603/39389130-fb090836-4a42-11e8-9c1e-41d5e0b6cb99.png)
