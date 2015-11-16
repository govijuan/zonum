				
				
				<?php $prime_nav_args = array	(
													'theme_location' => 'primary'
												)
				?>
				
			
		</div>
		<nav class="main-navigation"><?php wp_nav_menu($prime_nav_args);?></nav>
		<!-- -->
		<footer>
			<div class="credits">
				<?=date('Y');?> &copy; Zonum <br> Desarrollado por <a href="http://jccriacaodesites.com.br/?lang=es">JC Criação de Sites</a>
			</div>
		</footer>
		<?php wp_footer(); ?>
	</body>
</html>