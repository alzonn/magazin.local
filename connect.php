<?php

$host="magazin.local";
$user="root";
$password="";
$db="magazin";
$table="tovar_bd";

$link=mysql_connect($host,$user,$password) ;
if($link) {echo "---подсоединение прошло\r\n ---";}
          else{echo "Не могу подсоединиться";}


mysql_select_db ( $db, $link ) or die ("Невозможно открыть $db");

?>