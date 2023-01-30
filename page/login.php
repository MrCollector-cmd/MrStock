<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mr.Stock</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="all">
        <div class="conteiner_card">
            <form action="req/reqLogin.php" method="post" class="form">
                <input type="email" placeholder="Email" name="email" id="email" class="form_element email">
                <input type="password" name="password" placeholder="Contraseña" class="form_element password">
                <div class="divition"></div>
                <input type="submit" name="enviar" value="Enviar" class="form_element envio">
            </form>
        </div>
    </div>
</body>
</html>