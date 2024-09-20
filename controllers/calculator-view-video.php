<?php 

function calculator_view_video($atts = [], $content = null, $tag = ''){
        ob_start();
        require_once plugin_dir_path(CALCULATOR_PLUGIN_PATH.' ').'/view/calculator-view.php';
        return ob_get_clean();
        
}
