# Random Quote Generator
### Free Code Camp Project

**Objective**: Build an Random Quote Generator similar to the one in this [CodePen](https://codepen.io/FreeCodeCamp/full/ONjoLe/)

User Story: I can click a button to show me a new random quote.

User Story: I can press a button to tweet out a quote.

**Built with**:

  * Gulp
  * Sass
  * jQuery

  * Javascript
  * HTML
  * CSS

**Developer notes**:

The first step was to find a quotes API. I decided to use [this one found in the Mashape API marketplace](https://market.mashape.com/andruxnet/random-famous-quotes), because it was easy and free to use.

The Mashape documentation was helpful because it provides example JS code of making an API call. I elected to follow that instead of the getJSON examples in the previous FCC lessons.

Early on I knew that one of the personal touches I wanted to implement on this app was to use a random photo as the background. At first I used [Unsplash](https://unsplash.com/) because it's super easy to embed a link that will pull a random, high quality photo upon each reload.

Once I got the random quote generator functionality down, I tried to figure out how to implement a transition inbetween GET requests. I accomplished this using jQuery's `.addClass` and `.removeClass`, and setting the classes to either "focus" or "blur" the text, depending on if the text was on its way out or in.

The photos provided by Unsplash are really nice, but I needed a way to generate a new, random photo when needed. Unsplash's API has a limit and I thought the amount of requests they allocate per app-in-development was kinda low, so I went off in search of a new photo API.

I found [Pixabay](https://pixabay.com/api/docs/), and from skimming their docs, they offered a really high number of requests and a fairly straightforward way of accessing their API. I was able to implement a similar AJAX GET request without incident.

Personally, I preferred the photos offered by Unsplash.

I feel more confident in making API calls now, thanks to this project. I'm glad I challenged myself to make 2 different requests to 2 different APIs.

I'm wondering if there's a way to combine the requests into 1 AJAX call.

If I could spend more time improving this app, it would be to add a cross-fade transition to the photos.

Additionally, I'd find a way to make the box that surrounds the quote to increase/decrease in height smoothly too, when a new quote is requested.  
