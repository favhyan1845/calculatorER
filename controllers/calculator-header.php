<?php 

function calculator_header($atts = [], $content = null, $tag = ''){
        ob_start();
        require_once plugin_dir_path(CALCULATOR_PLUGIN_PATH.' ').'/view/calculator-header.php';
        return ob_get_clean();
        
}
