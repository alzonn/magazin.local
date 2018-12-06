
var get = function (id) {
    return document.getElementById(id);   }
/*----------------------*/

/*  var tt = true;
  setInterval( function () {
      if(tt) { get("okno3").style.borderLeft = "4px solid #ff1982";
         get("okno3").style.opacity = "1";
         get("okno2").style.opacity = "0.2";
          get("okno3").style.width = "54%";
          get("okno2").style.width = "46%";
      }
      else {get("okno2").style.borderRight = "4px solid #f78d06";
      get("okno2").style.opacity = "1";
         get("okno3").style.opacity = "0.2";
          get("okno3").style.width = "46%";
          get("okno2").style.width = "54%";
      }
           tt=!tt;
      }, 3000);*/


const  mass = [
    
    {x:4, name: "Экивоки", price: 1800, img: "url(fotos/eki.png)", img2: "fotos/opis/eki1.jpg "},
    {x:4, name: "Мафия детективная", price: 320, img: "url(fotos/mafd.png)", img2: "fotos/opis/mafd1.jpg "},
    { x:4,name: "В дрова", price: 250, img: "url(fotos/drova.png)",
        img2: "fotos/opis/vdrova.jpg  " },
    {x:4, name: "Монополия Money Polys", price: 590, img: "url(fotos/moxit.png)", img2: "fotos/opis/moxit1.jpg "},
    {x:4,name:"Монополия",price: 600,img:"url(fotos/item.png)",
        img2:"fotos/opis/mon1.jpg"},
    {x:4,name: "Соблазнительные ночи",price: 450, img: "url(fotos/nochi.png)",
        img2: "fotos/opis/soblazn.jpg  "   },
    {x:4,name: "Крокодил для всей семьи", price: 250, img: "url(fotos/krok.png)", img2: "fotos/opis/krok1.jpg  "   },
    {x:4,name:"Скажи иначе. взрослая", price: 600, img:"url(fotos/vzrosl.png)",
        img2: "fotos/opis/skazhi.jpg  " },
    {x:4,name: "Уно", price: 150, img: "url(fotos/uno.png)",
        img2: "fotos/opis/uno1.jpg  "    },
    {x:4, name: "А Вам слабо?", price: 990, img: "url(fotos/ava.png)", img2: "fotos/opis/ava1.jpg "},
    {x:4,name: "Война соседей", price: 750, img: "url(fotos/sosedi.png)",
        img2: "fotos/opis/voj1.jpg " },
    {x:4,name: "Дартсомания", price: 600, img: "url(fotos/dart.png)",
        img2: "fotos/opis/darts.jpg  " },
    {x:4,name: "Твист-р классика", price: 550, img: "url(fotos/tvist.png)",
        img2: "fotos/opis/twist1.jpg  "  },
    {x:4,name: "Где я", price: 450, img: "url(fotos/gde.png)",
        img2: "fotos/opis/gde1.jpg  "    },
    {x:4,name: "КЭП", price: 400, img: "url(fotos/fbfg.png)",
        img2: "fotos/opis/kep1.jpg  "     },
    {x:4,name: "Дуло", price: 600, img: "url(fotos/dulo.png)",
        img2: "fotos/opis/dulo1.jpg  " },
    {x:4,name: "Ёршик", price: 250, img: "url(fotos/erchik.png)",
        img2: "fotos/opis/ersh1.jpg" },
    {x:4,name: "Застольные фанты", price: 120, img: "url(fotos/zast.png)",
        img2: "fotos/opis/zast1.jpg"},
    {x:4,name: "И вот пришла белочка", price: 400, img: "url(fotos/beloch.png)",
        img2: "fotos/opis/bel1.jpg " },
    {x:4,name: "Мгновения любви", price: 300, img: "url(fotos/mgnov.png)",
        img2: "fotos/opis/mgn1.jpg "},
    {x:4,name: "Ночная жизнь", price: 450, img: "url(fotos/nochn.png)",
        img2: "fotos/opis/noch1.jpg "},
    {x:4,name: "Пей не трезвей", price: 150, img: "url(fotos/pey.png)",
        img2: "fotos/opis/pe1.jpg " },
    {x:4,name: "Пив понг", price: 350, img: "url(fotos/pong.png)",
        img2: "fotos/opis/piv1.jpg " },
    {x:4,name: "Помогаторы Тосты", price: 120, img: "url(fotos/pomo.png)",
        img2: "fotos/opis/tost1.jpg " },
    {x:4,name: "Пьяная утка", price: 250, img: "url(fotos/utka.png)",
        img2: "fotos/opis/utka1.jpg " },
    {x:4,name: "Дудл-друдл семейная", price: 250, img: "url(fotos/dudl.png)",
        img2: "fotos/opis/dudl1.jpg  "   },
    {x:4,name: "Творилкус", price: 600, img: "url(fotos/tvori.png)",
        img2: "fotos/opis/tvor1.jpg "  },
    {x:4, name: "Карты Вооружение России", price: 90, img: "url(fotos/voo.png)", img2: "fotos/opis/voo1.jpg "},
    {x:4, name: "Магия чисел", price: 250, img: "url(fotos/magi.png)", img2: "fotos/opis/magi1.jpg "},
    {x:4, name: "Карты Ретро авто", price: 90, img: "url(fotos/retro.png)", img2: "fotos/opis/retro1.jpg "},
    {x:4, name: "Женщины VS Мужчины", price: 100, img: "url(fotos/vs.jpg)", img2: "fotos/opis/vs1.jpg "},
    {x:4, name: "Голая правда", price: 160, img: "url(fotos/gopr.png)", img2: "fotos/opis/gopr1.jpg "},
    {x:4, name: "Кто твой мужчина?", price: 160, img: "url(fotos/kmy.png)", img2: "fotos/opis/kmy1.jpg "},
    {x:4, name: "Пикантный поединок", price: 430, img: "url(fotos/poed.png)", img2: "fotos/opis/poed1.jpg "},
    {x:4, name: "Тесная связь", price: 390, img: "url(fotos/tess.png)", img2: "fotos/opis/tess1.jpg "},
    {x:4, name: "Я никогда не…", price: 260, img: "url(fotos/niko.png)", img2: "fotos/opis/niko1.jpg "},
{x:4, name: "Пикантный выбор", price: 150, img: "url(fotos/vybo.png)", img2: "fotos/opis/vybo1.jpg "},
{x:4, name: "Позитивиум: объясни ситуацию", price: 270, img: "url(fotos/pozsi.png)", img2: "fotos/opis/pozsi1.jpg"},
{x:4, name: "Злая башня", price: 700, img: "url(fotos/zla.png)", img2: "fotos/opis/zla1.jpg"},
 
    {x:5, name: "Восточные ласки", price: 340, img: "url(fotos/vol.png)", img2: "fotos/opis/vol1.jpg "},
    {x:5, name: "Во власти страсти", price: 330, img: "url(fotos/vov.png)", img2: "fotos/opis/vov1.jpg "},
    {x:5, name: "Анатомия страсти", price: 290, img: "url(fotos/anat.png)", img2: "fotos/opis/anat1.jpg "},
    {x:5, name: "Карты Камасутра", price: 150, img: "url(fotos/kart.png)", img2: "fotos/opis/kart1.jpg "},
    {x:5, name: "Кубики Время секса", price: 150, img: "url(fotos/kub.png)", img2: "fotos/opis/kub1.jpg "},
    {x:5, name: "Любовь для двоих", price: 300, img: "url(fotos/lub.png)", img2: "fotos/opis/lub1.jpg "},
    {x:5, name: "Фанты Откровенно о себе", price: 130, img: "url(fotos/otk.png)", img2: "fotos/opis/otk1.jpg "},
    {x:5, name: "Предварительные ласки", price: 230, img: "url(fotos/pred.png)", img2: "fotos/opis/pred1.jpg "},
    {x:5, name: "Сладкие речи", price: 400, img: "url(fotos/slad.png)", img2: "fotos/opis/slad1.jpg "},
    {x:5, name: "Фанты 10 свиданий", price: 120, img: "url(fotos/svid.png)", img2: "fotos/opis/svid1.jpg "},
    {x:5, name: "Фанты Вспомни всё", price: 140, img: "url(fotos/vcp.png)", img2: "fotos/opis/vcp1.jpg "},
    {x:5, name: "Время любви", price: 400, img: "url(fotos/vre.png)", img2: "fotos/opis/vre1.jpg "},
    {x:5, name: "Секс гид", price: 270, img: "url(fotos/gids.png)", img2: "fotos/opis/gids1.jpg "},
    {x:5, name: "Индикатор домашних дел", price: 90, img: "url(fotos/indi.png)", img2: "fotos/opis/indi1.jpg "},
    {x:5, name: "Поза X", price: 190, img: "url(fotos/pozx.png)", img2: "fotos/opis/pozx1.jpg "},
    {x:5, name: "Генератор решений", price: 90, img: "url(fotos/genr.png)", img2: "fotos/opis/genr1.jpg "},
    {x:5, name: "Рецепты наслаждений", price: 290, img: "url(fotos/rena.png)",  img2: "fotos/opis/rena1.jpg"},
    {x:5, name: "Территория соблазна", price: 640, img: "url(fotos/terso.png)", img2: "fotos/opis/terso1.jpg"},
    {x:5, name: "В плену у страсти", price: 320, img: "url(fotos/vple.png)", img2: "fotos/opis/vple1.jpg"},

    {x:6, name: "А Вы слышали, что?", price: 280, img: "url(fotos/avy.png)", img2: "fotos/opis/avy1.jpg "},
    {x:6, name: "Дело ведут знатоки", price: 420, img: "url(fotos/delo.png)", img2: "fotos/opis/delo1.jpg "},
    {x:6, name: "Горячо Холодно", price: 750, img: "url(fotos/gor.png)", img2: "fotos/opis/gor1.jpg "},
    {x:6, name: "Комик ринг", price: 690, img: "url(fotos/kom.png)", img2: "fotos/opis/kom1.jpg "},
    {x:6, name: "Кто кого перепьёт?", price: 500, img: "url(fotos/ktop.png)", img2: "fotos/opis/ktop1.jpg "},
    {x:6, name: "Мафия: карты+скатерть", price: 250, img: "url(fotos/maf.png)", img2: "fotos/opis/maf1.jpg "},
    {x:6, name: "Фанты А давай научу!", price: 130, img: "url(fotos/nay.png)", img2: "fotos/opis/nay1.jpg "},
    {x:6, name: "Пара нормальные", price: 320, img: "url(fotos/par.png)", img2: "fotos/opis/par1.jpg "},
    {x:6, name: "Любителям пенного", price: 150, img: "url(fotos/pen.png)", img2: "fotos/opis/pen1.jpg "},
    {x:6, name: "Позитивчик", price: 90, img: "url(fotos/poz.png)", img2: "fotos/opis/pozo1.jpg "},
    {x:6, name: "Смайлы поздравляют", price: 220, img: "url(fotos/sma.png)", img2: "fotos/opis/sma1.jpg "},
    {x:6, name: "Фанты Дорожные приключения", price: 130, img: "url(fotos/doro.png)", img2: "fotos/opis/doro1.jpg "},
    {x:6, name: "Команда мечты", price: 500, img: "url(fotos/koma.png)", img2: "fotos/opis/koma1.jpg "},
    {x:6, name: "Культ личности", price: 580, img: "url(fotos/kult.png)", img2: "fotos/opis/kult1.jpg "},
    {x:6, name: "Карты Покерные", price: 150, img: "url(fotos/poker.png)", img2: "fotos/opis/poker1.jpg "},
    {x:6, name: "Спиртуозы", price: 140, img: "url(fotos/spir.png)", img2: "fotos/opis/spir1.jpg "},
    {x:6, name: "Фанты Найди связь", price: 140, img: "url(fotos/svya.png)", img2: "fotos/opis/svya1.jpg "},
    {x:6, name: "Фанты К вину", price: 150, img: "url(fotos/viny.png)", img2: "fotos/opis/viny1.jpg "},
    {x:6, name: "Фанты Докажи, что", price: 140, img: "url(fotos/dokaz.png)", img2: "fotos/opis/dokaz1.jpg "},
    {x:6, name: "Под градусом", price: 200, img: "url(fotos/gradu.png)", img2: "fotos/opis/gradu1.jpg "},
    {x:6, name: "Окавока Хочу ещё", price: 170, img: "url(fotos/xoch.png)", img2: "fotos/opis/xoch1.jpg "},
    {x:6, name: "Поздравляем коллег", price: 150, img: "url(fotos/kolle.png)", img2: "fotos/opis/kolle1.jpg "},
    {x:6, name: "Фанты Детский лепет", price: 140, img: "url(fotos/lepe.png)", img2: "fotos/opis/lepe1.jpg "},
    {x:6, name: "Ну, поехали!", price: 150, img: "url(fotos/nyo.png)", img2: "fotos/opis/nyo1.jpg "},
{x:6, name: "Оторвись-раскрепостись!", price: 250, img: "url(fotos/otor.png)", img2: "fotos/opis/otor1.jpg "},
{x:6, name: "Секс бум", price: 400, img: "url(fotos/sex.png)", img2: "fotos/opis/sex1.jpg "},
{x:6, name: "Шаловливые соседи", price: 400, img: "url(fotos/sosed.png)", img2: "fotos/opis/sosed1.jpg "},
{x:6, name: "Точка G", price: 500, img: "url(fotos/toch.png)", img2: "fotos/opis/toch1.jpg "},
{x:6, name: "Вертится на языке", price: 160, img: "url(fotos/verty.png)", img2: "fotos/opis/verty1.jpg "},
{x:6, name: "Крокодил CARDS", price: 180, img: "url(fotos/belkr.png)", img2: "fotos/opis/belkr1.jpg "},
{x:6, name: "Селфиграм", price: 450, img: "url(fotos/selfi.png)", img2: "fotos/opis/selfi1.jpg "},
{x:6, name: "Успеть до полуночи", price: 420, img: "url(fotos/yspe.png)", img2: "fotos/opis/yspe1.jpg "},

{x:1, name: "Шакал", price: 1390, img: "url(fotos/shak.png)", img2: "fotos/opis/shak1.jpg "},
    {x:1, name: "Воображариум", price: 250, img: "url(fotos/voobr.png)",
        img2: "fotos/opis/voob1.jpg "  },
    {x:1, name: "Игра Твист-р Kenga Jump", price: 500, img: "url(fotos/kenga.png)", img2: "fotos/opis/keng1.jpg "  },
    {x:1, name: "Тайны пиратского острова", price: 250, img: "url(fotos/pirat.png)", img2: "fotos/opis/tay1.jpg "},
    {x:1, name: "Кто Что Ест", price: 250, img: "url(fotos/est.png)",
        img2: "fotos/opis/kto1.jpg "  },
    {x:1, name: "Маленький пешеход", price: 400, img: "url(fotos/pech.png)",
        img2: "fotos/opis/pech1.jpg "},
    {x:1, name: "Миссия шпион", price: 600, img: "url(fotos/chpion.png)",
        img2: "fotos/opis/shpi1.jpg "},
    {x:1, name: "Позитивиум детский", price: 250, img: "url(fotos/pozi.png)",
        img2: "fotos/opis/poz1.jpg "},
    {x:1, name: "Попробуй объясни", price: 280, img: "url(fotos/obya.png)",
        img2: "fotos/opis/pop1.jpg "},
    {x:1, name: "Что в шкафу", price: 220, img: "url(fotos/chkaf.png)",
        img2: "fotos/opis/shkaf1.jpg "},
    {x:1, name: "Викторина Фиксики", price: 150, img: "url(fotos/viktorina.jpg)", img2: "fotos/opis/fiks1.jpg " },
    {x:1, name: "Фиксики", price: 60, img: "url(fotos/fi.jpg)", img2: "fotos/opis/fi1.jpg "},
    {x:1, name: "Игра-театр Колобок", price: 150, img: "url(fotos/kolob.jpg)", img2: "fotos/opis/kolob1.jpg "},
    {x:1, name: "Три богатыря", price: 60, img: "url(fotos/boga.png)", img2: "fotos/opis/boga1.jpg "},
    {x:1, name: "Маша и Медведь", price: 50, img: "url(fotos/mim.jpg)", img2: "fotos/opis/mim1.jpg "},
    {x:1, name: "Волшебные контуры", price: 250, img: "url(fotos/vkon.png)", img2: "fotos/opis/vkon1.jpg "},
    {x:1, name: "Тролли", price: 250, img: "url(fotos/bart.png)", img2: "fotos/opis/bart1.jpg"},
    {x:1, name: "Узнаём мир с феями", price: 130, img: "url(fotos/fei.png)", img2: "fotos/opis/fei1.jpg"},
    {x:1, name: "Мстители: один лишний", price: 160, img: "url(fotos/msti.png)", img2: "fotos/opis/msti1.jpg"},
    {x:1, name: "Свинтуз", price: 350, img: "url(fotos/svin.png)", img2: "fotos/opis/svin1.jpg "},

        
{x:2, name: "Весёлые кубики", price: 120, img: "url(fotos/alf.png)", img2: "fotos/opis/alf1.jpg "},
{x:2, name: "Весёлые цвета", price: 220, img: "url(fotos/cvet.png)", img2: "fotos/opis/cvet1.jpg "},
{x:2, name: "Викторина для девочек", price: 200, img: "url(fotos/dev.png)", img2: "fotos/opis/dev1.jpg "},
{x:2, name: "Изучаем время с Эльзой и Анной", price: 90, img: "url(fotos/elz.png)", img2: "fotos/opis/elz1.jpg "},
{x:2, name: "В стране динозавров", price: 320, img: "url(fotos/dino.png)", img2: "fotos/opis/dino1.jpg "},
{x:2, name: "Изучаем алфавит с Машей", price: 150, img: "url(fotos/mash.png)", img2: "fotos/opis/mash1.jpg "},
{x:2, name: "Весёлый рой", price: 260, img: "url(fotos/vesr.png)", img2: "fotos/opis/vesr1.jpg "},
{x:2, name: "Съедобное несъедобное", price: 200, img: "url(fotos/seed.png)", img2: "fotos/opis/seed1.jpg "},
{x:2, name: "Шнуровка Мишка с ягодками", price: 140, img: "url(fotos/beer.png)", img2: "fotos/opis/beer1.jpg "},
{x:2, name: "Вредные советы", price: 200, img: "url(fotos/vred.png)", img2: "fotos/opis/vred1.jpg "},
{x:2, name: "В гостях у Миши", price: 300, img: "url(fotos/vgos.png)", img2: "fotos/opis/vgos1.jpg "},
{x:2, name: "Забавная арифметика", price: 250, img: "url(fotos/ari.png)", img2: "fotos/opis/ari1.jpg "},
{x:2, name: "Азбука антонимов", price: 270, img: "url(fotos/azb.png)", img2: "fotos/opis/azb1.jpg "},
{x:2, name: "Красота - страшная сила", price: 320, img: "url(fotos/sila.png)", img2: "fotos/opis/sila1.jpg "},
{x:2, name: "Виды спорта", price: 200, img: "url(fotos/sport.png)", img2: "fotos/opis/sport1.jpg "},
{x:2, name: "Чудо-гусенка", price: 280, img: "url(fotos/chud.png)", img2: "fotos/opis/chud1.jpg "},
{x:2, name: "Что из чего состоит?", price: 220, img: "url(fotos/sost.png)", img2: "fotos/opis/sost1.jpg "},
{x:2, name: "Логические цепочки: время", price: 220, img: "url(fotos/vrsy.png)", img2: "fotos/opis/vrsy1.jpg "},
{x:2, name: "Пиши и вытирай", price: 250, img: "url(fotos/pivy.png)", img2: "fotos/opis/pivy1.jpg"},
{x:2, name: "Собери свой праздник", price: 200, img: "url(fotos/sosp.png)", img2: "fotos/opis/sosp1.jpg"},
{x:2, name: "Волшебный сундучок", price: 200, img: "url(fotos/vocy.png)", img2: "fotos/opis/vocy1.jpg"},
{x:2, name: "Дикие звери", price: 180, img: "url(fotos/zvep.png)", img2: "fotos/opis/zvep1.jpg "},
{x:2, name: "Изучаем профессии с Машей", price: 150, img: "url(fotos/prof.png)", img2: "fotos/opis/prof1.jpg "},


        
{x:3, name: "Блокбастер", price: 350, img: "url(fotos/blok.png)", img2: "fotos/opis/blok1.jpg "},
{x:3, name: "Монополия Деловой квартал", price: 250, img: "url(fotos/kvar.png)", img2: "fotos/opis/kvar1.jpg "},
{x:3, name: "Лото Пиратские приключения", price: 350, img: "url(fotos/pira.png)", img2: "fotos/opis/pira1.jpg "},
{x:3, name: "Давай на спор", price: 570, img: "url(fotos/dana.png)", img2: "fotos/opis/dana1.jpg "},
{x:3, name: "Падающая башня UNO MOMENTO", price: 670, img: "url(fotos/padb.png)", img2: "fotos/opis/padb1.jpg "},
{x:3, name: "Твистер семейный", price: 550, img: "url(fotos/twise.png)", img2: "fotos/opis/twise1.jpg "},
{x:3, name: "Волшебник Изумрудного города", price: 1550, img: "url(fotos/vig.png)", img2: "fotos/opis/vig1.jpg "},
{x:3, name: "Смеха ради", price: 450, img: "url(fotos/radi.png)", img2: "fotos/opis/radi1.jpg "},
{x:3, name: "Рекорды мира", price: 130, img: "url(fotos/rec.png)", img2: "fotos/opis/rec1.jpg "},
{x:3, name: "Сектор приз", price: 150, img: "url(fotos/sekt.png)", img2: "fotos/opis/sekt1.jpg "},
{x:3, name: "Сенсация", price: 540, img: "url(fotos/senc.png)", img2: "fotos/opis/senc1.jpg "},
{x:3, name: "Время открытий", price: 520, img: "url(fotos/time.png)", img2: "fotos/opis/time1.jpg "},
{x:3, name: "Твоя игра", price: 550, img: "url(fotos/tvoy.png)", img2: "fotos/opis/tvoy1.jpg "},
{x:3, name: "Хитрецы", price: 300, img: "url(fotos/xit.png)", img2: "fotos/opis/xit1.jpg "},
{x:3, name: "Крокодильчик", price: 250, img: "url(fotos/dil.png)", img2: "fotos/opis/dil1.jpg "},
{x:3, name: "Игра-ходилка Россия", price: 90, img: "url(fotos/rus.jpg)", img2: "fotos/opis/rus1.jpg "},
{x:3, name: "Маленький волшебник", price: 250, img: "url(fotos/skaz.png)", img2: "fotos/opis/skaz1.jpg "},


/*на новый год*/
{x:1, name: "Подарки в мешке", price: 250, img: "url(fotos/mpod.png)", img2: "fotos/opis/mpod1.jpg "},
{x:1, name: "Снежная битва", price: 250, img: "url(fotos/sbi.png)", img2: "fotos/opis/sbi1.jpg "},

{x:3, name: "Попробуй объясни новогодняя", price: 320, img: "url(fotos/pon.png)", img2: "fotos/opis/pon1.jpg "},

{x:4, name: "Новогодняя бутылка", price: 270, img: "url(fotos/nobu.png)", img2: "fotos/opis/nobu1.jpg "},
{x:4, name: "Новогодние фанты", price: 150, img: "url(fotos/npi.png)", img2: "fotos/opis/npi1.jpg "},


];



                               /*сценарий поиска*/
