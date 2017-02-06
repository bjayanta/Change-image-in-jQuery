$(document).ready(function() {
	var reader  = new FileReader();
	$("#change-img").on('change', function(ev) {
		var file = ev.target.files[0];
		if(file) {
			reader.readAsDataURL(file);
		}

		$(reader).on('load', function() {
			var imgURL = reader.result;
			$("#profile-pic").attr({
				src: imgURL
			});
		});
	});
});