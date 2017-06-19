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
<header>
	<button></button>
</header>
<nav>
<?php include("inc/nav.php");?>
</nav>
<main>
	<?php include("inc/main.php");?>
	<footer></footer>
</main>
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
		});
	});
})();
</script>
</body>
</html>