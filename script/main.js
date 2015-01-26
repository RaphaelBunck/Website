$(document).ready(function() {
	var name = ['R','a','p','h','a','ë','l'];
	var i = 0;
	while(i < name.length) {
		var text = $('#typeName').html();
		$('#typeName').delay(1000).text(text + name[i]);
		i++;
	}
});