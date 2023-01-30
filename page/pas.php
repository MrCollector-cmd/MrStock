<?php
$seccion = isset($_GET['seccion']) ? $_GET['seccion']:'stock';

include("./config/configuration.php");
$c = "SELECT * FROM users WHERE EMAIL='123@gmail.com'";
$r = mysqli_query($csql, $c);
$dato = mysqli_fetch_assoc($r);
var_dump($r);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mr.Stock</title>
    <link rel="stylesheet" href="css/ge.css">
    <link rel="stylesheet" href="css/f.css">
    <link rel="stylesheet" href="css/history.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <script src="js/m.js"></script>
    <div class="recuadro">
    <h1>Bien venido, <?php ?></h1>
    <main>
        <nav>
            <ul class="nav_ul">
                <li class="nav_li" id="stock_button"><a href="#" onclick="show('stock')">Stock</a></li>
                <li class="nav_li" id="pedido_button"><a href="#" onclick="show('pedido')">Pedidos</a></li>
                <li class="nav_li" id="descuento_button"><a href="#" onclick="show('descuento')">Descuento</a></li>
            </ul>
            <div class="conteiner_nav" id="1">
                <div class="conteiner_form" id="pedido">
                    <form id="form_pedidos" class="form" action="../req/request.php" method="post">
                        <div class='form_control'>
                            <div class="form_input">
                                <p>Producto</p>
                                <select name='producto' class='form_lista' id='producto'>
                                <?php
                                while ($datos = mysqli_fetch_assoc($r)) {
                                    echo "<option>".$datos['PRODUCTO']."</option>";
                                }
                                ?>
                                </select>
                            </div>
                            <div class="form_input">
                                <p>A Pedir</p>
                                <input type="number" name='pedido' id='pedido'>
                            </div>
                        </div>
                        <div class='form_btn'>
                            <input class='btn' type="submit" value="Enviar" onclick='enviar_post("../req/request.php", "form_pedidos", true)'/>
                        </div>
                    </form>
                </div>
                <div class="conteiner_form" id="stock">
                        <form class="form" action="../req/requestIns.php" method="post">
                            <div class='form_control'>
                                <div class="form_input">
                                    <p class='form_titulos'>Producto a insertar</p>
                                    <input type="text" name='productos'>
                                </div>
                                <div class="form_input">
                                    <p class='form_titulos'>Stock</p>
                                    <input type="number" name='stock'>
                                </div>
                                <div class="form_input">
                                    <p class='form_titulos'>Unidad</p>
                                    <select name='unidad' class='form_lista'>
                                    <option>Kg</option>
                                    <option>Atado</option>
                                    <option>Bandeja</option>
                                    <option>Unidad</option>
                                    </select>
                                </div>
                            </div>
                            <div class='form_btn'>
                                <input class="btn" type="submit" value="Enviar">
                            </div>
                        </form>
                </div>
                <div class="conteiner_form" id="descuento">
                        <?php
                            include("./config/configuration.php");
                            $c = "SELECT PRODUCTO, ID AS idc FROM pedidos ORDER BY PRODUCTO";
                            $r = mysqli_query($csql, $c);
                        ?>
                        <form class="form" action="../req/reqDescontar.php" method="post">
                                <div class='form_control'>
                                    <div class="form_input">
                                        <p>Producto</p>
                                        <select name='producto' class='form_lista'>
                                        <?php
                                        while ($datos = mysqli_fetch_assoc($r)) {
                                            echo "<option>".$datos['PRODUCTO']."</option>";
                                        }
                                        ?>
                                        </select>
                                    </div>
                                    <div class="form_input">
                                        <p>A Descontar</p>
                                        <input type="number" name='cantidad'>
                                    </div>
                                </div>
                                    <div class='form_btn'>
                                        <input class='btn' type="submit" value="Enviar">
                                    </div>
                        </form>
                    </div>
                </div>
        </nav>
        <div class="historial" id="2">
            <form action="../req/requestValidation.php" method='post' class="form2" id="cartelera">
                <div id='cart'>

                </div>
                <div class="opciones">
                    <input type="submit" class="historial_envio" value=Enviar onclick='enviar_post("../req/requestValidation.php", "cartelera", true)'>
                    <input type="submit" class="historial_envio" value="eliminar" name="eliminar" onclick='enviar_post("../req/requestValidation.php", "cartelera", true)'>
                </div>
            </form>
        </div>
    </main>
    </div>
    <div class="contenedor_flechas">
        <ul>
            <li class="left">
                <a href="#1"><</a>
            </li>
            <li class="right">
                <a href="#2">></a>
            </li>
        </ul>
    </div>
    <div class="btn-descarga">
    <a href="tools/exel.php" >Descargar datos</a>
    </div>
</body>
</html>