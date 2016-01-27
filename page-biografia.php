<?php get_header()?>
<div id="container">
<div class="centered">
	<?php while(have_posts()): the_post() ?>
		<div class="page-title-wrap"><h1><?php the_title()?></h1></div>
		<div id="bio-page-content" >
		<?php the_content(__('Continue Reading')); ?>
		
	<?php endwhile; ?>

</div>
</div>

<?php get_footer()?>
