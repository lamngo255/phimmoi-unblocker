chrome.webRequest.onBeforeRequest.addListener(
	function() {
		return {cancel: true};
	},
	{
		urls: [
			"*://www.phimmoizz.net/js/vtlai/movie/public/changecontent.js*", 
			"*://www.phimmoiz.net/js/vtlai/movie/public/changecontent.js*"
		]
	},
	["blocking"]
);