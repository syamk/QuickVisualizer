;(function() {      // Start with a semicolon to ensure that it doesn't merge with the previous line, accidentally

// -----------------------------------------------------------------------------
// if jQuery is not present, include it
if (!window.jQuery) {
    // Add the latest version of jQuery from Google's CDN
    var head   = document.getElementsByTagName('head')[0],
        script = document.createElement('script');
    script.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js');
    head.appendChild(script);

    // Once jQuery is loaded, run the init() function
    script.onload = script.onreadystatechange = function(){
        if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
            init(window.jQuery);
        }
    };
} else {
  init(window.jQuery);
}


// -----------------------------------------------------------------------------
// The main function

function init($) {
    // Your code comes here.
}

})();