/*
    get("poisk").oninput = function () {
        if (get("poisk").value.length > 2) {
            var search = get("poisk").value.toLowerCase();
            var poisk = mass.filter(function (el) {
                var search2 = el.name.toLowerCase();
                return search2.indexOf(search) !== -1;  });
                get("vyvod").style.boxShadow = "0 0 43px 7px #35282e"; };
                
        if (get("poisk").value.length < 3)
        { get("vyvod").style.boxShadow = "none";}
       
        get("vyvod").innerHTML = " ";
        /!*for (var i3 = 0; i3 < poisk.length; i3++) {
            get("vyvod").innerHTML += ` ${poisk[i3].name} <br> ` ;
        };*!/

        for (var i = 0; i < poisk.length; i++) {
             var xx = new Bloki(poisk[i]);
            xx.open () };
    }*/




/*конструктор*/

var mascorz = [];  let sum =0;

class Bloki {
    constructor (m){
        this.cont = document.createElement("div");
        this.cont.className = "tovv";
        this.cont.style.background = m.img + "center 20px / 70% no-repeat";
       /* this.cont.style.backgroundSize = "cover";*/

        this.nam = document.createElement("a");
        this.nam.title = "посмотреть игру";
        this.nam.rel="lightbox";
        this.nam.href = m.img2;
        this.nam.className = "nam";
        this.nam.innerHTML = m.name ;
        this.cont.appendChild(this.nam);

        this.cena = document.createElement("div");
        this.cena.className = "cena";
        this.cena.innerHTML = m.price + " руб.";
        this.cont.appendChild(this.cena);

        this.but = document.createElement("div");
        this.but.className = "but";
        this.but.innerHTML = "в корзину";
        this.but.onclick = function () {
            mascorz.push(m);
            /*this.style.background = "black";
            this.innerHTML= "добавлено";*/
            get("korz0").style.opacity = "1";
            get("korz2").innerHTML = `У вас<br> в корзинке<br> ${mascorz.length} тов.` ;
            sum +=  m.price;
            get("summ").innerHTML = `Вы заказываете товар на сумму: ${sum} руб.<br> Доставка 100 руб.`;
            d.show();
            d.tovary(m);
        };
        this.cont.appendChild(this.but);
        /* get("telo").appendChild(this.cont);*/
    }


