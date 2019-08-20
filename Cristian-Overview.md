## Code Challenge Overview

I began by creating a bidders.js file in our src folder to contain the script we will use to call our SSPs. 

This script needs to run after GPT has been successfully initialized and after the DIV elements we need to render the ad creative into have been rendered on the DOM. In our main.js file I've created a script to run our code in the bidders.js file after the DOM has conpleted rendering.

##bidders.js
I decided to adhere to OOP design patterns by creating a 'Bidders' class to store our 'adUnits' information as a property and methods for running our auction. By taking advantage of benefits such as encapsulation and inheritance we can experience increased code reusability, reduce complexity, isolate impact of changes, and eliminate redundant code. We can add additional bidders through the prototype chain as seen on line 40.  

## Troubleshooting
Enabling the aps 'debug mode' in the console verified that our Javascript intergration was indeed passing bid targeting to DFP (ad units passed to APS for bidding showed orange creative). 

When testing for end to end communication between our apstag js, APS servers, and DFP I was unable to confirm an APS response. This test was conducted by appending '?amzn_debug_mode=1' to the end of our url. By searching for 'gampad' in our network tab to confirm the DFP request and looking at the 'prev-scp' parameter, I saw an 'amnzbid' value of "Amznbid=2" which suggests that we are indeed getting a bid response but no bid was made for the ad units.


## What I would do if I had more time
If allotted more time for this excercise, I would try to diagnose why we're not recieving bids from APS for the adUnits by refactoring my current APS implementation. 

I have created a few methods to check which ad units are visible on the viewport. While running APS in 'debug mode' I can see that only the ad unit at the top is being rendered with the APS orange test creative while the anchor unit is being rendered with creative from Google. I would need to figure out how to get 'googletag.pubads().refresh()' to only run on the visible ads.

I have a rough idea of how I could approach the auto refresh of ads which I have written a summary of on line 43 in bidders.js.
 
 Thank you.
 -Cristian Martinez
