<?php 
register_sidebar(array(
	'name' => __('1st Right Sidebar'),
	'id' => 'first-right-sidebar',
	'description'   => '',
	'before_widget' => '<div class="1st-r-sidebar">',
	'after_widget' => '</div>',
	'before_title'  => '<h2 class="widgettitle">',
	'after_title'   => '</h2>'

));

register_sidebar(array(
	'name' => __('2nd Right Sidebar'),
	'id' => 'second-right-sidebar',
	'description'   => '',
	'before_widget' => '<div class="2nd-r-sidebar">',
	'after_widget' => '</div>',
	'before_title'  => '<h2 class="widgettitle">',
	'after_title'   => '</h2>'

));

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'projectos_zonum',
    array(
      'labels' => array(
        'name' => __( 'Proyectos' ),
        'singular_name' => __( 'Proyecto' )
      ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'proyectos'),
    )
  );
}

add_theme_support( $feature, $arguments );

add_action('after_setup_theme', 'add_general_theme_support');
function add_general_theme_support(){
	add_theme_support( 'post-thumbnails');
}



//adicionando lo que soporta en las páginas e informaciones de los proyectos
function add_proyectos_supports(){
	$proyectos_supports = array('editor', 'author', 'thumbnail', 'excerpt', 'custom-fields' );
	add_post_type_support( 'projectos_zonum', $proyectos_supports ) ;
}
 add_action( 'init', 'add_proyectos_supports' );


function add_scripts_to_page(){
	wp_enqueue_style('slick-g-style', get_template_directory_uri().'/css/slick.css');
	wp_enqueue_style('slick-theme-style', get_template_directory_uri().'/css/slick-theme.css');
	//wp_enqueue_script('jquery');
	wp_register_script('add-proyectos-script',get_template_directory_uri().'/js/proyectos.js', array('jquery'), '',true);
	wp_register_script('add-slick-slide-script', get_template_directory_uri().'/js/slick.js', '', '',true);
	wp_enqueue_script('add-proyectos-script');
	wp_enqueue_script('add-slick-slide-script');
}

function mytheme_customize_register( $wp_customize ) {
   //All our sections, settings, and controls will be added here
}
add_action('wp_enqueue_scripts', 'add_scripts_to_page');
add_action( 'customize_register', 'mytheme_customize_register' );

include('admin/govi-admin.php');
