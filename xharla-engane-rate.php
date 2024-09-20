<?php

/**
 * Plugin Name: Xharla engagement  rate
 *
 * Version: 1.0.0
 *
 * Author: Xharla Webmaster
 *
 * Description: shortcodes: [calculator_engagement_rate_header]; [calculator_engagement_rate]; [calculator_engagement_rate_view]; [calculator_engagement_rate_total]
 */

final class xharla_engagement_rate {
    
    private static $instance;
    
    public static function instance(){
        if ( ! isset(self::$instance) && ! ( self::$instance instanceof xharla_engagement_rate) ) {
        self::$instance = new xharla_engagement_rate();
        spl_autoload_register( array( self::$instance, 'autoloader' ) );
        }
        
        return self::$instance;
    }
    
    public function __construct(){
        add_action( 'init', array( $this, 'init' ) );
    }
    
    public function init(){
        // register shortcode
        require_once dirname( __FILE__ ) . '/controllers/calculator-header.php';
        add_shortcode('calculator_engagement_rate_header', 'calculator_header');
        require_once dirname( __FILE__ ) . '/controllers/calculator.php';
        add_shortcode('calculator_engagement_rate', 'calculator_view_pub');
        require_once dirname( __FILE__ ) . '/controllers/calculator-view-video.php';
        add_shortcode('calculator_engagement_rate_view', 'calculator_view_video');
        require_once dirname( __FILE__ ) . '/controllers/calculator-view-total.php';
        add_shortcode('calculator_engagement_rate_total', 'calculator_view_total');

        //Registra los estilos
        wp_enqueue_style( 'bootstrap', plugins_url( '/vendor/bootstrap/css/bootstrap.min.css' , __FILE__ ));
        wp_enqueue_style( 'fontawesome', plugins_url( '/vendor/fontawesome/css/all.min.css' , __FILE__ ));
        wp_enqueue_style( 'calculator-css', plugins_url( '/assets/css/calculator.css' , __FILE__ ));
        wp_enqueue_style( 'calculator-video-css', plugins_url( '/assets/css/calculator-video.css' , __FILE__ ));
        wp_enqueue_style( 'datatables-css', plugins_url( '/vendor/datatables.css' , __FILE__ ));
        
        //Registra los JS
        wp_enqueue_script( 'bootstrap', plugins_url( '/vendor/bootstrap/js/bootstrap.bundle.min.js' , __FILE__ ), array( 'jquery' ),'1.0.0', true );
        // wp_enqueue_script( 'fontawesome', plugins_url( '/vendor/fontawesome/js/all.min.js' , __FILE__ ));
        wp_enqueue_script( 'datatables-js', plugins_url( '/vendor/datatables.js', __FILE__ ));
        wp_enqueue_script( 'calculator-js', plugins_url( '/assets/js/calculator.js', __FILE__ ));
        wp_enqueue_script( 'calculator-video-js', plugins_url( '/assets/js/calculator-video.js', __FILE__ ));
        wp_enqueue_script( 'calculator-total-js', plugins_url( '/assets/js/calculator-total.js', __FILE__ ));
        
        //Enlaza el JS
        require_once dirname( __FILE__ ) . '/controllers/calculator-action.php';    
        

        wp_localize_script( 'calculator-js', 'my_ajax_object',
        array( 'ajax_url' => admin_url( 'admin-ajax.php' )) );
        
        wp_localize_script( 'calculator-video-js', 'my_ajax_object',
        array( 'ajax_url' => admin_url( 'admin-ajax.php' )) );

        wp_localize_script( 'calculator-total-js', 'my_ajax_object',
        array( 'ajax_url' => admin_url( 'admin-ajax.php' )) );
        
        add_action( 'wp_ajax_nopriv_calculator_action', 'calculator_action' );
        add_action( 'wp_ajax_calculator_action', 'calculator_action' );
        
        //calculator_activate();
        define( 'CALCULATOR_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
        define( 'PLUGIN_DIR', dirname(__FILE__).'/' );  
    }
    public function autoloader( $class_name ){
    }
}


function xharla_engagement_rate(){
    return xharla_engagement_rate::instance();
}

xharla_engagement_rate();