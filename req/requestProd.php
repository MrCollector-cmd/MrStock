<?php
    include("../config/configuration.php");
    $stock = $_POST['stock']; 
    $producto =mysqli_real_escape_string($csql,$_POST['productos']);
    $unidad=$_POST['unidad'];
    $c ="
        INSERT INTO produccion SET 
            STOCK='$stock',
            PRODUCTO='$producto',
            UNIDAD='$unidad'
    ";
    $r=mysqli_query($csql, $c);
    header("Location: ../index.php?seccion=produccion");