    show  () { get("korz4").style.opacity = "1";
        setTimeout(function () {get("korz4").style.opacity = "0";}, 700)
           };

    tovary(o) {
        var tov = document.createElement("div");
        tov.className = "divv";
        tov.innerHTML = o.name + " - " + o.price + " руб.";
        var img = document.createElement("img");
        img.src = "fotos/res.png";
        img.className = "img0";
        tov.appendChild(img);
        get("tovar").appendChild(tov);
    };

    vtelo1 () { get("telo").appendChild(this.cont);};
    vtelo2 () {get("telo2").appendChild(this.cont); };
    vtelo3 () {get("telo3").appendChild(this.cont); };
    vtelo4 () {get("telo4").appendChild(this.cont); };
    vtelo5 () {get("telo5").appendChild(this.cont); };
    vtelo6 () {get("telo6").appendChild(this.cont); };
    
    open () {  get("vyvod").appendChild(this.cont);}
}


/*get("vzro").onclick = function () {
    console.log("test22");
    var ayax = new XMLHttpRequest();
    ayax.open("GET", "massiv.php");
    ayax.onreadystatechange = function () {
        if (ayax.readyState == 4 && ayax.status == 200) {
           var data = JSON.parse(ayax.responseText);
console.log(data);
            for (var i = 0; i < data.length; i++) {
                var d0 = new Bloki(data[i]);
                d0.vtelo1(); };
        }
    };


    ayax.send();

};*/

