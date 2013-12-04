<?php
	// Detect if this is the local dev site, or live site
	$current_url = array_shift(explode('.',$_SERVER['HTTP_HOST']));
	if (($current_url === 'local') || ($current_url === 'ajcw')) {
		$env = 'local';
	}
	else {
		$env = 'live';
	}
?>