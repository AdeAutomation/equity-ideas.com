


/**
 This function creates a filter search for the html table
 **/
function myFunction() {

	var $rows = $('#mytable tbody tr');
	$('#myInput').keyup(function() {

		var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
			reg = RegExp(val, 'i'),
			text;

		$rows.show().filter(function() {
			text = $(this).text().replace(/\s+/g, ' ');
			return !reg.test(text);
		}).hide();
	});
}