/*запускаем отрисовку в тело*/

for (let i = 0; i < mass.length; i++) {
    if (mass[i].x==4 ) {var d = new Bloki(mass[i]);}
    /*    d.vtelo1(); };
    if ( mass[i].x==5) {var d3 = new Bloki(mass[i]);
        d3.vtelo3(); };
    if ( mass[i].x==6) {var d4 = new Bloki(mass[i]);
        d4.vtelo4(); };
        
  /!*  if (mass[i].x==1) { var d2 = new Bloki(mass[i]);
        d2.vtelo2();}*!/
    if (mass[i].x==3) { var d5 = new Bloki(mass[i]);
        d5.vtelo5();}
    if (mass[i].x==2) { var d6 = new Bloki(mass[i]);
        d6.vtelo6();}*/
};

/*   //////////////////  берем товар из карточек////////////////////////////////*/
var tovv = document.getElementsByClassName("tovv");

for (var x = 0; x < tovv.length; x++) {
    tovv[x].onclick = function (e) {
        if (e.target.className != "but" ) return;
        var mastov =[];
        var mm = this.querySelector(".cena").innerHTML;
        var mm22 = this.querySelector(".nam").innerHTML;
        var idtov = this.querySelector(".idtov").innerHTML;
        mastov.price = parseInt(mm);
        mastov.name = mm22;
        mastov.idtov = idtov;
        mascorz.push(mastov);
      /*  d.tovary(mastov);*/
        get("korz0").style.opacity = "1";
        get("korz2").innerHTML = "У вас"+ "<br> "+"в корзинке" +"<br> "+ mascorz.length + " тов." ;

      /* alert(mastov);*/
    }
}
console.log(mascorz);

