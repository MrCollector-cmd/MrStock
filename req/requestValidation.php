<?php
    include("../config/configuration.php");
if($_POST['eliminar'] == 'eliminar'){
    foreach($_POST as $prod => $valor){
        $c = "SELECT * FROM pedidos ORDER BY PRODUCTO";
        $r=mysqli_query($csql, $c);
        $dato=mysqli_fetch_assoc($r);
    $c2 ="UPDATE pedidos SET
            PEDIDO=NULL
        WHERE PRODUCTO='$prod'";
        mysqli_query($csql, $c2);
    }
}
else{
    foreach($_POST as $prod => $valor){
        $c = "SELECT * FROM pedidos ORDER BY PRODUCTO";
        $r=mysqli_query($csql, $c);
        while($dato=mysqli_fetch_assoc($r)){
          if($prod == $dato['PRODUCTO']){
            $pedidoC=$dato['STOCK'] + $valor;
            $c2 ="UPDATE pedidos SET
            PEDIDO=NULL,
            STOCK='$pedidoC'
        WHERE PRODUCTO='$prod'";
            mysqli_query($csql, $c2);
            $pedidoC = 0;
          }
        }
    }
}
header("Location: ../index.php?seccion=pedido");

