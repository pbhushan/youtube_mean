# youtube_mean
What it does :<br>
1. Allows you to add movie from youtube as a list with its title and embeded URL.<br>
2. It allows all CRUD functionality i.e. ADD,DELETE,PUT,GET,POST.<br>
3. You can watch the videos that is added to the list in the webpage itself.<br>

How to Play with it :<br>
1. Pull it from github.<br>
2. start your MongoDb.<br>
3. go to server folder from command line and run<br>
 $ node index<br>
4. go to public folder from command line and run<br>
$ grunt serve<br>

Challenges :<br>

1.  CORS Problem Solved it with adding CORS code in server side you can see it in Server Folder > index.js 
and Used RestAngular instead of ngResource for server side communication. <br>
2. Embedding video in webpage Solved with creating a directive 'video' in angular in app.js.<br>


Used Yo for Angular Scaffolding<br>