/*    форма регистрации*/
var reg = {};
if (localStorage.pass) {
    get("ina").style.display = "none";
    get("im").style.display = "none";
    get("login-button").innerHTML= localStorage.name;
    reg.name = get("in11").value= localStorage.name;
    reg.phone = get("in22").value= localStorage.phone;
    reg.pass = get("in33").value= localStorage.pass;
}
else {  get("klir").style.display = "none";}

get("klir").onclick = function () {
    localStorage.clear();
    get("in11").value=get("in22").value=get("in33").value= "";
    this.style.display = "none";
    get("ina").style.display = "block";
}
get("ina").onclick = function () {
    reg.name = localStorage.name= get("in11").value;
    reg.phone = localStorage.phone= get("in22").value;
    reg.pass = localStorage.pass= get("in33").value;
    if(get("in11").value=="" || get("in22").value=="" || get("in33").value=="") {return false;}
    this.innerHTML = "успешно";
    get("container").style.height = "0";

    ayx('ayax.php', reg);
    console.log(reg)
};


/*корзина*/

get("korz2").onclick = function () {
    if (!localStorage.pass) {
        alert("нужно зарегистрироваться");
        return false;
    }
    get("nm").value= get("in11").value;
   // get("focus").value =get("in22").value;

    for (var xx = 0; xx < mascorz.length; xx++) {
        d.tovary(mascorz[xx]);
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
    var jsn =[]; var ida=0;var ida2=0;
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
    ida=r;     console.log(parseInt(r));
}









/*смена кнопок меню детск-взросл*/

var bord = document.getElementsByClassName("tovv");
var ind = 1;
/*window.onload = function() {
    if (localStorage.vhod) {
        get("okno1").style.display = "none";
        get("detsk").click();   }
   /!* else {  get("okno1").style.display = "none";
        get("detsk").click();
        localStorage.vhod=1 }*!/
}*/
/*get("dets").onclick = function () {
/!*    console.log("test22");
    var ayax = new XMLHttpRequest();
    ayax.open("GET", "massiv.php");
    ayax.onreadystatechange = function () {
        if (ayax.readyState == 4 && ayax.status == 200) {
            var data = JSON.parse(ayax.responseText);
            console.log("test33");
            for (var i = 0; i < data.length; i++) {
                var d2 = new Bloki(data[i]);
                d2.vtelo2(); };
        }
    };
    ayax.send();*!/
    localStorage.vhod=1
    get("okno1").style.display = "none";
    get("detsk").click();
}*/

get("detsk").onclick = function () {
   // location = "http://magazin.local/deti.php";
    location = "http://magazin.local/vzrosl.php";
    document.cookie = "kategor=1";
    get("telo").style.display = "none";
    get("telo2").style.display = "block";
    get("telo3").style.display = "none";
    get("telo4").style.display = "none";
    get("telo5").style.display = "none";
    get("telo6").style.display = "none";
    dety();}

function dety() {   ind++;
    get("cente3").style.zIndex = ind;
    get("cente3").style.transform = "scale(0.84)";
    get("cente2").style.transform = "scale(0.7)";
    get("heder").style.background = "url('fotos/gux.jpg') fixed center center / cover";
    get("heder2").style.background = "rgba(95, 53, 0, 0.63)";
    get("h1").style.color = "#f78d06";
    get("h2").style.color = "#afc500";
    get("bod").style.background = "url('fotos/zag0.jpg') fixed center center";
    get("img").src = 'fotos/ргасе1.png';
};

/*get("vzro").onclick = function () {

/!*
    var ayax = new XMLHttpRequest();
    ayax.open("GET", "massiv.php");
    ayax.onreadystatechange = function () {
        if (ayax.readyState == 4 && ayax.status == 200) {
            console.log("test22");
            var data = JSON.parse(ayax.responseText);
            console.log(data);
            /!*for (var i = 0; i < data.length; i++) {
                var d = new Bloki(data[i]);
                d.vtelo1(); };*!/
        };
    }; ayax.send();
*!/

    get("okno1").style.display = "none";
    get("vzros").click();}*/
get("vzros").onclick = function () {
     location = "http://magazin.local/vzrosl.php";
    document.cookie = "kategor=2";
    get("telo").style.display = "block";
    get("telo2").style.display = "none";
    get("telo3").style.display = "none";
    get("telo4").style.display = "none";
    get("telo5").style.display = "none";
    get("telo6").style.display = "none";
    vzr();}

function vzr() {    ind++;
    get("cente2").style.zIndex = ind;
    get("cente2").style.transform = "scale(0.8)";
    get("cente3").style.transform = "scale(0.7)";
    get("heder").style.background = "url('fotos/dsc.jpg') fixed center center/ cover";
    get("heder2").style.background = "rgba(10, 10, 9, 0.7)";
    get("h1").style.color = "#ff3100";
    get("h2").style.color = "#53c327";
    get("bod").style.background = "url('fotos/fon0.jpg') fixed center center";
    get("img").src = 'fotos/ргасе0.png';

  };


get("vzros2").onclick = function () {
    vzr();
    get("telo3").style.display = "block";
    get("telo2").style.display = "none";
    get("telo").style.display = "none";
    get("telo4").style.display = "none";
    get("telo5").style.display = "none";
    get("telo6").style.display = "none";
}
get("vzros3").onclick = function () {
    vzr();
    get("telo4").style.display = "block";
    get("telo3").style.display = "none";
    get("telo2").style.display = "none";
    get("telo").style.display = "none";
    get("telo5").style.display = "none";
    get("telo6").style.display = "none";
}
get("detsk3").onclick = function () {
    dety();
    get("telo5").style.display = "block";
    get("telo3").style.display = "none";
    get("telo2").style.display = "none";
    get("telo").style.display = "none";
    get("telo4").style.display = "none";
    get("telo6").style.display = "none";
}
get("detsk2").onclick = function () {
    dety();
    get("telo6").style.display = "block";
    get("telo5").style.display = "none";
    get("telo3").style.display = "none";
    get("telo2").style.display = "none";
    get("telo").style.display = "none";
    get("telo4").style.display = "none";
    
}




$('#login-button').click(function(){
    $('#login-button').fadeOut("slow",function(){
        $("#container").fadeIn();
        TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
        TweenMax.to("#container", .6, { scale: 1, ease:Sine.easeInOut});
    });
});









/* get("sat").onclick = function() {get("okno1").style.display = "none";}*/
