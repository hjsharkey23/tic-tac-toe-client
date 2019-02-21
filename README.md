Technologies Used:
1. HTML
2. CSS
3. Javascript
4. jQuery
5. Bootstap
6. Atom IDE
7. Spotify =)

User Stories:
1. `As a user, I want to keep track of my stats so I can show my friends`
2. `As a user, I want to have good feeback from the game so that I know what's going on.`
3. `As a user, I want to always know who's turn it is`
4. `As a user, I want to see game data for previous games.`
5. `As a user, I want to be able to sign up and sign in to my account.`

Wireframe:
 https://imgur.com/a/25aw1iY


Planning:

To start, I will first make the game board using HTML and CSS, which will
at first just be a 9x9 square. After the board is created I will move on to
making click events that will display X or O on the board when a user clicks
a space. Next up will be the game engine which will most likely take up most of
my time. I know I have to make an empty array with a lenght of 9, one for each
space on the board. And then I will have to check for a winner by checking if
any 3 in a row are either X or O. Afterwards I will move onto finishing up the UI
by porviding the user with feedback for each action. Once I have everyhting working
locally with no bugs I will move on to setting up the user accounts to sign up
and sign in, and then finally I will connect the game to the API. If I have time
I will style everything at the end after I make sure everything is working
properly.

Development:

Stage 1: My first goal was to get a game working locally. The initial set up of
the game board in HTML was easy. I created nine spaces using SCSS grid. I gave
each cell a unique ID so that it could later be ifentified by the click handlers.

Once I had the visual game board set up I moved on to making X's and O's appear
on the board when I clicked on each space. I did this by having a seperate click
event for each space on the board. I then had to make a function that would help
determine who's turn it was so that each time a click happened it would switch
from X to O, and then back to O, and so on.

Stage 2: Once I was able to create X's and O's, I needed a way to check for a
winnder. This was done with an if else statement that was used for both X and O.
Once a winning condition was met, it ran a displayWinner function to show who
had won.

Stage 3. As previously mentioned. I began working on some of the UI messages to
display when something happened. I wanted to make sure the user got feeback on
each action. So I started with the displayWinner function which showed who won.
I also wanted a way for the user to always see who's turn it was. I did this by
using a currentPlayer and whichTurn function I had to keep track of the player
and the turn.

Stage 4. I constantly had to go back to my click events and update them with each
new function I made to make sure everything was getting updated on each click.
The click functions were also if else statements that would only run code if
certain conditions were meant.

For Example: I needed a way to keep track on the number of clicks so that spaces
could not be clicked twice. I did this by creating an empty board array. It has
a length of 9 and each index is set to 0. Once a click happened on the space, it
would increment by 1 to show that it had been clicked. Once it was set to one,
none of the code that involved a valid move could be run because of how the if else
statements were set up. It would only allow a valid move if the board array aligning
with each click event was set to zero. I had to make other conditions that would
check if the game was over to make sure you couldnt add to spaces after the game
was completed as well.

Stage 5: Once I had all my game logic and alerts set up. I moved onto settting up
the user accounts. This didn't take long as was one of the easier parts of the
project.

Stage 6: After the user accounts were set up and working. I needed to connect
the game to the API. This proved to be a difficult challenge but one that I was
able to figure out. I had the most trouble figuring out how to update the game
board on each click. Once I console logged the data that the API was sending, I
was able to figure out how I needed to format my data to send the API. It was
relatively easy after that, as I had already found a way to retrieve all the
data it was asking for.

Stage 7: This was a stage I did not anticipate but realized I had a few things
I needed to clean up. I realized my Reset Board button and my Create new game
button were completely seperate and needed to be merged together, so that
the board would reset locally along with all of my click counters, and also the
create game function would still update the API. This took a little while as I
had to make sure all of my require files were set up properly, but after that, I
just moved my createGame function into the reset button and then renamed the
reset button to 'Create Game'.

Stage 8: Finishing UI Touches:
I needed to properly hide and show the correct forms for when the user was signed
in or signed out. This was done usuing jQuery that targeted CSS elements.
By default the only thing displaying on the page is the Sign Up and Sign In forms.
I used a combintation of .hide and .show functions to display the game Board
and user messages once you were signed in. Signing out redisplays the orignal
forms and hides everyhting else that was originally hidden.


Unsolved Problems:
The biggest thing I was unable to complete was the styling. As it stands, this is
a functional game but there is little to no styling at all. I plan to use drop down
menus and give it a proper navigation bar as well as footer on the main page.
The game board itself will be made into a proper grid and have a much cleaner
layout in general.

I would also eventually like to add an AI so you could play by yourself, possibly
with an easy and a hard mode.
