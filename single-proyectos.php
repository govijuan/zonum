<?php get_header()?>
<div id="proyecto-container">
<div class="proyecto-txt-wrap">
<div class="proyecto-left-txt">
	<?php while(have_posts()): the_post()?>
		<h1><?php the_title()?></h1>
		<?php the_content()?>
<div class="clearfix"></div>
</div>
</div>
<div class="proyecto-gallery">
<div><?php the_post_thumbnail( 'large' );?></div>
<?php if(get_field('imagen_2')):?>
	<div><img src="<?php the_field('imagen_2')?>"/></div> 
<?php endif;?>
<?php if(get_field('imagen_3')):?>
	<div><img src="<?php the_field('imagen_3')?>"/></div>
<?php endif;?>
<?php if (get_field('imagen_4')):?>
	<div><img src="<?php the_field('imagen_4')?>"/></div>
<?php endif;?>
<?php if (get_field('imagen_4')):?>
	<div><img src="<?php the_field('imagen_5')?>"/></div>
<?php endif;?>
</div>
<?php endwhile;?>
<div class="clearfix"></div>
<?php get_footer()?>
