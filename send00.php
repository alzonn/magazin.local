<html>
<head>
<title>Форма заявки с сайта</title>

 <style>
 
 a {margin: 50px auto ;  width: 370px; color: #ffffff; text-decoration: none;
    font-size: 30px; display: block; border-radius: 30px; transition: 1s;
    padding: 14px;     border: 2px solid #ffffff; text-align: center;
     background: rgba(218, 236, 42, 0.3);
 }
   a:hover {background: rgba(218, 236, 42, 0.6);}
    
 p {margin: 250px auto 0;  width: 500px; color: #ffffff; text-align: center;
    font-size: 30px; height: 61px;  padding: 23px 0 0;
background: radial-gradient(rgb(226, 220, 18, 0.7) 20%, rgba(158, 199, 32, 0) 70%); }

 body {/*background-color: rgba(171, 210, 52, 0.73);*/ font-family: arial;
         background: url(fotos/darky.jpg) center center / cover fixed; }
 
 
  </style>
  </head>
<body >

<?php

$fio = $_POST['fio'];
$tel = $_POST['tel'];
$tex = $_POST['adr'];  
$zak = $_POST['zakaz'];

$fio = htmlspecialchars($fio);
$tex = htmlspecialchars($tex);
$zak = htmlspecialchars($zak);
$fio = urldecode($fio);
$tex = urldecode($tex);
$zak = urldecode($zak);

$mess = "ИМЯ:  ".trim($fio);
$mess .= "\r\nТЕЛ:  ".trim($tel);
$mess .= "\r\nАДРЕС: ".$tex;
$mess .= "\r\nЗАКАЗ:\r\n".$zak;

$mailheaders = "Content-type:text/plain; charset=utf-8"; 

$message = "<p >Заявка успешно отправлена</p>
<a id='sat' href='http://игрынн.рф'>ВЕРНУТЬСЯ НА САЙТ</a>  ";

if (mail("ka-media2@yandex.ru", "ЗАЯВКА", $mess,    $mailheaders)){ 
          echo $message; }

?>


<!--<script src="mag.js"> </script>-->

</body>
</html>