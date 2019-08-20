require('./init');

// Hint: ads should never be loaded with setTimeout. Figure out how ads should be loaded after GPT is ready.
// setTimeout(function () {
//     // Load Ads
//     googletag.pubads().refresh();
// }, 3000);


// create new Script tag and append that as the lst child of our Head tag
let biddersScript = document.createElement('script');
biddersScript.type = 'text/javascript';
biddersScript.src = './src/bidders/bidders.js';
biddersScript.defer = true;
let head = document.querySelector('head');
head.appendChild(biddersScript);
