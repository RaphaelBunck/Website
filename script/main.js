$(document).ready(function() {
	var name = ['R','a','p','h','a','ë','l'];
	var i = 0;

	var interval = setInterval(function() {
			var text = $('#typeName').html();
			$('#typeName').text(text + name[i]);
			i++;
			if(i >= name.length) {
				clearInterval(interval);
			}
		}, 150);
});