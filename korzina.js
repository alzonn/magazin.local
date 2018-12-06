var get = function (id) { return document.getElementById(id);   }
var mascorz = [];

if (localStorage.korzina) {
    mascorz=mascorz.concat(JSON.parse(localStorage.korzina));
    get("korz2").innerHTML = "У вас"+ "<br> "+"в корзинке" +"<br> "+ mascorz.length + " тов." ;
    get("korz0").style.opacity = "1";
}

 function tovary(o) {
    var tov = document.createElement("div");
    tov.className = "divv";
    tov.innerHTML = o.name + " - " + o.price + " руб.";
    var img = document.createElement("img");
    img.src = "fotos/res.png";
    img.className = "img0";
    tov.appendChild(img);
    get("tovar").appendChild(tov);
};

var tovv = document.getElementsByClassName("tovv");
console.log(tovv.length);

for (var x = 0; x < tovv.length; x++) {
    tovv[x].onclick = function (e) {
        if (e.target.className != "but" ) return;
        var mastov ={};
        var mm = this.querySelector(".cena").innerHTML;
        var mm22 = this.querySelector(".nam").innerHTML;
        var idtov = this.querySelector(".idtov").innerHTML;
        mastov.price = parseInt(mm);
        mastov.name = mm22;
        mastov.idtov = idtov;
        mascorz.push(mastov);
        localStorage.korzina= JSON.stringify(mascorz);

        get("korz0").style.opacity = "1";
        get("korz2").innerHTML = "У вас"+ "<br> "+"в корзинке" +"<br> "+ mascorz.length + " тов." ;
        /* alert(mastov);*/
    }
};


////////////////////////////////////*корзина*/

get("korz2").onclick = function () {
    if (!localStorage.pass) {
        alert("нужно зарегистрироваться");
        return false;
    }
   // get("nm").value= get("in11").value;
    // get("focus").value =get("in22").value;

    for (var xx = 0; xx < mascorz.length; xx++) {
        tovary(mascorz[xx]);
    }
    get("zakaz").style.display = "block";
    var divv = document.getElementsByClassName("divv");
    /* var cl = document.getElementsByClassName("img0");*/

    for (var io = 0; io < divv.length; io++) {
        divv[io].onclick = function () {
            var ind = $(".divv").index(this);
            mascorz.splice(ind, 1);
            get("tovar").removeChild(this);

            sum=0;
            for (var i = 0; i < mascorz.length; i++) {
                sum +=  mascorz[i].price;    };
            get("summ").innerHTML = "Вы заказываете товар на сумму: " +sum + " руб."+"<br>Доставка 100 руб.";
            get("korz2").innerHTML = "У вас"+ "<br> "+"в корзинке" +"<br> "+ mascorz.length + " тов.";
            if (mascorz.length==0) {
                get("summ").innerHTML = "Что-нибудь закажите, друзья :)"};
        };
    };
};
get("res").onclick = function () {
    get("tovar").innerHTML = "" ;
    get("zakaz").style.display = "none";
}

                                     /*    форма c заказами отправка*/

var jsn =[]; var ida=0;
get("sub").onclick = function (e) {
    /*  if (get("focus").value.length != 11){
          alert ("проверьте кол-во цифр в номере");*/
    e.preventDefault();
    for (let i = 0; i < mascorz.length; i++) {
        var midl ={};
        midl.idd =mascorz[i].idtov;
        // midl.name=get("nm").value;
        midl.oplata=get("focus").value;
        midl.adres=get("texta").value;
        //   midl.pass=reg.pass;
        midl.iddb=ida || localStorage.ida;
        jsn.push(midl);
    };

    /*   var jon = JSON.stringify(jsn);
       $.ajax({
           type: "POST",
          // contentType: 'application/json',
           //dataType: "json",
           cashe:false,
           url: 'ayax.php',
           data: {data: jon},
           success: function(res) {
               console.log(res);  }
       });*/
    ayx('ayax.php', jsn);
    get("nm").value=get("focus").value=get("texta").value= "";
    get("tovar").innerHTML = "" ;
    localStorage.removeItem("korzina");
    get("sub").value= "ОТПРАВЛЕНО";
};

function ayx(a, b) {
    var jon = JSON.stringify(b);
    $.ajax({
        type: "POST",
        cashe:false,
        url: a,
        data: {data: jon},
        success: function(res) {
            //  if (res.trim()!="") {fff(res);}
            if ( parseInt(res) > 0) {fff(res);}
            console.log(res);  }
    });
};
function fff(r) {
    localStorage.ida=r;
    ida=r;   //  console.log(parseInt(r));
}


//////////////////////////////////// пагинация
//var cnt =2;
function f(s) {
    var cnt=s || 2;
var count = tovv.length; //всего записей
var pages = Math.ceil(count / cnt); //кол-во страниц
var paginator = document.querySelector(".paginator");
var page = "";
for (var i = 0; i < pages; i++) {
    page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
}
paginator.innerHTML = page;
/*var main = document.getElementById("page1");
main.classList.add("active");*/

var num = document.querySelectorAll(".tovv");
for (var i = 0; i < num.length; i++) {
    if (i < cnt) { num[i].style.display = "inline-block";  }
    else {num[i].style.display = "none";}
}
paginator.onclick = function (e) {
    var targ = e.target;
    var id = targ.id;
    if (targ.tagName.toLowerCase() != "span") return;

    var data_page = +targ.dataset.page;
    var j = 0;
    for (var i = 0; i < num.length; i++) {
        var data_num = num[i].dataset.num;
        if (data_num <= data_page || data_num >= data_page)
            num[i].style.display = "none";
    }
    for (var i = data_page; i < num.length; i++) {
        if (j >= cnt) break;
        num[i].style.display = "inline-block";
        j++;
    }
}
}
f();

var rad = document.getElementsByName("co1");
for(var i4 = 0; i4 < rad.length; i4++) {
    rad[i4].onclick = function() {
        var  cnt = this.value;
        f(cnt);
        console.log(cnt);
    };
};


////////////////////////////////////  варианты отображения
var tt = document.querySelectorAll(".tovv");
get("rayd").onclick = function () {
    for (var i = 0; i < tt.length; i++) {
       // tt[i].className += " rayd";
        tt[i].style.backgroundSize="25%" ;
        tt[i].style.width= "801px "  ;
        tt[i].style.border=" 2px solid rgb(247, 141, 6)";
    }
}
get("kub").onclick = function () {
    for (var i = 0; i < tt.length; i++) {
       // tt[i].removeClass="rayd";
        tt[i].style.backgroundSize="70%" ;
        tt[i].style.width= "270px "  ;
        tt[i].style.border=" 0px solid rgb(247, 141, 6)";
    }
}
