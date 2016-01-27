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
register_nav_menus(array(
	'primary' => __( 'Men&uacute; Principal'  ),
	'mobile' => __( 'Men&uacute; para M&oacute;biles' )
));
add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'proyectos',
    array(
      'labels' => array(
        'name' => __( 'Proyectos' ),
        'singular_name' => __( 'Proyecto' ),
        'add_new' => __( 'A&ntilde;adir Nuevo Proyecto' ),
        'all_items' => __( 'Todos los Proyectos' ),
      ),
      'taxonomies' => array('category'),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'proyectos'),
      'publicly_queryable' => true,
      'show_ui' => true,
      'show_in_nav_menus' => true,
      'show_in_menu' => true
      
    )
  );
  register_post_type('clientes', 
  	array(
  		'labels' => array(
  			'name' => __('Clientes'),
  			'singular_name' => __('Cliente'),
  			'add_new' => __('A&ntilde;adir Nuevo Cliente'),
  			'all_items' => __('Todos los Clientes')
  		),
  		'public' => true,
  		'has_archive' => true,
  		'rewrite' => array('slug' => 'clientes'),
  		'publicly_queryable' => true,
	    'show_ui' => true,
	    'show_in_nav_menus' => true,
	    'show_in_menu' => true
  	)
  );
}

//add_theme_support( $feature, $arguments );

add_action('after_setup_theme', 'add_general_theme_support');
function add_general_theme_support(){
	add_theme_support( 'post-thumbnails');
}



//adicionando lo que soporta en las páginas e informaciones de los proyectos
function add_proyectos_supports(){
	$proyectos_supports = array('editor', 'author', 'thumbnail', 'excerpt', 'custom-fields' );
	add_post_type_support( 'proyectos', $proyectos_supports ) ;
}
 add_action( 'init', 'add_proyectos_supports' );
 function add_clientes_support(){
	 $clientes_support = array('editor', 'author', 'thumbnail', 'custom-fields');
	 add_post_type_support( 'clientes', $clientes_support ) ;
 }
add_action('init', 'add_clientes_support');

function add_scripts_to_page(){
	wp_enqueue_style('fonts-style', get_template_directory_uri().'/css/fonts.css');
	wp_enqueue_style('slick-g-style', get_template_directory_uri().'/css/slick.css');
	wp_enqueue_style('slick-theme-style', get_template_directory_uri().'/css/slick-theme.css');
	wp_enqueue_style('slicknav-theme-style', get_template_directory_uri().'/css/slicknav.css');
	//wp_enqueue_style('simple-lightbox-style', get_template_directory_uri().'/css/simplelightbox.min.css');
	wp_register_script('add-scrollpsy', get_template_directory_uri().'/js/scrollspy.js', '', '',true);
	wp_register_script('add-proyectos-script',get_template_directory_uri().'/js/proyectos.js', array('jquery'), '',true);
	wp_register_script('add-slick-slide-script', get_template_directory_uri().'/js/slick.js', '', '',true);
	//wp_register_script('Simple-lightbox-script', get_template_directory_uri().'/js/simple-lightbox.min.js', '', '',true);
	wp_register_script('add-slick-nav-script', get_template_directory_uri().'/js/jquery.slicknav.js', '', '',true);
	wp_enqueue_script('add-proyectos-script');
	wp_enqueue_script('add-slick-slide-script');
	wp_enqueue_script('add-slick-nav-script');
}

function mytheme_customize_register( $wp_customize ) {
   //All our sections, settings, and controls will be added here
}

add_action('wp_enqueue_scripts', 'add_scripts_to_page');
add_action( 'customize_register', 'mytheme_customize_register' );

include('admin/govi-admin.php');
