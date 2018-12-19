<?php
include ("connect.php");
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>НАСТОЛЬНЫЕ ИГРЫ. Детские и взрослые игрушки купить на заказ. Интернет - магазин игр. Нижний Новгород</title>

    <meta name="robots" content="index">
    <link rel="stylesheet" href="magaz.css">
  <script src="jquery-3.3.1.min.js"></script>


    <script src="sli/slick/slick.min.js"></script>
    <link rel="stylesheet"  href="sli/slick/slick.css"/>
    <link rel="stylesheet"  href="sli/slick/slick-theme.css"/>
 <!--   <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>-->


</head>
<body id="bod">


                               <!--главное окно-->
<div id="heder">
 <div id="heder2">
    <div class="heder3">
    <div class="heder4">
<span>Дзержинск</span><span>Нижний Новгород</span><span>Кстово</span><span>Бор</span><span>Павлово</span>
    </div>
    </div>
              <div class="heder5">
               <h1 id="h1"> НАСТОЛЬНЫЕ ИГРЫ НА ЗАКАЗ<br>взрослые и детские</h1>
                    <h2 id="h2">интернет - магазин с доставкой (1-3 дня)<br>
                 <small>(плюс доставка почтой в ваш город)</small>   <br>
                     тел: +79302845316</h2>
              </div>
              <img src="fotos/ргасе0.png" id="img">


  <div id="login-button">
  <img id="im" style ="width: 100%; opacity: .5;" src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png">
  </img>
</div>
<div id="container">
  <p class="p1">регистрация</p>
  <form class="for1">
    <input id="in11" class="in" type="text" name="text" placeholder="имя">
    <input id="in22" class="in" type="text" name="" placeholder="телефон">
    <input id="in33" class="in" type="password" name="pass" placeholder="пароль">
    <div class="ina" id="ina" >войти</div>
    <div class="ina" id="klir" >выйти</div>
   </form>
</div>

 </div>
</div>

                     <!--поиск по названию-->

<!--<p class="poisk0"> На нашем сайте Вы можете воспользоваться поиском игр по названию </p>
<input type="text" name="pois" placeholder="введите название игры" class="poisk" id="poisk" />
<div class="poisk2" id="vyvod"></div>
<p class="poisk1"> или полистать тематические разделы меню</p>-->


<a name="v"> </a>
                     <!--кнопки выбора меню-->


<div class = "cente">
         <div  id = "cente2">
<div id="vzros" class="vzros"> ВЗРОСЛЫЕ </div>
<div id="vzros2" > для двоих <br> 18+</div>
<div id="vzros3" > для <br>компании </div>
        </div>
         <div  id = "cente3">
<div id="detsk" class="detsk"> ДЕТСКИЕ </div>
<div id="detsk2" > развивающие<br> игры </div>
<div id="detsk3" > игры<br>семейные </div>
        </div>
</div>


                              <!--отрисованные категории-->
<center id="telo"> <div class="telo0"> ИГРЫ ДЛЯ ВСЕХ ВЗРОСЛЫХ</div></center>
<center id="telo2"><div class="telo0"> ИГРЫ ДЛЯ ВСЕХ ДЕТЕЙ</div>

<?php
/*$res = mysql_query( "SELECT * FROM $table WHERE x=1" ,$link);
if(mysql_num_rows($res)>0){
$row = mysql_fetch_array($res);
do{ echo '
<div class="tovv" style="background: '.$row["img"].' center 20px / 70% no-repeat;">
<a title="посмотреть игру" rel="lightbox" href="fotos/opis/pira1.jpg " class="nam">'.$row["name"].'</a>
<div class="cena">'.$row["price"].'</div>
<div class="but">в корзину</div>
<div class="idtov">'.$row["id"].'</div>
</div>'; }

while ($row = mysql_fetch_array($res));}
*/?>
</center>
<center id="telo3"><div class="telo0"> ИГРЫ ДЛЯ ДВОИХ ВЛЮБЛЕННЫХ </div></center>
<center id="telo4"><div class="telo0"> ИГРЫ ДЛЯ КОМПАНИИ ВЗРОСЛЫХ</div></center>
<center id="telo5"><div class="telo0"> ДЕТСКИЕ СЕМЕЙНЫЕ ИГРЫ</div></center>
<center id="telo6"><div class="telo0"> ДЕТСКИЕ РАЗВИВАЮЩИЕ ИГРЫ</div></center>

  <div class="telo0" style=" text-align: center;"> ХИТЫ ПРОДАЖ </div>
<div class=" multiple-items">

 <?php
    $res = mysql_query( "SELECT * FROM $table WHERE x=1" ,$link);
    if(mysql_num_rows($res)>0){
        $row = mysql_fetch_array($res);
        do{ echo '
<div class="tovv" style="background: '.$row["img"].' center 20px / 70% no-repeat;     height: 360px;">
<a title="посмотреть игру" rel="lightbox" href="fotos/opis/pira1.jpg " class="nam">'.$row["name"].'</a>
<div class="cena">'.$row["price"].'</div>
<div class="but">в корзину</div>
<div class="idtov">'.$row["id"].'</div>
</div>'; }
        while ($row = mysql_fetch_array($res));   }
    ?>
</div>



<!--<a id="upbut" href="#v" >ВЕРНУТЬСЯ К МЕНЮ</a>-->
<div class="foot"> Где купить, заказать взрослые и детские игры - можно в нашем интернет - магазине для детей и взрослых, для всей семьи.  Для поклонников активных игр в большой компании друзей  имеется большой выбор настольных игрушек. Популярные интеллектуальные игры для активных мальчиков и девочек на одного, на двоих или на компанию за столом.  Настольные  алкогольные игры для взрослых вечеринок, влюбленных подарят вам мгновения и эмоции, которые будет трудно забыть в будущем. А для ребенка, дочки или сыночка это пиратские игры, обучабщие конструкторы, ходилка и логические, которые развивают эрудицию, предлагают детям отгадывать загадки. Приключения для мальчиков и девочек, необычные развивающие игры для самых маленьких детей до 4 5 6 7 8 лет. Для школы и детского сада. В нашем магазине вы получаете возможность выбрать товар, который вам понравился больше всего. Это лучший подарок на день рождения, праздник, новый год, юбилей, девушке или парню! Осуществляем доставку по вашему адресу Нижнего Новгорода.<br>
</div>

<a class="st" href="zakaz.php" target="_blank">заказы покупателей</a>
<a class="st" href="zagruzka.php" target="_blank">загрузка товара</a>
<a class="st" href="grafik.php" target="_blank">статистика</a>

                               <!--корзинка-->
<div id ="korz0">
<div id ="korz1">
    <div id="korz2"> </div>
       <!-- <div id="korz3">ЗАКАЗАТЬ </div>-->
</div>
    <div id="korz4"> </div>
</div>


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

 <script>
   /*  $('.center').slick({
         centerMode: true,
         slidesToShow: 3,
     });*/

   $('.multiple-items').slick({
       infinite: true,
       dots: true,
       slidesToShow: 3,
       slidesToScroll: 1
   });

</script>


<script src="mag.js"></script>



</body>
</html>


