const tweakFilmButtons = () => {
	const btnWatch = document.querySelector('#btn-film-watch');
	const btnDownload = document.querySelector('#btn-film-download');

	if (btnWatch) {
		btnWatch.setAttribute('style', 'display: inline-block !important' );
	}
	if (btnDownload) {
		btnDownload.setAttribute('style', 'display: inline-block !important' );
	}
}

// get download link when first loads the page
let url = window.location.href;
if (url.startsWith("http://www.phimmoizz.net/") || url.startsWith("http://www.phimmoiz.net/")) {
	tweakFilmButtons();
} 
