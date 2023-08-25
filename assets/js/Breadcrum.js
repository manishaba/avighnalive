$('.topics a').on('click', function() {
	//selecting the syllabus class
	$select = $('<div class="syllabus"></div>');
	$(this).parents('li').each(function(n, li) {
		//Adding / to each anchor tag of li
		$select.prepend(' / ',$(li).children('a').clone());
	});
	// Displaying the hierarchical order of pages.
	$('.display').html(
	$select.prepend('<a href=".syllabus">Home</a>'));
})