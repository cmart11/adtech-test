## Slader AdTech Coding Challenge

You will be implementing a simple header bidding client in Javascript, which contains a tiny subset of functionality from our live script. The goal of this exercise is not only for us to see your skills in actions but also for you to get an introduction to header bidding.

### Instructions

You have been provided with a starter webpack app inside the `./app` folder.

You have to write JavaScript to fetch bids from Amazon(A9) using the APS library, run an auction using GPT library, and render the winning ad. Both GPT and APS have already been initialized and configured for you in `init.js`. Test ads are also loading through GPT.

Please do not spent more than 3 hours on this challenge. Feel free to leave comments on what you would have done differently if you had more time. You will be given the opportunity to talk about what else could have been done in the in-person interview.

Feel free to reply back to email from which you received assignment with any questions or concerns.

### Tips
* Instructions are vague on purpose. We are curious to see how you will interpret them and would like to leave implementation details up to you
* Remember that in a production system, you will be fetching bids from multiple bidders, so make sure it's easy to add additional bidders (aka use proper architecture)
* A README.md or proper code documentation which allows us to easily understand your code makes our life much easier
* Due to the asynchronous nature of header bidding, race conditions are a BIG problem. How can you mitigate that? Can we maybe catch it happening with some nice console logs? ;)
* Ensure you're following ads best practices

### Bonus Points
* Refresh ad slots every 30 seconds
* Only load ads that are visible on the page

### Setup

### Prerequisites

```bash
cd /path/to/app/
npm install
```

### Compile

```bash
cd /path/to/app/
node_modules/.bin/webpack -p
```

### Start Server

```bash
cd /path/to/app/
npm start
```

### Dev Mode (Runs server and live reloads JS)

```bash
cd /path/to/app/
npm run dev
```

### Resources
[GPT Documentation](https://developers.google.com/doubleclick-gpt/)  
[A9 Display Example](/images/a9_display_example.png)  
[A9 Display Deep Example](/images/a9_display_deep_example.png)  
[A9 Integration Verification](/images/a9_integration_verification.png)  
[A9 API Reference](/images/a9_api_reference.png)  

### Helpful commands

```javascript
googletag.openConsole(); //to debug gpt
apstag.debug('enable'); //activates aps debug mode and always returns test creative
googletag.pubads().refresh(); //forces an ad load/refresh
```

### Submission

Please zip up your code and reply to email from which you received assignment.