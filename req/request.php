<?php
    include("../config/configuration.php");
    $producto =mysqli_real_escape_string($csql,$_POST['producto']);
    $pedidos =$_POST['pedido'];
    $c ="
    UPDATE pedidos SET 
        PEDIDO='$pedidos'
    WHERE PRODUCTO='$producto'
    ";
    setcookie($producto,$pedido );
    mysqli_query($csql, $c);
    header("Location: ../index.php?seccion=pedido");
?>