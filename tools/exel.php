<?php
include("../config/configuration.php");
// Config del tiempo
date_default_timezone_set('America/Argentina/Buenos_Aires');
$fecha = date('d/m/Y'); 

header("Content-type: text/csv; charset=latin1");
header("Content-Disposition: attachment; filename= info/".$fecha."\.csv");

$salida=fopen('php://output','w');

fputcsv($salida, array('PRODUCTO','STOCK','UNIDAD','PEDIDO', $fecha));

$consulta = 'SELECT * FROM pedidos ORDER BY PRODUCTO';
$result=mysqli_query($csql, $consulta);
while ($fila = mysqli_fetch_assoc($result)) {
    fputcsv($salida, array($fila['PRODUCTO'],$fila['STOCK'],$fila['UNIDAD'],$fila['PEDIDO']));
}

?>