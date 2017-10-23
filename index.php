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
	<link href='http://fonts.googleapis.com/css?family=Oswald:400' rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Raleway:700" rel="stylesheet"> 
	<link rel="author" href="{url_to_google_plus_profile}"/>
	<link rel="stylesheet" href="/css/styles.css" type="text/css" media="all" />	
	<link rel="stylesheet" href="/css/ie.css" type="text/css" media="all" />

</head>
<body class="home">
<input id="menu" type="checkbox">
<header class="squishy">
	<div>
		<a href="">LOGO</a>
		<nav>
			<a href="#">Home</a>
			<a href="#">About Us</a>
			<a href="#">Blog</a>
			<a href="#">Contact Us</a>
		</nav>
	</div>
	<label for="menu"></label>
	<nav class="infinity">
		<?php include("inc/nav.php");?>
	</nav>	
</header>
<main>
	<section class="white">
		<div class="flexslider heros">
			<div class="slides">
				<div class="hero">
					<div class="inner">
						<div class="content">
							<h1>Hero Slider</h1>
							<p>One liner paragraph text goes here.</p>
							<a class="button rounded" href="#">Button</a>
						</div>
					</div>
				</div>
				<div class="hero">
					<div class="inner">
						<div class="content align-left">
							<h1>Left Aligned Contents</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
							<a class="button rounded" href="#">Button</a>
						</div>
					</div>
				</div>
				<div class="hero">
					<div class="inner">
						<div class="content align-right">
							<h1>Right Align It</h1>
							<p>One liner paragraph text goes here.</p>
							<a class="button rounded" href="#">Button</a>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</section>
	<section>
		<div class="hero">
			<div class="inner">
				<div class="content">
					<h1>Stand Alone Hero</h1>
					<p>One liner paragraph text goes here.<br>And then it goes down a line.<br>And then it goes down a line.<br>And then it goes down a line.<br>And then it goes down a line.</p>
					<a class="button rounded" href="#">Button</a>
				</div>
			</div>
		</div>
	</section>
	<section class="max">
		<div class="component-row">
			<h1>Content Cards</h1>
			<p>Modular layers can be used in any order.</p>
			<div class="grid15">
				<div class="row">
					<div class="u-4-12 m-12-12 content-card">
						<figure>
							<a href="#"><img src="https://media.ed.edmunds-media.com/dodge/challenger/2010/oem/2010_dodge_challenger_coupe_srt8_fq_oem_3_500.jpg" width="100%" height="auto"></a>
						</figure>
						<div>
							<span class="category">Category</span>
							<h2 class="title"><a href="#">Top 100 Digital Agencies 2017: The state of the industry</a></h2>
							<date>28th February</date>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>							
						</div>
						<div><a href="#" class="button rounded">Read More</a></div>
					</div>
					<div class="u-4-12 m-12-12 content-card">
						<figure>
							<a href="#"><img src="https://media.ed.edmunds-media.com/dodge/challenger/2010/oem/2010_dodge_challenger_coupe_srt8_fq_oem_3_500.jpg" width="100%" height="auto"></a>
						</figure>
						<div>
							<date>28th February</date>
							<h2 class="title"><a href="#">Top 100 Digital Agencies 2017: The state of the industry</a></h2>							
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>							
						</div>
						<div class="user">
							<a href="#" class="avatar"><img src="http://www.translationwebshop.com/wp-content/themes/translationwebshop/images/img_placeholder_avatar.jpg" width="50" height="50"></a>
							<div class="name_title">
								<span>Mark Wigglesworth</span>
								<span>Senior Web Developer</span>
							</div>
						</div>						
					</div>
					<div class="u-4-12 m-12-12 content-card">
						<figure>
							<a href="#"><img src="https://media.ed.edmunds-media.com/dodge/challenger/2010/oem/2010_dodge_challenger_coupe_srt8_fq_oem_3_500.jpg" width="100%" height="auto"></a>
							<figcaption>
								<span class="category">Category</span>
								<h2 class="title"><a href="#">Revenue and Profit Rise at Google, but Mobile Struggles Continue</a></h2>
							</figcaption>							
						</figure>
						<div>
							<date>28th February</date>
						</div>
						<div class="user">
							<a href="#" class="avatar"><img src="http://www.translationwebshop.com/wp-content/themes/translationwebshop/images/img_placeholder_avatar.jpg" width="50" height="50"></a>
							<div class="name_title">
								<span>Mark Wigglesworth</span>
								<span>Senior Web Developer</span>
							</div>
						</div>							
						<div><a href="#" class="button rounded">Read More</a></div>
						<div class="stats">
							<a class="icon-ui-eye">69</a>
							<a class="icon-ui-heart">23</a>
							<a class="icon-ui-comment">2</a>
							<a class="icon-ui-star active"></a>
						</div>
					</div>
				</div>
			</div>
		</div>	
		<div class="component-row">
			<h1>Image Slideshow</h1>
			<div class="flexslider images">
				<div class="slides">
					<img src="http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg">
					<img src="http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg">
					<img src="http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg">
					<img src="http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg">
				</div>
			</div>
		</div>
		<div class="component-row">
			<h1>Modals</h1>
			<label class="modal-button button" for="modal-window-1">No JS Required</label>
			<a class="modal-button button" data-for="modal-window-2">JS Required</a>
		</div>
		<div class="component-row">
			<h1>Cookie Notice</h1>
			<p>Default styled as a box. Add class 'top' or 'bottom' for notice bar styles.</p>
			<a class="button" onclick="document.getElementById('cookies').className = 'cookies show';">Default</a>
			<a class="button" onclick="document.getElementById('cookies').className = 'cookies show top';">Top Bar</a>
			<a class="button" onclick="document.getElementById('cookies').className = 'cookies show bottom';">Bottom Bar</a>
		</div>			
		<div class="component-row">
			<h1>Notification Bars</h1>
			<p>Use the following: data-notify (text), data-position (top or bottom), data-color (hex, or named color).</p>
			<a class="button notify" data-notify="Hey" data-position="top">Top</a>
			<a class="button notify" data-notify="How ya'll doing?" data-position="bottom">Bottom</a>
			<a class="button notify" data-notify="Wait, I'm up here..." data-position="top" data-color="green">Green</a>
			<a class="button notify" data-notify="No, I'm down here..." data-position="bottom" data-color="red">Red</a>
			<a class="button notify" data-notify="Woah!" data-position="top" data-color="#8bd0ea">Any colour you like!</a>
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
	</section>
	<section>
		<div class="map" id="map" 
		data-api-key="AIzaSyCWg6EsSlK-EmCdimmWNodJr4adyFK_uAM" 
		data-longitude="51.5078521" 
		data-latitude="-0.1439478" 
		data-desktop-zoom="12" 
		data-tablet-zoom="14" 
		data-mobile-zoom="16" 
		data-info="<p><strong>Dublin, Ireland</strong></p><p>South County Business Park<br/>Leopardstown<br/>Dublin<br/>D18 T9P8</p>" 
		data-pin="/images/icons/pin.png"></div>
	</section>	
