				
				
				<?php $prime_nav_args = array	(
													'theme_location' => 'primary'
												)
				?>
				
			
		</div>
		<nav><?php wp_nav_menu($prime_nav_args);?></nav>
		<!-- -->
		<footer>
			<div class="credits">
				<?=date('Y');?> Copyright JC Criação de Sites
			</div>
		</footer>
		<?php wp_footer(); ?>
	</body>
</html>