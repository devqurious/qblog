// myscripts.js
function myFunction(x) {
    let d = new Date();
    alert("Current datetime: " + d + "\nYou passed in: " + x);
}

// function setIframeHeight(iframe) {
// 	if (iframe) {
// 		var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
// 		if (iframeWin.document.body) {
// 			iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
// 		}
// 	}
// };

// window.onload = function () {
//     alert("calling onload");
// 	setIframeHeight(document.getElementById('foo'));
// };