browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        // Only trigger if the extension hasn't run already (or manually set)
        if(!details.url.includes("disable_polymer")) {
            // If there's already a query param
            query_start = "?"
            if (details.url.includes("?")) {
                query_start = "&"
            }

            // Turn off the new theme
            query_param = query_start + "disable_polymer=1"
            toUrl = details.url + query_param
            return {
                redirectUrl: toUrl 
            };
        }
    },
    {
        urls: [
            "*://www.youtube.com/",
            "*://www.youtube.com/watch*"
        ]
    },
    ["blocking"]);