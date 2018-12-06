<?php

   $ress = json_decode($_POST["data"], true);

//print_r ($ress);

$host="magazin.local";
$user="root";
$password="";
$db="magazin";
$table="tovar_zakaz";
$table2="klienty";
$table3="zakazy";

$link=mysql_connect($host,$user,$password) ;
if($link) {$message = "---подсоединение\r\n ---";}
          else{echo "Не могу подсоединиться";}
mysql_select_db ( $db, $link ) or die ("Невозможно открыть $db");

          //  ВЕТКА ДЛЯ ДОБАВЛЕНЯ В КЛИЕНТЫ
if (!$ress[0]['adres']){
 //$res2 = mysql_query("INSERT INTO $table2 ( name, phone, adres, pass)
              // VALUES ( '{$ress[0]['name']}', '{$ress[0]['phone']}', '{$ress[0]['adres']}', '{$ress[0]['pass']}' )");

$res2 = mysql_query("INSERT INTO $table2 ( name, phone, pass)
               VALUES ( '{$ress['name']}', '{$ress['phone']}', '{$ress['pass']}' )");
$last_id = mysql_insert_id();
 if($res2)
    {  echo  $last_id;}
     else  { echo "\r\n данные не добавлены2"; }
//$last_id = mysql_insert_id();
}


                    // ВЕТКА ДЛЯ добавления ЗАКАЗОВ
else {
$res3 = mysql_query("INSERT INTO $table3 ( oplata, id_klient, adres)
              VALUES ( '{$ress[0]['oplata']}', '{$ress[0]['iddb']}', '{$ress[0]['adres']}' )");
$last_id2 = mysql_insert_id();


foreach($ress as $val){
  $res = mysql_query("INSERT INTO $table (id_tov, id_zak) VALUES ( '{$val['idd']}',  '$last_id2' ) ");
  //  if($res)
    //{  echo"\r\n данные  добавлены1";  }
   //  else  { echo "\r\n данные не добавлены1"; }
};
}


mysql_close($link);











//обновление
//$res3 = mysql_query(" UPDATE $table2 SET adres = '{$ress[0]['adres']}' WHERE id='{$ress[0]['iddb']}' ");
   // if($res3)
   // {  echo"\r\n данные обновлены"; }
    // else  { echo "\r\n данные не обновлены"; }
?>







