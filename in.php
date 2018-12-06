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
$zakaz = $_POST['zakaz'];

$host="magazin.local";
$user="root";
$password="";
$db="magazin";
$table="zakaz_forma";

$link=mysql_connect($host,$user,$password) ;
if($link) {$message = "---подсоединение\r\n ---";}
          else{echo "Не могу подсоединиться";}


mysql_select_db ( $db, $link ) or die ("Невозможно открыть $db");

$res = mysql_query("INSERT INTO $table ( name, phone, adres, zakaz) VALUES ( '$fio', '$tel', '$tex', '$zakaz')");

if($res) {$message .= "\r\n данные успешно добавлены";}
         else{echo "\r\n данные не добавлены";}

$message .="<a id='sat' href='http://magazin.local'>ВЕРНУТЬСЯ НА САЙТ</a>";
echo "<p >$message</p>";


mysql_close($link);

?>

