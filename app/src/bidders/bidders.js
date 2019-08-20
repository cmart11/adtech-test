const adUnits = [{
    slotID: 'SLADER-ROS-300x250-BTF',
    slotName: '/40402830/Slader_300x250_ROS_BTF',
    sizes: [[300, 250]]
},
{
    slotID: 'SLADER-ROS-728x90-Anchor',
    slotName: '/40402830/Slader_728x90_ROS_Anchor',
    sizes: [[728, 90]]
}];

class Bidders {
    constructor() {
        this.adUnits = adUnits;
        this.visibleUnits = [];
        this.refreshRate = 30e3;
    }

    // checks if unit is visible on the viewport
    isInViewport(element) {
        let bounding = element.getBoundingClientRect(); // grab ad units position on the viewport
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.document.documentElement.clientWidth)
        );
    }

    // only push visible ad units from our adUnits array to aps.fetchBids
    getUnitsInViewport() {
        this.adUnits.forEach(unit => {
            const ad = document.getElementById(unit.slotID);
            if (this.isInViewport(ad)) {
                this.visibleUnits.push(unit);
            }
        });

        this.visibleUnits.filter((unit, idx) => unit.slotID === this.adUnits[idx].slotID);
    }

    loop() {
        /*
            I think an approach to implement this loop method could involve
            reloading the ads every 30s while the user is currently on the page.
            We could check this by listening to document.hidden (returns true or false)
            and loop with SetInterval while document.hidden === false.
        */
    }

    runBidders() {
        let bidders = [this.aps]; // add new bid partners to bidders array
        if (window.googletag && googletag.apiReady) { // checking if GPT is ready before calling apstag.fetchBids
            this.getUnitsInViewport();
            for (const bidder of bidders) {
                bidder();
            }
        } else { //wait 1s for GTP to be ready and try again.
            console.log('GPT is not ready.');
            setTimeout(() => {
                return this.runBidders();
            }, 1e3);
        }
    }
}
const biddersInit = new Bidders();

// We can utilize Prototypal Inheritance to add new bidders.
Bidders.prototype.aps = function () {
    return apstag.fetchBids({
        slots: biddersInit.visibleUnits, //only pass in ad unit slots that are in the viewport
        timeout: 2e3
    }, function (bids) {
        googletag.cmd.push(function () {
            apstag.setDisplayBids();
            googletag.pubads().refresh();
        });
    });
};


biddersInit.runBidders();

/*
We could call the Bidders.loop function after our initial call to our SSPs:
biddersInit.loop();
*/
