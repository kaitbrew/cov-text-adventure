$(document).ready(function () {

    // Ad has started.
    assignClickHandlers();

    var agent = navigator.userAgent;
    var checkagent1 = agent.includes("Brightsign");
    var checkagent2 = agent.includes("MW22");
    var checkagent3 = agent.includes("MW15");

    //*** Opens an external URL
    function openExternalLinkFull(e, clickTag) {
        console.log('link')
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestFullscreenBrowserView(clickTag);
        } else {
            window.open(clickTag);
        }
    }
    //external pdf
    function openExternalPDF(e, pdfUrl) {
        console.log('pdf')
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestPDFView(pdfUrl);
            event.stopPropagation();
        } else {
            window.open(pdfUrl);
        }
    }



    function assignClickHandlers() {
        //external links
        //customer click tag here
        $('#logo')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "https://www.neopets.com/");
        }, false);

        $('#button')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "https://www.neopets.com");
        }, false);



        //pdf links
        $('#pi')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://neopets.com");
        }, false);

        $('.footer-container')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "https://neopets.com");
        }, false);

        $('.company-logos')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "https://neopets.com");
        }, false);

    }
});