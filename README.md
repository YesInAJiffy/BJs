# BJs

> Instructions
- Login to your account in BJs and then go to below URL in Google Chrome 
https://www.bjs.com/myCoupons 
- Open Chrome Developer Tools
  - Goto Console in DevTools
  - Paste the below code 
  
```js

// Sleep, this is to introduce latency so the refresh is done properly.
function sleep(t) {  
  const start = Date.now();
  while (Date.now() - start < t);
}

// Main Function, triggers every 3 seconds
// The setInterval() method, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().
var interval = setInterval(function(){
    // Buttons are part of class called next-prev, example below
    // <button _ngcontent-bjs-universal-app-c242="" class="mt-2 btn gray-btn next-prev widthHeight"><i _ngcontent-bjs-universal-app-c242="" class="fa fa-plus"></i> CLIP TO CARD</button>
    
    // Get all the CLIP buttons
    var buttons = $("button.next-prev:contains('CLIP')");
    // Get the next button
    var nextLink = $("button.next-prev:contains('Next')");
    // Get first button from the buttons array.
    var btn = $(buttons.splice(0, 1));
    console.log("Clicking: " + buttons.length + " ", btn);
    // Trigger click on the first coupens CLIP
    btn.trigger( "click" );
    // If last button click and the page doesn't have next button, then clearinterval
    if (buttons.length === 0 && nextLink.length === 0 ) {
        console.log("Done");
        clearInterval(interval);
    }
    // If CLIP buttons are all clicked but Next pages available then click on the next page
    else if (buttons.length === 0) {
        nextLink.trigger( "click" );
        //Change the below from 50 to 3000, if you have a slow computer.
        sleep(50);
    }
}, 3000);

```
    
