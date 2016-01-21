<!doctype html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title><?php bloginfo('title')?></title>
		<link rel="icon" type="image/png" href="<?php echo get_option('govi_favicon'); ?>">
		    <!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<link rel="stylesheet" href="<?php bloginfo('stylesheet_url')?>">
		<?php wp_head()?>
	</head>
	<body>
	
		<div id="bgThree" style="background-image: url('<?php echo get_option('govi_feat_bg_image');?>');">
			
			
		</div>
		
		<a href="<?php echo home_url('/')?>" class="logo-container">
			<div class="b-w-logo-c"><img src="<?php echo get_option('govi_logo');?>" class="logo-img" /></div>
			<div class="color-logo-c"><img src="<?php echo get_option('govi_color_logo');?>" class="logo-img" /></div>
			<div class="mobile-logo"><img src="<?php echo get_option('govi_mobile_logo');?>"></div>
		</a>
		<div class="social-midia-wrap">
			<a href="<?php echo get_option('govi_facebook_link');?>" class="facebook-g-link" target="_blanc">f</a><br>
			<a href="<?php echo get_option('govi_linkedin_link');?>" class="linkedin-g-link" target="_blanc">i</a><br>
			<a href="<?php echo get_option('govi_youtube_link');?>" class="instagram-g-link" target="_blanc">y</a>
			<?php do_action('icl_language_selector'); ?>
		</div>
		