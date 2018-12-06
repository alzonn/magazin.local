<?php
include ("connect.php");
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Детские игрушки </title>
    <link rel="stylesheet" href="magaz.css">
  <script src="jquery-3.3.1.min.js"></script>
 <style>
#telo2 {    margin: 0px auto 50px;        background: rgba(28,35,10,.1); display: block;
            box-shadow: rgb(53, 40, 46) 0px 0px 43px 7px;      border-radius: 30px;}
.zak {padding: 35px 0; letter-spacing: 4px;
          color: white;      width: 344px;          text-align: center;
          border-radius: 13px;          font-size: 37px;
          background-color: #78ec6a;          margin:70px auto;}
  </style>
</head>
<body id="bod">
<div class= "zak"> ДЕТСКИЕ</div>

<center id="telo2"><div class="telo0"></div>

<?php

$res = mysql_query( "SELECT * FROM $table WHERE x=1" ,$link);
if(mysql_num_rows($res)>0){
$row = mysql_fetch_array($res);
do{ echo '
<div class="tovv" style="background: '.$row["img"].' center 20px / 70% no-repeat;">
<a title="посмотреть игру" rel="lightbox" href="fotos/opis/pira1.jpg " class="nam">'.$row["name"].'</a>
<div class="cena">'.$row["price"].'</div>
<div class="but">в корзину</div>
<div class="idtov">'.$row["id"].'</div>
</div>'; }

while ($row = mysql_fetch_array($res));
}
?>
</center>

<a id="upbut" href="/#v" >ВЕРНУТЬСЯ К МЕНЮ</a>



    <!--форма топравки-->
<div id="zakaz">
    <div class="zakaz2">
        <div class="zakaz3">
            <div id="tovar"><div id="summ"></div> </div>
            <form   >
                <input type="text" id="nm" name="fio" maxlength="11" placeholder="ваше имя" class="form1" required/>
                <input type="text" class="form1" id="focus" name="tel"
                       placeholder="оплата" required  maxlength="11"/>
                <textarea id="texta" name="adr" maxlength="133" placeholder="адрес доставки, пожелания" required></textarea>
                <textarea id="texta1" name="zakaz"  autofocus></textarea>
                <input id="sub" type="submit" value="ЗАКАЗАТЬ" class="sub">
            </form>
        </div>
        <img id="res" src="fotos/res.png" style="width: 5%; ">
    </div>
</div>

                               <!--корзинка-->
<div id ="korz0">
<div id ="korz1">
    <div id="korz2"> </div>
       <!-- <div id="korz3">ЗАКАЗАТЬ </div>-->
</div>
    <div id="korz4"> </div>
</div>







<script src="korzina.js"></script>
</body>
</html>