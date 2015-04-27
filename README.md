##Developers
Jonathan Lin

##Date
April 21, 2015 - Current



##Description
This application will serve as a aggregator for various news sites. It will have individual views with news populated from different media APIs. It is currently connected to NPR and NYT api. User will be able to upvote and downvote the list to sort the stories and they will also be able to comment on the stories (these features are only local at the moment and are not persistent). Users will be able to click on the story title to show a short summary of the story (click the story to hide it) and will be able to click a link button to go directly to the story.

##Technologies Used
JavaScript
<br>
Angular JS
<br>
New York Times Articles API
<br>
National Public Radio API
<br>
JSONP
<br>
HTML
<br>
CSS with Bootstrap
<br>


## To-do
Move votes and comments to inside the factory. Set up the promise handling in the scope to respond if an error occurs. Execute API calls when user enters page to speed up load times. Refactor code. Make votes and comments persistent. 



##Use and Editing
To use the app, download the files from github. Open the index.html file in the browser of your choice. Open a terminal window and go to the project root folder. Start a server with either php or python at the root folder The webpage will open and allow the visitor to use the site.
<br>
Php -> php -S localhost:8000
Python -> python -m simpleHTTPServer

##Copyright (c) Jonathan Lin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
