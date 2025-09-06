// #!/usr/bin/env node
//
// ==UserScript==
// @name         BJ's Coupon Auto-Clipper
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Automatically clips all BJ's coupons as they load on the page
// @author       You
// @match        https://www.bjs.com/myCoupons
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to clip coupons
    function clipCoupons() {
        const buttons = document.querySelectorAll(
            'button.Buttonstyle__StyledButton-sc-1p91mnj-0.cyDgas'
        );

        buttons.forEach(btn => {
            if (!btn.dataset.clicked) {
                btn.click();
                btn.dataset.clicked = "true"; // mark so we don't double click
            }
        });
    }

    // Main entry point
    function main() {
        clipCoupons();

        // Watch for dynamically loaded coupons
        const observer = new MutationObserver(() => {
            clipCoupons();
        });

        // Start observing the body for added/removed elements
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Run script
    main();
})();
