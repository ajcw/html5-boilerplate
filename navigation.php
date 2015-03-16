<div>
	<ul>
		<?php

			$pages = array(
				['index','Home'],
				['page1','Page 1'],
				['page2','Page 2'],
				['page3','Page 3'],
				['page4','Page 4']
			);

			foreach ($pages as &$pages) {

				if ($pages[0] === currentBasePage()) {
					$linkClass = 'nav-link current';
				}
				else {
					$linkClass = 'nav-link';
				}

				echo '<li class="'.$linkClass.'"><a href="'.$pages[0].'">'.$pages[1].'</a></li>';
				
			}

		?>
	</ul>
</div>