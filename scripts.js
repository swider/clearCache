var callback = function(){
	document.body.innerHTML = "Cache cleared!";
	//setTimeout(window.close, 1500); Not allowed in Manifest 2, could add back by postMessaging from a sandboxed iframe
};
var oneWeekAgo = (new Date()).getTime() - (1000 * 60 * 60 * 24 * 7);
chrome.browsingData.remove({
	"since": oneWeekAgo
},{
	"cache": true,
	"localStorage": true
}, callback);
