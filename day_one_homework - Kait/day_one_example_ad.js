$(document).ready(function () {
    // Ad has started.

    var agent = navigator.userAgent;
    var checkagent1 = agent.includes("Brightsign");
    var checkagent2 = agent.includes("MW22");
    var checkagent3 = agent.includes("MW15");

    //*** Opens an external URL in full screen window.
    function openExternalLinkFull(e, clickTag) {
        console.log("ad.js reporting - " + clickTag);
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestFullscreenBrowserView(clickTag);
        } else {
            window.open(clickTag);
        }
    }
    //***  Opens an external PDF in a window
    function openExternalPDF(e, pdfUrl) {
        console.log("ad.js reporting - " + pdfUrl);
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestPDFView(pdfUrl);
            event.stopPropagation();
        } else {
            window.open(pdfUrl);
        }
    }
    //*** Opens an external URL in a 1000 x 1000 browser window.
    function openExternalLinkSmall(e, clickTag) {
        console.log(clickTag);
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestBrowserView(clickTag);
        } else {
            window.open(clickTag);
        }
    }
    //*** Opens an external URL and lands on category with URL window is closed.
    function openExternalLinkThenCategory(e, linkURL, catPageId) {
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestRedirectedFullscreenBrowserView(linkURL, catPageId);
        } else {
            var newLine = "\r\n";
            window.alert("On the device this click will open this link: " + newLine + linkURL + ". " + newLine + newLine + "When the window is closed the user will be taken to this Category Id: " + newLine + catPageId);
        }
    }
    //*** Opens directly to a category landing page.
    function openCategoryPage(e, catPageId) {
        console.log(catPageId);
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestContentView(catPageId);
        } else {
            console.log("This is the category Id: " + catPageId);
        }
    }
    //*** Opens directly to a category landing page AND SUPRESSES INTERSTITIAL FROM OPENING WITHIN TOPIC.
    function openCategoryPageNoInt(e, catPageId) {
        console.log(catPageId);
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestNoInterstitialContentView(catPageId);
        } else {
            console.log("This is the category Id: " + catPageId);
        }
    }
    //***  Typically opens a Modal, but can be used to open an interstitial.
    function openModInt(e, brandName, jobId) {
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestInterstitialAdView(brandName, jobId);
            console.log(brandName + ", " + jobId);
            event.stopPropagation();
        } else {
            window.open("");
        }
    }

    function assignClickHandlers() {
        // ***  openExternalLinkFull -  Full screen
        $('.class')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "http://www.google.com");
        }, false);
        
        // ***  openExternalPDF - Links to PDF NOT website
        $('.class')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://www.merck.com/product/usa/pi_circulars/s/steglatro/steglatro_pi.pdf");
        }, false);
        
        // ***  openExternalLinkSmall - 1000 x 1000
        $('.class')[0].addEventListener("click", function (e) {
            openExternalLinkSmall(e, "http://www.google.com");
        }, false);
        
        // ***  openExternalLinkThenCategory - external URL then category page
        $('.class')[0].addEventListener("click", function (e) {
            openExternalLinkThenCategory(e, "http://www.google.com", "catPageId");
        }, false);
        
        // ***  openCategoryPage
        $('.class')[0].addEventListener("click", function (e) {
            openCategoryPage(e, "123456"); //  <-- catPageId goes between quotes
        }, false);
        
        // ***  openCategoryPage and suppresses Interstitial
        $('.class')[0].addEventListener("click", function (e) {
            openCategoryPageNoInt(e, "123456"); //  <-- catPageId goes between quotes
        }, false);

        // ***  openModInt
        $('.class')[0].addEventListener("click", function (e) {
            openModInt(e, "brandName", "jobID"); // <-- brand name is lowercase
        }, false);
    }
    assignClickHandlers();

});