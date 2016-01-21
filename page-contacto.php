<?php get_header()?>
<div id="contacto-container">
<div class="centered">
	<?php while(have_posts()): the_post() ?>
		<div class="page-title-wrap"><h1><?php the_title()?></h1></div>
		<div id="contacto-content">
				<div class="links-contacto-wrap">
					<div class="link-contacto"><a href="tel:<?php echo get_option('our_celphone');?>"><span class="phone-link">c</span>
					<p><?php echo get_option('our_celphone');?></p></a></div>
					<div class="link-contacto"><a href="tel:<?php echo get_option('our_office_p_numbr');?>"><span class="phone-link">t</span>
					<p><?php echo get_option('our_office_p_numbr');?></p></a></div>
					<div class="link-contacto"><a href="mailto:<?php echo get_option('our_email');?>"><span class="mail-link">e</span>
					<p><?php echo get_option('our_email');?></p></a></div>
					<div class="link-contacto"><a href="<?php echo get_option('our_whatsapp');?>"><span class="whatsapp-link">w</span>
					<p>WhatsApp</p></a></div>
					<div class="link-contacto"><a href="skype:<?php echo get_option('our_skype');?>?call"><span class="skype-link">s</span>
					<p><?php echo get_option('our_skype');?></p></a></div>
					<div class="link-contacto"><a href="<?php echo get_option('govi_facebook_link');?>"><span class="facebook-link">f</span>
					<p>ZONUM</p></a></div>
					<div class="link-contacto-direccion"><a href="#"><span class="adress-link">a</span>
					<p><?php echo get_option('our_adress');?></p></a></div>
					<div class="clearfix"></div>
				</div>
		<?php the_content(__('Continue Reading')); ?>
		<div class="clearfix"></div>
	<?php endwhile; ?>

</div>
</div>

<?php get_footer()?>