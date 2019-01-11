<?php
$host="magazin.local";
$user="root";
$password="";
$db="magazin";
$tabl="zakazy";
$table2="tovar_bd";

$link=mysql_connect($host,$user,$password) ;
if($link) {echo "---";}
          else{echo "Не могу подсоединиться";}
mysql_select_db ( $db, $link ) or die ("Невозможно открыть $db");

 $d1 = $_POST["date1"]? : "2018-08-26";
 $d2 = $_POST["date2"]? : "2018-09-11";
//echo $d1;
$res0 = mysql_query("
Select date, count(*) kolo from zakazy WHERE date >= '$d1' AND date < '$d2' group by date" ,$link);
    if(mysql_num_rows($res0)>0){
    $row = mysql_fetch_array($res0);
    do{ $date []=  $row["date"];
        $kolo []= $row["kolo"]; }
     while ($row = mysql_fetch_array($res0)); }

//print_r($date);  print_r($kolo);

?>

<html>
<head>
<title> графики</title>
<script src="http://echarts.baidu.com/dist/echarts.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js" ></script>
    <script src="jquery-3.3.1.min.js"></script>
 <style>
 body { background-color: #d2fdff; font-family: arial;}
.zak {padding: 25px 0; letter-spacing: 4px; color: white; width: 344px;  text-align: center;
          border-radius: 13px;  font-size: 37px;background-color: #719be6; margin:30px auto;}
 #chart2, #chart{float: left;}
#sat{margin: 0 auto 62px; display: block; width: 191px; }
.dat {float: left; margin: 110px 22px 11px;}
.dat2 {float: left; margin: 1px 22px 11px;}
#sub {margin: 32px auto;  display: block;   height: 36px;  width: 139px; border: 2px solid #f78d06;}
form span {  display: inline-block;   }
form span label {  display: block;}
form .range, form .average { display: block; padding: 1rem 0; width: 100%;}
form .range input[type="range"], form .average input[type="range"] {
    -webkit-appearance: none; background-color: silver; border-radius: 4px;
    display: block; height: 8px;pointer-events: none; position: absolute;
    outline: none; width: 400px;}
form .range input[type="range"]::-webkit-slider-thumb, form .average input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; background-color: gray; border-radius: 50%;
    cursor: -webkit-grab;  cursor: -moz-grab; height: 20px;
    pointer-events: all; position: relative;  width: 20px; z-index: 2;}

form .range input[type="range"]::-webkit-slider-thumb:active, form .average input[type="range"]::-webkit-slider-thumb:active {
    cursor: -webkit-grabbing;    cursor: -moz-grabbing;}

form .range input[type="range"]#avgRange, form .average input[type="range"]#avgRange { margin: 1rem 0;}

 .tovv { height: 360px; box-shadow: 0 0 14px 3px #35282e; border: 1px solid #f78d06;; margin: 20px;
     border-radius: 14px; overflow: hidden;transition: 1.5s; position: absolute; /*opacity: 0;*/
 transform: perspective(416px) rotatey(-180deg); backface-visibility: hidden }
 .nam { width: 250px; height: 70px; padding: 8px; display: flex; justify-content: center; margin: 237px auto 0px;
     align-items: center; transition: 1s; color: #000000; font-size: 22px; border-radius: 40px; text-decoration: blink;}
 .tovv:hover .nam { margin: 189px auto 5px; color: #f78d06;background: radial-gradient(rgb(0, 0, 0) 2%, rgba(158, 199, 32, 0) 70%); text-decoration: underline;}
 .cena { height: px; width: 100px; padding: 8px 16px;     text-align: center; border: 1px solid #f78d06; border-radius: 20px; color: #f78d06;  background: rgba(10, 10, 9, 0.7); margin: -9px auto 0px; transition: 1s}
 .but { width: 100px; padding: 8px 16px; border: 1px solid #f78d06; margin: 10px auto; color: #f78d06; transition: 0.5s;     text-align: center;
     background: rgba(10, 10, 9, 0.7); border-radius: 20px; cursor: pointer}





  </style>
  </head>
<body>
<div class= "zak"> графики</div>
<a id='sat' href='http://magazin.local'>ВЕРНУТЬСЯ НА САЙТ</a>
<?php
$res = mysql_query( "Select adres, count(*) koll from zakazy group by adres" ,$link);
 if(mysql_num_rows($res)>0){
 $row = mysql_fetch_array($res);
 do{
 $gorod []=  $row["adres"];
 $kolich []= $row["koll"]; }
  while ($row = mysql_fetch_array($res)); }

// print_r($gorod);  print_r($kolich);
?>
<div>
<div id="chart" style="width: 500px; height: 350px;"></div>
<div id="chart2" style="width: 500px; height: 350px;"></div>

<form class="dat" action="grafik.php" method="post" >
    <span>
     <label for="minText">ОТ</label>
     <input type="text" id="minText" value="2018-08-26"  name="date1"/>  </span>
     <span>
     <label for="maxText">ДО</label>
     <input type="text" id="maxText" value="2018-09-11"  name="date2"/>  </span>
     <div class="range">
 <input type="range" min="" max="" value="1535144400" id="min"  step="86400" onchange="zeMin(this.value)">
 <input type="range" min="" max="" value="1537390800" id="max"  step="86400" onchange="zeMax(this.value)">
     </div>
     <!-- <input id= "sub" name="sub" type="submit" value = "изменения" />-->
    <div id= "sub"> изменения</div>
</form>
</div>

<div style=" width: 305px;; margin: 658px auto 0;position: relative; height: 440px;" >
<?php
$res = mysql_query( "SELECT * FROM $table2 WHERE x=2" ,$link);
if(mysql_num_rows($res)>0){
    $row = mysql_fetch_array($res);
    $da=0;
    do{ echo '
<div  class="tovv" style="background: '.$row["img"].' center 20px / 70% no-repeat;">
<a title="посмотреть игру" rel="lightbox" href="fotos/opis/pira1.jpg " class="nam">'.$row["name"].'</a>
<div class="cena">'.$row["price"].'</div>
<div class="but">в корзину</div>
<div class="idtov">'.$row["id"].'</div>
</div>';     }
    while ($row = mysql_fetch_array($res));
}
?>
</div>
<div style="    margin: 0 auto 140px; width: 278px; transform-style: preserve-3d">
    <div id="nazad" class="but" style="display: inline-block;">назад</div>
    <div id="next" class="but" style="display: inline-block;">вперед</div>
</div>

<script>
    var id = function (id) {return document.getElementById(id); }

var a=b=c=d=[];
    	 a = <?php echo  json_encode($gorod)  ?>;
    	 b = <?php echo  json_encode($kolich) ?>;
    	 c = <?php echo  json_encode($date) ?>;
    	 d = <?php echo  json_encode($kolo) ?>;
    	// console.log(c);      console.log(d);
    		var chart = document.getElementById('chart');

    		var myChart = echarts.init(chart);

    		var option = {
    			title: { text: 'продажи по городам' },
    			tooltip: { },
    			 //legend: { data: [ 'продажи' ] },
    			xAxis: { data: a },
    			yAxis: { },
    			series: [{	name: 'продажи', type: 'bar',data: b}]
    		};

    		myChart.setOption(option);

    		document.addEventListener( 'build',  graf);
                function graf (e,c,d){
           if (e){ var u = JSON.parse(e.detail);}

        var chart2 = document.getElementById('chart2');
        var myChart2 = echarts.init(chart2);
        var option2 = {	title: { text: 'заказы по датам' },
            tooltip: { },
            //legend: { data: [ 'продажи' ] },
            xAxis: { data: u.a ||c },
            yAxis: { },
            series: [{  name: 'продажи',  type: 'line',   smooth: true,   data: u.b ||d  }]
        };
        myChart2.setOption(option2);
    };
   /* graf (c,d);*/



id('min').min=new Date('2018.08.01').getTime() / 1000;
id('min').max=new Date('2018.10.01').getTime() / 1000;
id('max').min=new Date('2018.08.01').getTime() / 1000;
id('max').max=new Date('2018.10.01').getTime() / 1000;
id('min').value= "1535144400";
id('max').value= "1537390800";

    var zn ={min:"2018-08-26", max: "2018-09-11"}; var ch=0;
function zeMin(val) {
   var mi=  id('minText').value = moment(val*1000).format('YYYY-MM-DD');
    var max = id('max').value;
    if(val > max) { id('max').value= Number(val) + 172800};
    zn.min = mi;
    ayx(zn);
}
function zeMax(val) {
    var ma= id('maxText').value = moment(val*1000).format('YYYY-MM-DD');
    var min = id('min').value;
    if(val < min) { id('min').value= Number(val) - 172800};
    zn.max = ma;
  ayx(zn);
}
   //  console.log(zn);

    function ayx(b) {
        // var jon = JSON.stringify(b);
            $.ajax({
            type: "POST",
            cashe:false,
            url: 'ayax_graf.php',
            data: {
                // data: jon,
                min: b.min,
                max: b.max
            },
            success: function(res) {
                // Создание события
                var event = new CustomEvent('build', { 'detail': res });
// target события может быть любой элемент
                document.dispatchEvent(event);

              /*  var u = JSON.parse(res);
                id('sub').addEventListener("DOMSubtreeModified", function() {
                    graf (u.a, u.b);  });
                ch++;
                id('sub').innerHTML = "изменения  " + ch;*/
            }
        });
    };
    console.log();






                             /* крутящийся слайдер*/

var blok = document.querySelectorAll(".tovv");
var to = 0, z=1;
blok[to].style.opacity=  "1";
blok[to].style.transform = "perspective(416px) rotatey(0deg)";
id('next').onclick = function () {
    blok[to].style.transform = "perspective(416px) rotatey(180deg)";
   // blok[to].style.opacity=  "0";
    to++;
    if(to>=blok.length ) {   to=0;
    for (var x = 0; x < blok.length; x++) {
        blok[x].style.transform= "perspective(416px) rotatey(-180deg)";   }
    };
    blok[to].style.zIndex=z; z++;
   // blok[to].style.opacity=  "1";
    blok[to].style.transform = "perspective(416px) rotatey(0deg)";
}

id('nazad').onclick = function () {
    blok[to].style.transform = "perspective(416px) rotatey(-180deg)";
    to--;
    if(to<0) {   to= blok.length-1;
        for (var x = 0; x < blok.length; x++) {
            blok[x].style.transform= "perspective(416px) rotatey(180deg)";   }}
    blok[to].style.zIndex=z; z++;
    blok[to].style.transform = "perspective(416px) rotatey(0deg)";
}















</script>



</body>
</html>