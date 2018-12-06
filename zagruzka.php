<?php

$host="magazin.local";
$user="root";
$password="";
$db="magazin";
$table="tovar_bd";
$tablkat="kategori";
$link=mysql_connect($host,$user,$password) ;
//if($link) {echo "---подсоединение \r\n ---";}
  //       else{echo "Не могу подсоединиться";}
mysql_select_db ( $db, $link ) or die ("Невозможно открыть $db");

 $newx = $_POST["new"];
 $x = $_POST["kateg"];
 $name = $_POST["imya"];
$cena = $_POST["cena"];
$cod = "url(fotos/".$_FILES['img']['name'].")";

if ($newx){
 $res22 = mysql_query("INSERT INTO $tablkat (kateg ) VALUES ( '$newx') ");
    if($res22)   {  $v3= "категория загружена";  }
    else  { echo "\r\n данные  в категории не загруж"; }
    $x = mysql_insert_id();
}

if (!empty($name)) {
 $res = mysql_query("INSERT INTO $table (x, name, price, img ) VALUES ( '$x',  '$name', '$cena', '$cod' ) ");
    if($res)   {  $v2="инф в базу и";  }
    else  { echo "\r\n данные не загруж"; }
}
print_r( "img=".$_FILES['img']['name'] );

$path = "./fotos/".$_FILES["img"]["name"];
 if (move_uploaded_file($_FILES["img"]["tmp_name"], $path))
        { $v1=" фото загружены"; }
  else  { echo "не загружено";}

?>

<html>
<head>
<title> загрузка  товара в базу</title>

 <style>
 body { background-color: #5bd3ff; font-family: arial;}
.zak {padding: 15px 0; letter-spacing: 4px; color: white;   width: 430px;  text-align: center; display: block;
      border-radius: 13px;   font-size: 37px;  background-color: rgba(35,43,85,0.8);  margin:30px auto;
      text-decoration: blink;}
.form {   background-color: rgba(146, 185, 255, 0.66);  border-radius: 13px;
              width: 508px;  height: 250;   margin: 63px auto;}
.inp { margin: 11px 38px;  border: 2px solid #719be6; background: none;}
.gruz {    margin: 28px;  border: 2px solid #719be6;  width: 135px;
           text-align: center;   padding: 6px;}
.form-sig {  font-size: 16px;	font-weight: 300;
  padding-left: 37px;  padding-right: 37px; padding-top: 30px;}
.form-styling {  width: 100%;  height: 35px;	padding-left: 15px;
	border: none;	border-radius: 20px;  margin-bottom: 20px;  background: rgba(255,255,255,.2);}
.frame {   width: 430px;  background:  rgba(35,43,85,0.8); margin: 21px auto;
    box-sizing: border-box;     border-radius: 13px;}
 label { font-weight: 400; text-transform: uppercase; font-size: 13px;  letter-spacing: 2;
        padding-left: 15px;  padding-bottom: 10px; color: rgba(255,255,255,.7);  display: block;   }
.form-styling:focus{  outline: none;  background: rgba(255,255,255,.2);}
.styl {  cursor: pointer;  margin-top: 23px;  background:rgba(204, 16, 16, 0.69);}
.z{text-align: center;}
.btn-tertiary{cursor: pointer; text-align: center; padding:0; line-height:37px;}
.input-file{width:.1px; height:.1px; opacity:0; overflow:hidden; position:absolute; z-index:-1}
.kateg {width: 150px; display: none; margin: 0 10px 20px;}
.kateg4 {     display: flex;}

  </style>
  </head>
<body>



 <div class="frame">
		<form class="form-sig" action="zagruzka.php" method="post"  enctype="multipart/form-data">
          <label for="fullname">название игры</label>
          <input class="form-styling" type="text" name="imya" placeholder=""/>
          <label for="email">стоимость</label>
          <input class="form-styling" type="text" name="cena" placeholder=""/>
          <label for="password">категория</label>
          <select class= "form-styling" name = "kateg">
  <?php
          $res33 = mysql_query( "SELECT * FROM $tablkat" ,$link);
          if(mysql_num_rows($res33)>0){
          $row = mysql_fetch_array($res33);
          do{ echo ' <option value = "'.$row["id"].'"> '.$row["kateg"].' </option>'; }
           while ($row = mysql_fetch_array($res33));
          }
    ?>
         </select>
          <input type="checkbox" id="kateg1"> добавить категорию
          <input class="form-styling kateg" type="text" name="new" id="kateg2"  />
          <label for="img">загрузить фото</label>
          <input class= "input-file" id="img"  type="file" name="img">
          <label for="img" class="btn-tertiary form-styling">выбрать фото</label>
          <input class= "form-styling styl" name="sub" type="submit" value = "загрузить" />
          <div class="z"> <?php echo $name.": ".$v2, $v1, $v3; ?> </div>
	 </form>
 </div>







<a id='sat' class= "zak" href='http://magazin.local'> НА САЙТ</a>

<script >
var  id = function (id) { return document.getElementById(id);   }

id("kateg1").onchange = function () {
    if (this.checked){
    id("kateg2").style.display = "block";
    id("kateg3").style.display = "block";}
    else {  id("kateg2").style.display = "none";
        id("kateg3").style.display = "none";}
}

</script>

</body>
</html>