<?php get_header()?>
<!--<div class="project-page-title-wrap"><h1>Escenografia + Stands + Eventos</h1></div>-->
<div id="container">
<div class="project-holder" >
<?php
	$args = array( 'post_type' => 'proyectos', 'category_name' => 'senalizacion-y-mobiliario', 'posts_per_page' => 10 );
	$loop = new WP_Query( $args );
	while ( $loop->have_posts() ) : $loop->the_post();?>
		<div><a href="<?php the_permalink() ?>">
			<div class="text-wrapper">
				<h2 class="tit-proy-destaque"><?php the_title();?></h2>
				<?php
					the_excerpt();?>
			</div>
			<div class="photo-wrapper">
			<?php the_post_thumbnail( 'medium' );
			
			
			echo '</div><div class="project-over"></div></a>
		</div>';
	endwhile;
?>
	
</div>

<?php get_footer()?>