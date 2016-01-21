<?php get_header()?>
<div id="nosotros-container">
<div class="centered all-clientes-holder">
	<?php 	$args = array( 'post_type' => 'clientes', 'posts_per_page' => 50 );
			$loop = new WP_Query( $args );
			while ( $loop->have_posts() ) : $loop->the_post();?>
		<div class="cleinte-holder">
			<div class="client-photo-wrapper">
			<?php the_post_thumbnail( 'medium' );?>
			</div>
		<h4><?php the_title()?></h4>
		<div id="clientes-content">
		<?php the_content(__('Continue Reading')); ?>
		<a href="<?php the_field('link_en_flickr')?>">ver mas sobre el proyecto ></a>
		<div class="clearfix"></div>
		</div></div>
	<?php endwhile; ?>

</div>
</div>

<?php get_footer()?>