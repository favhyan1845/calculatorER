<?php 

class Urls{

    
    public $esp;
    public $active;
    
    public $novedades = array();
    
    public function __construct() {
    }
    
    public function search($url = null){    
            require_once plugin_dir_path(CALCULATOR_PLUGIN_PATH.' ').'/includes/data/class-datastore.php';             
                $response = Data_Store::search($url);
                return $response;
                
    }

    
}


