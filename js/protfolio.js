$(document).ready(function(){
	loadGallery();
});

function loadGallery(){
	$('#gallery').galereya({
		load: function(next) {
			$.getJSON('gallery.json', function(data) {
				next(data);
			});
		}
	});
}