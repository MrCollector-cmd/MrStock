<?php
include("../config/configuration.php");
$stock = 0;
$des = $_POST['cantidad'];
$pro = $_POST['producto'];
$c = "SELECT PRODUCTO, STOCK FROM pedidos ORDER BY PRODUCTO";
$r=mysqli_query($csql, $c);
while($dato=mysqli_fetch_assoc($r)){
    if($dato['PRODUCTO'] == $pro){
        $stock = $dato['STOCK'];
    }
}
$pedidoC= $stock - $des;
$c2 ="UPDATE pedidos SET
    STOCK='$pedidoC'
    WHERE PRODUCTO='$pro'";
mysqli_query($csql, $c2);
header("Location: ../index.php?seccion=descuento");
