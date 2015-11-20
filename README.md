# youtube_mean
What it does :
1. Allows you to add movie from youtube as a list with its title and embeded URL.
2. It allows all CRUD functionality i.e. ADD,DELETE,PUT,GET,POST
3. You can watch the videos that is added to the list in the webpage itself.

How to Play with it :
1. Pull it from github
2. start your MongoDb
3. go to server folder from command line and run 
 $ node index
4. go to public folder from command line and run
$ grunt serve

Challenges :

1.  CORS Problem Solved it with adding CORS code in server side
you can see it in 
Server Folder > index.js
and Used RestAngular instead of ngResource for server side communication.
2. Embedding video in webpage Solved with creating a directive 'video' in angular in app.js.


Used Yo for Angular Scaffolding.