</main>
<footer>
	<div class="menu grid15">
		<div class="row">
			<div class="t-6-12 m-12-12">
				<h3>Title Here</h3>
				<nav>
					<a href="#">A Link Somewhere</a>						
					<a href="#">A Link Somewhere</a>
					<a href="#">A Link Somewhere</a>
					<a href="#">A Link Somewhere</a>
					<a href="#">A Link Somewhere</a>
				</nav>
			</div>
			<div class="t-6-12 m-12-12">
				<h3>Title Here</h3>
				<nav>
					<a href="#">A Link Somewhere</a>						
					<a href="#">A Link Somewhere</a>
					<a href="#">A Link Somewhere</a>
				</nav>
			</div>
			<div class="t-6-12 m-12-12">
				<h3>Title Here</h3>
				<nav></nav>
			</div>
			<div class="t-6-12 m-12-12">
				<h3>Title Here</h3>
				<nav></nav>
			</div>
		</div>
	</div>
	<div class="legal">
		<div>
			<p>&copy; Digiwig 2017</p>
			<p><a href="#">Terms and Conditions</a><a href="#">Privacy Policy</a><a href="#">Cookies</a></p>
		</div>
	</div>
</footer>
<div id="notify"></div>
<div class="modal">
	<input type="checkbox" class="modal-toggle" id="modal-window-1">
	<div class="modal-window-outer">
		<div class="modal-window-inner">
			<label class="modal-button icon-ui-cancel" for="modal-window-1"></label>
			<h2>I am a modal window</h2>
		</div>
	</div>
</div>
<div class="modal">
	<input type="checkbox" class="modal-toggle" id="modal-window-2">
	<div class="modal-window-outer">
		<div class="modal-window-inner">
			<label class="modal-button icon-ui-cancel" for="modal-window-2"></label>
			<h2>I am another modal window</h2>
		</div>
	</div>
</div>
<div class="cookies" id="cookies">
	<div class="cookies-inner">
		<div>
			<p>This website uses cookies. By continuing to browse the site you are agreeing to our use of cookies. For more details about cookies and how to manage them, <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank">see here</a>.</p>
<!-- 			<p>This website uses cookies to improve user experience. By using our website you consent to our use of cookies.</p>
			<p><a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank">Find out how to delete, block and manage cookies here</a>.</p> -->
		</div>
		<a class="button small">I got it!</a>
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
		getScript("/js/vendor/plugins/jquery.flexslider-min.js", function() {
			getScript("/js/scripts.min.js", function() {
				getScript("/js/custom/navigation.js");
				getScript("/js/components.js");
			});
		});

	});
})();
</script>
</body>
</html>