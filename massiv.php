<?php

$host="magazin.local";
$user="root";
$password="";
$db="magazin";
$table="tovar_bd";

$link=mysql_connect($host,$user,$password) ;
if($link) {}
          else{echo "Не могу подсоединиться";}


mysql_select_db ( $db, $link ) or die ("Невозможно открыть $db");
$res = mysql_query( "SELECT * FROM $table" ,$link);
while($row = mysql_fetch_assoc($res)){

    $data[] = $row;
}
echo json_encode($data);









?>