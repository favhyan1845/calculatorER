<?php
function calculator_action() {
    
    require_once plugin_dir_path(CALCULATOR_PLUGIN_PATH.' ').'/includes/urls.php';
    $url = $_POST['lenguaje'];
    // $result = Urls::search($url);
    
    $results['status']='success';
    $results['msg']='valor';
    if ($result != null){
        $results['status']='error';
        $results['msg']=$result;
    }
    echo json_encode($results);
    wp_die();
    
}