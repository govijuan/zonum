<?php get_header()?>
<div id="container">
<div class="centered-980">
<div id="left">
	<?php while(have_posts()): the_post()?>
		<h2><?php the_title()?></h2>
		<?php the_content()?>
		
	<?php endwhile;?>
	
	<?php comments_template('', true);?>
</div>
</div>

<?php get_footer()?>
