<?php
	// Detect if this is the local dev site, or live site
	$current_url = array_shift(explode('.',$_SERVER['HTTP_HOST']));
	if (($current_url === 'local') || ($current_url === 'ajcw')) {
		$env = 'local';
	}
	else {
		$env = 'live';
	}

	// Returns the current page with no query string or .php extension
	function currentBasePage() {
		$file = $_SERVER['PHP_SELF'];
		$info = pathinfo($file);
		return basename($file,'.'.$info['extension']);
	}	
?>