<?php 

function calculator_view_pub($atts = [], $content = null, $tag = ''){
        ob_start();
        require_once plugin_dir_path(CALCULATOR_PLUGIN_PATH.' ').'/view/calculator.php';
        return ob_get_clean();
        
}
