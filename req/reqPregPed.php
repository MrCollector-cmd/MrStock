<?php
require ('../config/database.php');

$con = new Database();
$pdo = $con->conectar();

$sql= "SELECT * FROM pedidos ORDER BY PRODUCTO";
$query = $pdo->prepare($sql);
$query->execute();

$html ='';

while ($datos = $query->fetch(PDO::FETCH_ASSOC)) {
    if ($datos['PEDIDO'] != null) {
        $html.= "<div class='historial_pedido'>
             <p class='historial_titulo'>$datos[PRODUCTO]: </p>
             <p class='historial_titulo'>$datos[PEDIDO]</p> 
             <input type='checkbox' name='$datos[PRODUCTO]' value='$datos[PEDIDO]'>
         </div>";
    }
    
};
echo $html;
?>