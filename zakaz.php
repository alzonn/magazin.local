<?php

$host="magazin.local";
$user="root";
$password="";
$db="magazin";
$table="zakaz_klient";

$link=mysql_connect($host,$user,$password) ;
if($link) {echo "---подсоединение прошло\r\n ---";}
          else{echo "Не могу подсоединиться";}

mysql_select_db ( $db, $link ) or die ("Невозможно открыть $db");
?>


<html>
<head>
<title> заявки с сайта</title>

 <style>
 body { background-color: #acfcff; font-family: arial;}
.zak {padding: 35px 0; letter-spacing: 4px;
          color: white;      width: 344px;          text-align: center;
          border-radius: 13px;          font-size: 37px;
          background-color: #719be6;          margin:70px auto;}
.zakazy {    border: 2px solid #719be6;     background-color: #87daff;

             margin: 20px;  border-radius: 20px;}
.nam {color: #3b7bec;   font-size: 26px;}
.nam1 {    width: 187px;   text-align: center;
           font-size: 20px; border: 1px solid #3b7bec;}
.namtov{     width: 390px;   text-align: center;
             font-size: 17px;  border: 1px solid #3b7bec; }


  </style>
  </head>
<body>
<div class= "zak"> ЗАКАЗЧИКИ</div>

<?php

$res = mysql_query( "

 SELECT klienty.name, klienty.phone, zakazy.adres,  sum(tovar_bd.price) oplata,
   GROUP_CONCAT( tovar_bd.name SEPARATOR ', ') as games
FROM klienty JOIN zakazy
ON klienty.id=zakazy.id_klient
JOIN tovar_zakaz ON zakazy.id=tovar_zakaz.id_zak
JOIN tovar_bd ON tovar_zakaz.id_tov = tovar_bd.id
     GROUP BY klienty.name, klienty.phone, zakazy.adres

 " ,$link);

if(mysql_num_rows($res)>0){
$row = mysql_fetch_array($res);
do{ echo '

<div class= "zakazy">
<div style ="text-align: center; display: inline-block; margin: 20px;" >
<div class= "nam">  имя покупателя </div>
<div class= "nam1">  '.$row["name"].' </div>
</div>
<div style ="text-align: center; display: inline-block; margin: 20px;" >
<div class= "nam">  телефон </div>
<div class= "nam1">  '.$row["phone"].' </div>
</div>
<div style ="text-align: center; display: inline-block; margin: 20px;" >
<div class= "nam">  адрес </div>
<div class= "nam1">  '.$row["adres"].'</div>
</div>
<div style ="text-align: center; display: inline-block; margin: 20px;" >
<div class= "nam">  сумма заказа </div>
<div class= "nam1">  '.$row["oplata"].'</div>
</div>
<div style ="text-align: center; display: inline-block; margin: 20px;" >
<div class= "nam"> товар </div>
<div class= "namtov"> '.$row["games"].' </div>
</div>

</div>

'; }

while ($row = mysql_fetch_array($res));
}

?>



<a id='sat' href='http://magazin.local'>ВЕРНУТЬСЯ НА САЙТ</a>


</body>
</html>