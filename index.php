<?php get_header()?>
<div class="project-holder" >
<?php
	$args = array( 'post_type' => 'projectos_zonum', 'posts_per_page' => 10 );
	$loop = new WP_Query( $args );
	while ( $loop->have_posts() ) : $loop->the_post();?>
		<div>
		<div class="photo-wrapper">
		<?php the_post_thumbnail( 'medium' ); ?>
		</div>
		 <div class="text-wrapper">
		<h2 class="tit-proy-destaque"><a href="<?php the_permalink() ?>"><?php the_title();?> </a></h2>
		<?php echo '<div class="extracto-proyecto">';
		the_excerpt();
		echo '</div></div></div>';
	endwhile;
?>
	
</div>
<div class="centered-80">
<nav><?php wp_nav_menu();?></nav>

<div class="clearfix"></div>
</div>
<?php get_footer()?>
 