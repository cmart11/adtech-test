/* eslint-disable wrap-iife */
/* eslint-disable no-unused-expressions */

//Ads libraries initialization
!function () {
    //Load GPT Library
    !function () {
        let tag = document.createElement('script');
        tag.type = 'text/javascript';
        tag.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
        let node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(tag, node);
    }();

    //Load APS Library
    !function (a9, a, p, s, t, A, g) { if (a[a9]) return; function q(c, r) { a[a9]._Q.push([c, r]) } a[a9] = { init: function () { q("i", arguments) }, fetchBids: function () { q("f", arguments) }, setDisplayBids: function () { }, targetingKeys: function () { return [] }, _Q: [] }; A = p.createElement(s); A.async = !0; A.src = t; g = p.getElementsByTagName(s)[0]; g.parentNode.insertBefore(A, g) }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

    //Initalize GPT
    window.googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(function () {
        googletag.pubads().enableAsyncRendering();
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.defineSlot('/40402830/Slader_300x250_ROS_BTF', [[300, 250]], 'SLADER-ROS-300x250-BTF').addService(googletag.pubads());
        googletag.defineSlot('/40402830/Slader_728x90_ROS_Anchor', [[728, 90]], 'SLADER-ROS-728x90-Anchor').addService(googletag.pubads());
        googletag.enableServices();
    });

    // Initialize APS
    apstag.init({
        pubID: '3225',
        adServer: 'googletag'
    });
}();