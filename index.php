	<?php header("Content-type: text/html; charset=utf-8"); ?>
<!doctype html>
<html lang="en">
<head>
	<title>{title}</title>
		
	<meta charset="utf-8">	
	<meta http-equiv="X-UA-Compatible" content="IE=edge">    	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">		
	<meta name="description" content="{description}">	
	<meta name="apple-mobile-web-app-title" content="{site_name}">
	<meta name="format-detection" content="telephone=no">	
		
	<link rel="canonical" href="{landing_page_url}"/>
	<link rel="dns-prefetch" href="{some content heavy page?}">
	
	<link rel="author" href="{url_to_google_plus_profile}"/>
	<link rel="stylesheet" href="/css/styles.css" type="text/css" media="all" />	
	<link rel="stylesheet" href="/css/ie.css" type="text/css" media="all" />

</head>
<body class="home">
<div id="notify"></div>
<input id="menu" type="checkbox">
<header>
	<label for="menu"></label>
</header>
<nav>
<?php include("inc/nav.php");?>
</nav>
<main>
	<div class="component-row">
		<h1>Notification Bars</h1>
		<a class="button notify" data-notify="From the top!" data-position="top">Top</a>
		<a class="button notify" data-notify="From the bottom!" data-position="bottom">Bottom</a>
		<a class="button notify" data-notify="Hurrah!" data-position="top" data-color="green">Green</a>
		<a class="button notify" data-notify="Booooo!" data-position="bottom" data-color="red">Red</a>
		<a class="button notify" data-notify="Yay!" data-position="top" data-color="#8bd0ea">Any colour you like!</a>
	</div>
	<div class="component-row">
		<h1>Button, Modal</h1>
		<label class="modal-button button" for="modal-window-1">Click Me</label>
		<label class="modal-button button rounded" for="modal-window-2">Rounded</label>
	</div>	
	<div class="component-row">
		<h1>Radio Accordions</h1>
		<div class="accordion">
			<input type="radio" name="radio" id="radio-1">
			<label for="radio-1" class="accordion-label">Accordion Title</label>
			<div class="accordion-content">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		<div class="accordion">
			<input type="radio" name="radio" id="radio-2">
			<label for="radio-2" class="accordion-label">Accordion Title</label>
			<div class="accordion-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
		</div>
		<div class="accordion">
			<input type="radio" name="radio" id="radio-3">
			<label for="radio-3" class="accordion-label">Accordion Title</label>
			<div class="accordion-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
		</div>
	</div>	
	<div class="component-row">
		<h1>Checkbox Accordions</h1>
		<div class="accordion">
			<input type="checkbox" id="checkbox-1">
			<label for="checkbox-1" class="accordion-label">Accordion Title</label>
			<div class="accordion-content">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		<div class="accordion">
			<input type="checkbox" id="checkbox-2">
			<label for="checkbox-2" class="accordion-label">Accordion Title</label>
			<div class="accordion-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
		</div>
		<div class="accordion">
			<input type="checkbox" id="checkbox-3">
			<label for="checkbox-3" class="accordion-label">Accordion Title</label>
			<div class="accordion-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
		</div>
	</div>
	<div class="component-row">
		<h1>Grids</h1>
		<?php include("inc/main.php");?>
	</div>
	
</main>
<footer></footer>
<input type="checkbox" class="modal-toggle" id="modal-window-2">
<div class="modal-window-outer">
	<div class="modal-window-inner">
		<label class="modal-button icon-ui-cancel" for="modal-window-2"></label>
		<h2>I am another modal window</h2>
	</div>
</div>		
<input type="checkbox" class="modal-toggle" id="modal-window-1">
<div class="modal-window-outer">
	<div class="modal-window-inner">
		<label class="modal-button icon-ui-cancel" for="modal-window-1"></label>
		<h2>I am a modal window</h2>
	</div>
</div>
<script type="text/javascript">
(function() {
	function getScript(url,success){
		var script=document.createElement('script');
		script.src=url;
		var head=document.getElementsByTagName('head')[0],
		done=false;
		script.onload=script.onreadystatechange = function(){
		if ( !done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ) {
			done=true;
			if(success) {
				success();
			}
			script.onload = script.onreadystatechange = null;
			head.removeChild(script);
		}
		};
		head.appendChild(script);
	}
	getScript("/js/vendor/jquery-3.1.1.min.js",function(){	
		if('ontouchstart' in window || navigator.msMaxTouchPoints){
			getScript("/js/vendor/fastclick.js");			
		}	
		getScript("/js/scripts.min.js", function() {
			getScript("/js/custom/cookies.js");
			getScript("/js/custom/navigation.js");
			getScript("/js/components.js");
		});
	});
})();
</script>
</body>
</html>