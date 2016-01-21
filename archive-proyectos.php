<?php get_header()?>
<div id="container">
<div class="project-holder" >
<?php
	$args = array( 'post_type' => 'proyectos', 'posts_per_page' => 10 );
	$loop = new WP_Query( $args );
	while ( $loop->have_posts() ) : $loop->the_post();?>
		<div>
		<a href="<?php the_permalink(); ?>">
			<div class="text-wrapper">
				<div class="cat-projecto"><?php $category = get_the_category( $post->ID ); echo $category[0]->cat_name;?></div>
			
				<div class="proy-lower-info">
					<h2 class="tit-proy-destaque"><?php the_title();?></h2>
					<?php the_excerpt();?>
				</div>
			</div>
			<div class="photo-wrapper">
			<?php the_post_thumbnail( 'medium' );?>
			</div>
			<div class="project-over"></div>
		</a>
		</div>
			<?php
	endwhile;
?>
	
</div><! .project-holder -->

<?php get_footer()?>
 