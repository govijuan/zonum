<?php get_header()?>
<div id="nosotros-container">
<div class="centered">
	<?php while(have_posts()): the_post() ?>
		<div class="page-title-wrap"><h1><?php the_title()?></h1></div>
		<div id="nosotros-content">
		<?php the_content(__('Continue Reading')); ?>
		<div class="clearfix"></div>
	<?php endwhile; ?>

</div>
</div>

<?php get_footer()?>