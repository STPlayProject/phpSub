var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("interface", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("dataSource", ["require", "exports"], function (require, exports) {
    "use strict";
});
// map size
// var minSize : {width:number,height:number} = {width:0,height:0};
// for (var stationId in sourceData.stations) {
//     let station = sourceData.stations[stationId];
//     minSize.width = minSize.width > station.loc.x ? minSize.width : station.loc.x;
//     minSize.height = minSize.height > station.loc.y ? minSize.height : station.loc.y;
// }
// export let MinSize = {
//     width : minSize.width,
//     height : minSize.height
// };
// xhr.open("POST", "http://182.254.154.16:808/api/Goods/Getdatabetweentwostations");
// xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
// xhr.send('Cityid=021&originating%20station=0412&terminate%20station=0813');
// let sourceData = {
//     "stations":{
//         "l01s01":{
//             "id":"l01s01",
//             "name":"莘庄",
//             "loc":{"x":419,"y":1330},
//             "coord":{"lat":31.110973,"lng":121.385118},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l01s02":{
//             "id":"l01s02",
//             "name":"外环路",
//             "loc":{"x":461,"y":1287},
//             "coord":{"lat":31.121331,"lng":121.393312},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l01s03":{
//             "id":"l01s03",
//             "name":"莲花路",
//             "loc":{"x":496,"y":1251},
//             "coord":{"lat":31.130875,"lng":121.402928},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l01s04":{
//             "id":"l01s04",
//             "name":"锦江乐园",
//             "loc":{"x":533,"y":1215},
//             "coord":{"lat":31.142262,"lng":121.414048},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l01s05":{
//             "id":"l01s05",
//             "name":"上海南站",
//             "loc":{"x":584,"y":1164},
//             "coord":{"lat":31.154918,"lng":121.429901},
//             "label":"bottomleft.bottomright",
//             "scale":0.8
//         },
//         "l01s06":{
//             "id":"l01s06",
//             "name":"漕宝路",
//             "loc":{"x":617,"y":1125},
//             "coord":{"lat":31.168294,"lng":121.434772},
//             "label":"topleft.topleft",
//             "scale":0.8
//         },
//         "l01s07":{
//             "id":"l01s07",
//             "name":"上海体育馆",
//             "loc":{"x":646,"y":1040},
//             "coord":{"lat":31.181932,"lng":121.436409},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8,
//             "rotate":-45
//         },
//         "l01s08":{
//             "id":"l01s08",
//             "name":"徐家汇",
//             "loc":{"x":695,"y":992},
//             "coord":{"lat":31.193810,"lng":121.436238},
//             "label":"bottomright.bottomright",
//             "scale":0.5
//         },
//         "l01s09":{
//             "id":"l01s09",
//             "name":"衡山路",
//             "loc":{"x":720,"y":966},
//             "coord":{"lat":31.204983,"lng":121.446727},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s10":{
//             "id":"l01s10",
//             "name":"常熟路",
//             "loc":{"x":765,"y":932},
//             "coord":{"lat":31.213587,"lng":121.451306},
//             "label":"topleft.topright",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l01s11":{
//             "id":"l01s11",
//             "name":"陕西南路",
//             "loc":{"x":816,"y":936},
//             "coord":{"lat":31.215323,"lng":121.458508},
//             "label":"bottomright.bottomleft",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l01s12":{
//             "id":"l01s12",
//             "name":"黄陂南路",
//             "loc":{"x":886,"y":932},
//             "coord":{"lat":31.222789,"lng":121.473276},
//             "label":"bottomleft.bottomright",
//             "scale":0.8
//         },
//         "l01s13":{
//             "id":"l01s13",
//             "name":"人民广场",
//             "loc":{"x":933,"y":884},
//             "coord":{"lat":31.232997,"lng":121.475135},
//             "label":"topleft.topright",
//             "scale":0.5
//         },
//         "l01s14":{
//             "id":"l01s14",
//             "name":"新闸路",
//             "loc":{"x":891,"y":827},
//             "coord":{"lat":31.238721,"lng":121.468081},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s15":{
//             "id":"l01s15",
//             "name":"汉中路",
//             "loc":{"x":865,"y":779},
//             "coord":{"lat":31.240825,"lng":121.458522},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8,
//             "rotate":0
//         },
//         "l01s16":{
//             "id":"l01s16",
//             "name":"上海火车站",
//             "loc":{"x":880,"y":739},
//             "coord":{"lat":31.249584,"lng":121.458234},
//             "label":"left.left",
//             "scale":0.5,
//             "rotate":-45
//         },
//         "l01s17":{
//             "id":"l01s17",
//             "name":"中山北路",
//             "loc":{"x":913,"y":706},
//             "coord":{"lat":31.259088,"lng":121.459144},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s18":{
//             "id":"l01s18",
//             "name":"延长路",
//             "loc":{"x":935,"y":660},
//             "coord":{"lat":31.271839,"lng":121.455404},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s19":{
//             "id":"l01s19",
//             "name":"上海马戏城",
//             "loc":{"x":935,"y":608},
//             "coord":{"lat":31.279560,"lng":121.452043},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s20":{
//             "id":"l01s20",
//             "name":"汶水路",
//             "loc":{"x":935,"y":554},
//             "coord":{"lat":31.292508,"lng":121.450214},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s21":{
//             "id":"l01s21",
//             "name":"彭浦新村",
//             "loc":{"x":935,"y":498},
//             "coord":{"lat":31.306751,"lng":121.448640},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s22":{
//             "id":"l01s22",
//             "name":"共康路",
//             "loc":{"x":935,"y":443},
//             "coord":{"lat":31.319003,"lng":121.447027},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s23":{
//             "id":"l01s23",
//             "name":"通河新村",
//             "loc":{"x":935,"y":387},
//             "coord":{"lat":31.331475,"lng":121.441328},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s24":{
//             "id":"l01s24",
//             "name":"呼兰路",
//             "loc":{"x":935,"y":331},
//             "coord":{"lat":31.339611,"lng":121.437716},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s25":{
//             "id":"l01s25",
//             "name":"共富新村",
//             "loc":{"x":935,"y":275},
//             "coord":{"lat":31.355413,"lng":121.434090},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s26":{
//             "id":"l01s26",
//             "name":"宝安公路",
//             "loc":{"x":935,"y":218},
//             "coord":{"lat":31.369945,"lng":121.430870},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s27":{
//             "id":"l01s27",
//             "name":"友谊西路",
//             "loc":{"x":935,"y":163},
//             "coord":{"lat":31.381353,"lng":121.427876},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l01s28":{
//             "id":"l01s28",
//             "name":"富锦路",
//             "loc":{"x":935,"y":107},
//             "coord":{"lat":31.392403,"lng":121.424720},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l02s01":{
//             "id":"l02s01",
//             "name":"广兰路",
//             "loc":{"x":1408,"y":1132},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l02s02":{
//             "id":"l02s02",
//             "name":"金科路",
//             "loc":{"x":1349,"y":1132},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l02s03":{
//             "id":"l02s03",
//             "name":"张江高科",
//             "loc":{"x":1290,"y":1132},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l02s04":{
//             "id":"l02s04",
//             "name":"龙阳路",
//             "loc":{"x":1226,"y":1128},
//             "label":"left.left",
//             "scale":0.5,
//             "rotate":90
//         },
//         "l02s05":{
//             "id":"l02s05",
//             "name":"世纪公园",
//             "loc":{"x":1206,"y":1078},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l02s06":{
//             "id":"l02s06",
//             "name":"上海科技馆",
//             "loc":{"x":1206,"y":1031},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l02s07":{
//             "id":"l02s07",
//             "name":"世纪大道",
//             "loc":{"x":1138,"y":954},
//             "label":"bottomleft.bottomleft",
//             "scale":0.5,
//             "rotate":-45
//         },
//         "l02s08":{
//             "id":"l02s08",
//             "name":"东昌路",
//             "loc":{"x":1100,"y":915},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l02s09":{
//             "id":"l02s09",
//             "name":"陆家嘴",
//             "loc":{"x":1057,"y":884},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l02s10":{
//             "id":"l02s10",
//             "name":"南京东路",
//             "loc":{"x":980,"y":884},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l02s12":{
//             "id":"l02s12",
//             "name":"南京西路",
//             "loc":{"x":865,"y":884},
//             "label":"topleft.topleft",
//             "scale":0.8
//         },
//         "l02s13":{
//             "id":"l02s13",
//             "name":"静安寺",
//             "loc":{"x":765,"y":884},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l02s14":{
//             "id":"l02s14",
//             "name":"江苏路",
//             "loc":{"x":714,"y":864},
//             "label":"right.right",
//             "scale":0.8,
//             "rotate":45
//         },
//         "l02s15":{
//             "id":"l02s15",
//             "name":"中山公园",
//             "loc":{"x":604,"y":831},
//             "label":"topleft.topleft",
//             "scale":0.8
//         },
//         "l02s16":{
//             "id":"l02s16",
//             "name":"娄山关路",
//             "loc":{"x":545,"y":831},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l02s17":{
//             "id":"l02s17",
//             "name":"威宁路",
//             "loc":{"x":502,"y":804},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l02s18":{
//             "id":"l02s18",
//             "name":"北新泾",
//             "loc":{"x":467,"y":769},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l02s19":{
//             "id":"l02s19",
//             "name":"淞虹路",
//             "loc":{"x":414,"y":749},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l02s20":{
//             "id":"l02s20",
//             "name":"虹桥2号航站楼",
//             "loc":{"x":339,"y":860},
//             "label":"topright.topright",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l02s21":{
//             "id":"l02s21",
//             "name":"虹桥火车站",
//             "loc":{"x":294,"y":860},
//             "label":"bottom.bottom",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l02s22":{
//             "id":"l02s22",
//             "name":"徐泾东",
//             "loc":{"x":250,"y":856},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "e02s01":{
//             "id":"e02s01",
//             "name":"浦东国际机场",
//             "loc":{"x":1767,"y":1280},
//             "label":"bottomright.bottomleft",
//             "scale":0.8
//         },
//         "e02s02":{
//             "id":"e02s02",
//             "name":"海天三路",
//             "loc":{"x":1737,"y":1248},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "e02s03":{
//             "id":"e02s03",
//             "name":"远东大道",
//             "loc":{"x":1681,"y":1228},
//             "label":"topleft.topright",
//             "scale":0.8
//         },
//         "e02s04":{
//             "id":"e02s04",
//             "name":"凌空路",
//             "loc":{"x":1625,"y":1228},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "e02s05":{
//             "id":"e02s05",
//             "name":"川沙",
//             "loc":{"x":1562,"y":1228},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "e02s06":{
//             "id":"e02s06",
//             "name":"华夏东路",
//             "loc":{"x":1551,"y":1168},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "e02s07":{
//             "id":"e02s07",
//             "name":"创新中路",
//             "loc":{"x":1527,"y":1132},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "e02s08":{
//             "id":"e02s08",
//             "name":"唐镇",
//             "loc":{"x":1468,"y":1132},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l03s01":{
//             "id":"l03s01",
//             "name":"江杨北路",
//             "loc":{"x":1128,"y":113},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s02":{
//             "id":"l03s02",
//             "name":"铁力路",
//             "loc":{"x":1164,"y":148},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s03":{
//             "id":"l03s03",
//             "name":"友谊路",
//             "loc":{"x":1177,"y":192},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s04":{
//             "id":"l03s04",
//             "name":"宝杨路",
//             "loc":{"x":1177,"y":243},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s05":{
//             "id":"l03s05",
//             "name":"水产路",
//             "loc":{"x":1177,"y":294},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s06":{
//             "id":"l03s06",
//             "name":"淞滨路",
//             "loc":{"x":1177,"y":345},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s07":{
//             "id":"l03s07",
//             "name":"张华浜",
//             "loc":{"x":1167,"y":390},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s08":{
//             "id":"l03s08",
//             "name":"淞发路",
//             "loc":{"x":1129,"y":428},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s09":{
//             "id":"l03s09",
//             "name":"长江南路",
//             "loc":{"x":1098,"y":466},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s10":{
//             "id":"l03s10",
//             "name":"殷高西路",
//             "loc":{"x":1098,"y":515},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s11":{
//             "id":"l03s11",
//             "name":"江湾镇",
//             "loc":{"x":1098,"y":564},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s12":{
//             "id":"l03s12",
//             "name":"大柏树",
//             "loc":{"x":1098,"y":612},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s13":{
//             "id":"l03s13",
//             "name":"赤峰路",
//             "loc":{"x":1085,"y":650},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l03s14":{
//             "id":"l03s14",
//             "name":"虹口足球场",
//             "loc":{"x":1038,"y":698},
//             "label":"bottomleft.bottomright",
//             "scale":0.8
//         },
//         "l03s15":{
//             "id":"l03s15",
//             "name":"东宝兴路",
//             "loc":{"x":998,"y":738},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l03s16":{
//             "id":"l03s16",
//             "name":"宝山路",
//             "loc":{"x":960,"y":760},
//             "label":"bottomright.bottomright",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l03s18":{
//             "id":"l03s18",
//             "name":"中潭路",
//             "loc":{"x":826,"y":720},
//             "label":"top.top",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l03s19":{
//             "id":"l03s19",
//             "name":"镇坪路",
//             "loc":{"x":765,"y":720},
//             "label":"bottomright.bottomright",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l03s20":{
//             "id":"l03s20",
//             "name":"曹杨路",
//             "loc":{"x":714,"y":720},
//             "label":"topright.topright",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l03s21":{
//             "id":"l03s21",
//             "name":"金沙江路",
//             "loc":{"x":643,"y":730},
//             "label":"top.top",
//             "scale":0.8,
//             "rotate":45
//         },
//         "l03s23":{
//             "id":"l03s23",
//             "name":"延安西路",
//             "loc":{"x":604,"y":888},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l03s24":{
//             "id":"l03s24",
//             "name":"虹桥路",
//             "loc":{"x":604,"y":940},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l03s25":{
//             "id":"l03s25",
//             "name":"宜山路",
//             "loc":{"x":618,"y":1019},
//             "label":"left.left",
//             "scale":0.8,
//             "rotate":-45
//         },
//         "l03s26":{
//             "id":"l03s26",
//             "name":"漕溪路",
//             "loc":{"x":651,"y":1100},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l03s27":{
//             "id":"l03s27",
//             "name":"龙漕路",
//             "loc":{"x":665,"y":1125},
//             "label":"bottom.bottom",
//             "scale":0.8,
//             "rotate":0
//         },
//         "l03s28":{
//             "id":"l03s28",
//             "name":"石龙路",
//             "loc":{"x":636,"y":1164},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l04s03":{
//             "id":"l04s03",
//             "name":"上海体育场",
//             "loc":{"x":704,"y":1058},
//             "label":"topleft.topright",
//             "scale":0.8
//         },
//         "l04s04":{
//             "id":"l04s04",
//             "name":"东安路",
//             "loc":{"x":765,"y":1058},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l04s05":{
//             "id":"l04s05",
//             "name":"大木桥路",
//             "loc":{"x":816,"y":1058},
//             "label":"bottomleft.bottomright",
//             "scale":0.8
//         },
//         "l04s06":{
//             "id":"l04s06",
//             "name":"鲁班路",
//             "loc":{"x":865,"y":1058},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l04s07":{
//             "id":"l04s07",
//             "name":"西藏南路",
//             "loc":{"x":933,"y":1058},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l04s08":{
//             "id":"l04s08",
//             "name":"南浦大桥",
//             "loc":{"x":986,"y":1058},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l04s09":{
//             "id":"l04s09",
//             "name":"塘桥",
//             "loc":{"x":1053,"y":1085},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l04s10":{
//             "id":"l04s10",
//             "name":"蓝村路",
//             "loc":{"x":1124,"y":1060},
//             "label":"right.right",
//             "scale":0.8,
//             "rotate":45
//         },
//         "l04s11":{
//             "id":"l04s11",
//             "name":"浦电路",
//             "loc":{"x":1156,"y":1034},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l04s13":{
//             "id":"l04s13",
//             "name":"浦东大道",
//             "loc":{"x":1138,"y":894},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l04s14":{
//             "id":"l04s14",
//             "name":"杨树浦路",
//             "loc":{"x":1138,"y":836},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l04s15":{
//             "id":"l04s15",
//             "name":"大连路",
//             "loc":{"x":1116,"y":809},
//             "label":"topright.topright",
//             "scale":0.8,
//             "rotate":45
//         },
//         "l04s16":{
//             "id":"l04s16",
//             "name":"临平路",
//             "loc":{"x":1088,"y":780},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l04s17":{
//             "id":"l04s17",
//             "name":"海伦路",
//             "loc":{"x":1044,"y":764},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l05s02":{
//             "id":"l05s02",
//             "name":"春申路",
//             "loc":{"x":384,"y":1384},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l05s03":{
//             "id":"l05s03",
//             "name":"银都路",
//             "loc":{"x":384,"y":1440},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l05s04":{
//             "id":"l05s04",
//             "name":"颛桥",
//             "loc":{"x":384,"y":1500},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l05s05":{
//             "id":"l05s05",
//             "name":"北桥",
//             "loc":{"x":384,"y":1558},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l05s06":{
//             "id":"l05s06",
//             "name":"剑川路",
//             "loc":{"x":384,"y":1618},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l05s07":{
//             "id":"l05s07",
//             "name":"东川路",
//             "loc":{"x":384,"y":1674},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l05s08":{
//             "id":"l05s08",
//             "name":"金平路",
//             "loc":{"x":338,"y":1695},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l05s09":{
//             "id":"l05s09",
//             "name":"华宁路",
//             "loc":{"x":298,"y":1695},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l05s10":{
//             "id":"l05s10",
//             "name":"文井路",
//             "loc":{"x":258,"y":1695},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l05s11":{
//             "id":"l05s11",
//             "name":"闵行开发区",
//             "loc":{"x":216,"y":1695},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l06s01":{
//             "id":"l06s01",
//             "name":"港城路",
//             "loc":{"x":1456,"y":469},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s02":{
//             "id":"l06s02",
//             "name":"外高桥保税区北",
//             "loc":{"x":1481,"y":514},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s03":{
//             "id":"l06s03",
//             "name":"航津路",
//             "loc":{"x":1481,"y":560},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s04":{
//             "id":"l06s04",
//             "name":"外高桥保税区南",
//             "loc":{"x":1481,"y":606},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s05":{
//             "id":"l06s05",
//             "name":"洲海路",
//             "loc":{"x":1456,"y":646},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s06":{
//             "id":"l06s06",
//             "name":"五洲大道",
//             "loc":{"x":1456,"y":702},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s07":{
//             "id":"l06s07",
//             "name":"东靖路",
//             "loc":{"x":1456,"y":757},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s08":{
//             "id":"l06s08",
//             "name":"巨峰路",
//             "loc":{"x":1456,"y":809},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l06s09":{
//             "id":"l06s09",
//             "name":"五莲路",
//             "loc":{"x":1456,"y":868},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s10":{
//             "id":"l06s10",
//             "name":"博兴路",
//             "loc":{"x":1445,"y":910},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l06s11":{
//             "id":"l06s11",
//             "name":"金桥路",
//             "loc":{"x":1415,"y":940},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l06s12":{
//             "id":"l06s12",
//             "name":"云山路",
//             "loc":{"x":1365,"y":944},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l06s13":{
//             "id":"l06s13",
//             "name":"德平路",
//             "loc":{"x":1322,"y":944},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l06s14":{
//             "id":"l06s14",
//             "name":"北洋泾路",
//             "loc":{"x":1277,"y":944},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l06s15":{
//             "id":"l06s15",
//             "name":"民生路",
//             "loc":{"x":1234,"y":944},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l06s16":{
//             "id":"l06s16",
//             "name":"源深体育中心",
//             "loc":{"x":1188,"y":944},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l06s18":{
//             "id":"l06s18",
//             "name":"浦电路",
//             "loc":{"x":1121,"y":1008},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l06s20":{
//             "id":"l06s20",
//             "name":"上海儿童医学中心",
//             "loc":{"x":1070,"y":1107},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s21":{
//             "id":"l06s21",
//             "name":"临沂新村",
//             "loc":{"x":1033,"y":1142},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s22":{
//             "id":"l06s22",
//             "name":"高科西路",
//             "loc":{"x":990,"y":1182},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l06s23":{
//             "id":"l06s23",
//             "name":"东明路",
//             "loc":{"x":990,"y":1246},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s24":{
//             "id":"l06s24",
//             "name":"高青路",
//             "loc":{"x":990,"y":1288},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s25":{
//             "id":"l06s25",
//             "name":"华夏西路",
//             "loc":{"x":990,"y":1336},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l06s26":{
//             "id":"l06s26",
//             "name":"上南路",
//             "loc":{"x":930,"y":1342},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l06s27":{
//             "id":"l06s27",
//             "name":"灵岩南路",
//             "loc":{"x":864,"y":1342},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l06s28":{
//             "id":"l06s28",
//             "name":"东方体育中心",
//             "loc":{"x":825,"y":1295},
//             "label":"left.left",
//             "scale":0.8,
//             "rotate":-45
//         },
//         "l07s01":{
//             "id":"l07s01",
//             "name":"美兰湖",
//             "loc":{"x":738,"y":90},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s02":{
//             "id":"l07s02",
//             "name":"罗南新村",
//             "loc":{"x":738,"y":147},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s03":{
//             "id":"l07s03",
//             "name":"潘广路",
//             "loc":{"x":738,"y":204},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s04":{
//             "id":"l07s04",
//             "name":"刘行",
//             "loc":{"x":738,"y":260},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s05":{
//             "id":"l07s05",
//             "name":"顾村公园",
//             "loc":{"x":738,"y":318},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s06":{
//             "id":"l07s06",
//             "name":"祁华路",
//             "loc":{"x":738,"y":374},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l07s07":{
//             "id":"l07s07",
//             "name":"上海大学",
//             "loc":{"x":778,"y":390},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l07s08":{
//             "id":"l07s08",
//             "name":"南陈路",
//             "loc":{"x":817,"y":398},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s09":{
//             "id":"l07s09",
//             "name":"上大路",
//             "loc":{"x":817,"y":441},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s10":{
//             "id":"l07s10",
//             "name":"场中路",
//             "loc":{"x":817,"y":485},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s11":{
//             "id":"l07s11",
//             "name":"大场镇",
//             "loc":{"x":817,"y":531},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s12":{
//             "id":"l07s12",
//             "name":"行知路",
//             "loc":{"x":817,"y":574},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s13":{
//             "id":"l07s13",
//             "name":"大华三路",
//             "loc":{"x":817,"y":609},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s14":{
//             "id":"l07s14",
//             "name":"新村路",
//             "loc":{"x":814,"y":644},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s15":{
//             "id":"l07s15",
//             "name":"岚皋路",
//             "loc":{"x":784,"y":674},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s17":{
//             "id":"l07s17",
//             "name":"长寿路",
//             "loc":{"x":765,"y":779},
//             "label":"bottomright.bottomright",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l07s18":{
//             "id":"l07s18",
//             "name":"昌平路",
//             "loc":{"x":765,"y":828},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s21":{
//             "id":"l07s21",
//             "name":"肇嘉浜路",
//             "loc":{"x":765,"y":992},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l07s23":{
//             "id":"l07s23",
//             "name":"龙华中路",
//             "loc":{"x":772,"y":1106},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l07s24":{
//             "id":"l07s24",
//             "name":"后滩",
//             "loc":{"x":820,"y":1152},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l07s25":{
//             "id":"l07s25",
//             "name":"长清路",
//             "loc":{"x":860,"y":1180},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l07s26":{
//             "id":"l07s26",
//             "name":"耀华路",
//             "loc":{"x":909,"y":1182},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l07s27":{
//             "id":"l07s27",
//             "name":"云台路",
//             "loc":{"x":948,"y":1182},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l07s29":{
//             "id":"l07s29",
//             "name":"杨高南路",
//             "loc":{"x":1064,"y":1182},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l07s30":{
//             "id":"l07s30",
//             "name":"锦绣路",
//             "loc":{"x":1128,"y":1182},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l07s31":{
//             "id":"l07s31",
//             "name":"芳华路",
//             "loc":{"x":1181,"y":1173},
//             "label":"topleft.topleft",
//             "scale":0.8
//         },
//         "l07s33":{
//             "id":"l07s33",
//             "name":"花木路",
//             "loc":{"x":1255,"y":1099},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s01":{
//             "id":"l08s01",
//             "name":"沈杜公路",
//             "loc":{"x":818,"y":1714},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l08s02":{
//             "id":"l08s02",
//             "name":"联航路",
//             "loc":{"x":818,"y":1642},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l08s03":{
//             "id":"l08s03",
//             "name":"江月路",
//             "loc":{"x":818,"y":1570},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l08s04":{
//             "id":"l08s04",
//             "name":"浦江镇",
//             "loc":{"x":818,"y":1500},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l08s05":{
//             "id":"l08s05",
//             "name":"芦恒路",
//             "loc":{"x":818,"y":1430},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l08s06":{
//             "id":"l08s06",
//             "name":"凌兆新村",
//             "loc":{"x":796,"y":1366},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l08s08":{
//             "id":"l08s08",
//             "name":"杨思",
//             "loc":{"x":856,"y":1264},
//             "label":"topleft.topleft",
//             "scale":0.8
//         },
//         "l08s09":{
//             "id":"l08s09",
//             "name":"成山路",
//             "loc":{"x":909,"y":1239},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s11":{
//             "id":"l08s11",
//             "name":"中华艺术宫",
//             "loc":{"x":928,"y":1130},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s13":{
//             "id":"l08s13",
//             "name":"陆家浜路",
//             "loc":{"x":933,"y":1020},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l08s14":{
//             "id":"l08s14",
//             "name":"老西门",
//             "loc":{"x":933,"y":969},
//             "label":"bottomright.bottomright",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l08s15":{
//             "id":"l08s15",
//             "name":"大世界",
//             "loc":{"x":933,"y":915},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s17":{
//             "id":"l08s17",
//             "name":"曲阜路",
//             "loc":{"x":933,"y":795},
//             "label":"right.right",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l08s18":{
//             "id":"l08s18",
//             "name":"中兴路",
//             "loc":{"x":954,"y":730},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s19":{
//             "id":"l08s19",
//             "name":"西藏北路",
//             "loc":{"x":986,"y":698},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l08s21":{
//             "id":"l08s21",
//             "name":"曲阳路",
//             "loc":{"x":1074,"y":698},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l08s22":{
//             "id":"l08s22",
//             "name":"四平路",
//             "loc":{"x":1108,"y":702},
//             "label":"right.right",
//             "scale":0.8,
//             "rotate":-45
//         },
//         "l08s23":{
//             "id":"l08s23",
//             "name":"鞍山新村",
//             "loc":{"x":1164,"y":750},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l08s24":{
//             "id":"l08s24",
//             "name":"江浦路",
//             "loc":{"x":1218,"y":750},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l08s25":{
//             "id":"l08s25",
//             "name":"黄兴路",
//             "loc":{"x":1274,"y":750},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l08s26":{
//             "id":"l08s26",
//             "name":"延吉中路",
//             "loc":{"x":1288,"y":720},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s27":{
//             "id":"l08s27",
//             "name":"黄兴公园",
//             "loc":{"x":1288,"y":666},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s28":{
//             "id":"l08s28",
//             "name":"翔殷路",
//             "loc":{"x":1288,"y":614},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s29":{
//             "id":"l08s29",
//             "name":"嫩江路",
//             "loc":{"x":1288,"y":562},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l08s30":{
//             "id":"l08s30",
//             "name":"市光路",
//             "loc":{"x":1288,"y":510},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s01":{
//             "id":"l09s01",
//             "name":"杨高中路",
//             "loc":{"x":1220,"y":1002},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s03":{
//             "id":"l09s03",
//             "name":"商城路",
//             "loc":{"x":1084,"y":949},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l09s04":{
//             "id":"l09s04",
//             "name":"小南门",
//             "loc":{"x":1018,"y":1005},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s06":{
//             "id":"l09s06",
//             "name":"马当路",
//             "loc":{"x":890,"y":992},
//             "label":"topleft.topright",
//             "scale":0.8
//         },
//         "l09s07":{
//             "id":"l09s07",
//             "name":"打浦桥",
//             "loc":{"x":850,"y":992},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l09s08":{
//             "id":"l09s08",
//             "name":"嘉善路",
//             "loc":{"x":816,"y":992},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l09s12":{
//             "id":"l09s12",
//             "name":"桂林路",
//             "loc":{"x":538,"y":1042},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l09s13":{
//             "id":"l09s13",
//             "name":"漕河泾开发区",
//             "loc":{"x":482,"y":1042},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l09s14":{
//             "id":"l09s14",
//             "name":"合川路",
//             "loc":{"x":423,"y":1042},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l09s15":{
//             "id":"l09s15",
//             "name":"星中路",
//             "loc":{"x":365,"y":1042},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l09s16":{
//             "id":"l09s16",
//             "name":"七宝",
//             "loc":{"x":310,"y":1042},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l09s17":{
//             "id":"l09s17",
//             "name":"中春路",
//             "loc":{"x":250,"y":1042},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l09s18":{
//             "id":"l09s18",
//             "name":"九亭",
//             "loc":{"x":194,"y":1042},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l09s19":{
//             "id":"l09s19",
//             "name":"泗泾",
//             "loc":{"x":136,"y":1042},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l09s20":{
//             "id":"l09s20",
//             "name":"佘山",
//             "loc":{"x":86,"y":1099},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s21":{
//             "id":"l09s21",
//             "name":"洞泾",
//             "loc":{"x":86,"y":1188},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s22":{
//             "id":"l09s22",
//             "name":"松江大学城",
//             "loc":{"x":86,"y":1278},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s23":{
//             "id":"l09s23",
//             "name":"松江新城",
//             "loc":{"x":86,"y":1370},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s24":{
//             "id":"l09s24",
//             "name":"松江体育中心",
//             "loc":{"x":86,"y":1456},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s25":{
//             "id":"l09s25",
//             "name":"醉白池",
//             "loc":{"x":86,"y":1550},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l09s26":{
//             "id":"l09s26",
//             "name":"松江南",
//             "loc":{"x":86,"y":1660},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l10s03":{
//             "id":"l10s03",
//             "name":"虹桥1号航站楼",
//             "loc":{"x":377,"y":877},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l10s04":{
//             "id":"l10s04",
//             "name":"上海动物园",
//             "loc":{"x":414,"y":892},
//             "label":"topleft.topright",
//             "scale":0.8
//         },
//         "l10s05":{
//             "id":"l10s05",
//             "name":"龙溪路",
//             "loc":{"x":460,"y":892},
//             "label":"bottomleft.bottomright",
//             "scale":0.8
//         },
//         "l10s06":{
//             "id":"l10s06",
//             "name":"水城路",
//             "loc":{"x":511,"y":892},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l10s07":{
//             "id":"l10s07",
//             "name":"伊犁路",
//             "loc":{"x":544,"y":908},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l10s08":{
//             "id":"l10s08",
//             "name":"宋园路",
//             "loc":{"x":566,"y":929},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l10s10":{
//             "id":"l10s10",
//             "name":"交通大学",
//             "loc":{"x":651,"y":940},
//             "label":"bottomright.bottomleft",
//             "scale":0.8
//         },
//         "l10s11":{
//             "id":"l10s11",
//             "name":"上海图书馆",
//             "loc":{"x":719,"y":940},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l10s13":{
//             "id":"l10s13",
//             "name":"新天地",
//             "loc":{"x":865,"y":940},
//             "label":"bottomright.bottomleft",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l10s15":{
//             "id":"l10s15",
//             "name":"豫园",
//             "loc":{"x":980,"y":938},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l10s17":{
//             "id":"l10s17",
//             "name":"天潼路",
//             "loc":{"x":980,"y":840},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l10s18":{
//             "id":"l10s18",
//             "name":"四川北路",
//             "loc":{"x":1008,"y":800},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l10s20":{
//             "id":"l10s20",
//             "name":"邮电新村",
//             "loc":{"x":1071,"y":738},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l10s22":{
//             "id":"l10s22",
//             "name":"同济大学",
//             "loc":{"x":1141,"y":669},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l10s23":{
//             "id":"l10s23",
//             "name":"国权路",
//             "loc":{"x":1173,"y":638},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l10s24":{
//             "id":"l10s24",
//             "name":"五角场",
//             "loc":{"x":1204,"y":606},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l10s25":{
//             "id":"l10s25",
//             "name":"江湾体育场",
//             "loc":{"x":1218,"y":573},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l10s26":{
//             "id":"l10s26",
//             "name":"三门路",
//             "loc":{"x":1218,"y":535},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l10s27":{
//             "id":"l10s27",
//             "name":"殷高东路",
//             "loc":{"x":1218,"y":496},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "l10s28":{
//             "id":"l10s28",
//             "name":"新江湾城",
//             "loc":{"x":1218,"y":460},
//             "label":"left.left",
//             "scale":0.8
//         },
//         "b10s25":{
//             "id":"b10s25",
//             "name":"龙柏新村",
//             "loc":{"x":427,"y":914},
//             "label":"bottomleft.bottomright",
//             "scale":0.8
//         },
//         "b10s26":{
//             "id":"b10s26",
//             "name":"紫藤路",
//             "loc":{"x":398,"y":944},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "b10s27":{
//             "id":"b10s27",
//             "name":"航中路",
//             "loc":{"x":350,"y":944},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l11s01":{
//             "id":"l11s01",
//             "name":"迪士尼",
//             "loc":{"x":1268,"y":1442},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l11s02":{
//             "id":"l11s02",
//             "name":"康新公路",
//             "loc":{"x":1196,"y":1442},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l11s03":{
//             "id":"l11s03",
//             "name":"秀沿路",
//             "loc":{"x":1124,"y":1442},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l11s04":{
//             "id":"l11s04",
//             "name":"罗山路",
//             "loc":{"x":1042,"y":1442},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l11s05":{
//             "id":"l11s05",
//             "name":"御桥",
//             "loc":{"x":1000,"y":1442},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l11s06":{
//             "id":"l11s06",
//             "name":"浦三路",
//             "loc":{"x":922,"y":1442},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l11s07":{
//             "id":"l11s07",
//             "name":"三林东",
//             "loc":{"x":880,"y":1442},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l11s08":{
//             "id":"l11s08",
//             "name":"三林",
//             "loc":{"x":825,"y":1384},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l11s10":{
//             "id":"l11s10",
//             "name":"龙耀路",
//             "loc":{"x":695,"y":1185},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l11s11":{
//             "id":"l11s11",
//             "name":"云锦路",
//             "loc":{"x":695,"y":1148},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l11s12":{
//             "id":"l11s12",
//             "name":"龙华路",
//             "loc":{"x":695,"y":1118},
//             "label":"right.right",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l11s13":{
//             "id":"l11s13",
//             "name":"上海游泳馆",
//             "loc":{"x":695,"y":1090},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l11s17":{
//             "id":"l11s17",
//             "name":"隆德路",
//             "loc":{"x":714,"y":779},
//             "label":"bottomright.bottomright",
//             "scale":0.8,
//             "rotate":90
//         },
//         "l11s19":{
//             "id":"l11s19",
//             "name":"枫桥路",
//             "loc":{"x":714,"y":672},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l11s20":{
//             "id":"l11s20",
//             "name":"真如",
//             "loc":{"x":700,"y":638},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s21":{
//             "id":"l11s21",
//             "name":"上海西站",
//             "loc":{"x":673,"y":610},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s22":{
//             "id":"l11s22",
//             "name":"李子园",
//             "loc":{"x":638,"y":575},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s23":{
//             "id":"l11s23",
//             "name":"祁连山路",
//             "loc":{"x":582,"y":550},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s24":{
//             "id":"l11s24",
//             "name":"武威路",
//             "loc":{"x":522,"y":550},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s25":{
//             "id":"l11s25",
//             "name":"桃浦新村",
//             "loc":{"x":477,"y":506},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s26":{
//             "id":"l11s26",
//             "name":"南翔",
//             "loc":{"x":431,"y":461},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s27":{
//             "id":"l11s27",
//             "name":"马陆",
//             "loc":{"x":386,"y":417},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s28":{
//             "id":"l11s28",
//             "name":"嘉定新城",
//             "loc":{"x":320,"y":388},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l11s29":{
//             "id":"l11s29",
//             "name":"白银路",
//             "loc":{"x":320,"y":328},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l11s30":{
//             "id":"l11s30",
//             "name":"嘉定西",
//             "loc":{"x":320,"y":283},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l11s31":{
//             "id":"l11s31",
//             "name":"嘉定北",
//             "loc":{"x":345,"y":231},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "b11s22":{
//             "id":"b11s22",
//             "name":"上海赛车场",
//             "loc":{"x":282,"y":388},
//             "label":"topleft.topleft",
//             "scale":0.8
//         },
//         "b11s23":{
//             "id":"b11s23",
//             "name":"昌吉东路",
//             "loc":{"x":247,"y":415},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "b11s24":{
//             "id":"b11s24",
//             "name":"上海汽车城",
//             "loc":{"x":215,"y":447},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "b11s25":{
//             "id":"b11s25",
//             "name":"安亭",
//             "loc":{"x":161,"y":464},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "b11s26":{
//             "id":"b11s26",
//             "name":"兆丰路",
//             "loc":{"x":111,"y":464},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "b11s27":{
//             "id":"b11s27",
//             "name":"光明路",
//             "loc":{"x":58,"y":464},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "b11s28":{
//             "id":"b11s28",
//             "name":"花桥",
//             "loc":{"x":4,"y":464},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l12s01":{
//             "id":"l12s01",
//             "name":"七莘路",
//             "loc":{"x":192,"y":1125},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s02":{
//             "id":"l12s02",
//             "name":"红莘路",
//             "loc":{"x":256,"y":1125},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s03":{
//             "id":"l12s03",
//             "name":"顾戴路",
//             "loc":{"x":322,"y":1125},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l12s04":{
//             "id":"l12s04",
//             "name":"东兰路",
//             "loc":{"x":390,"y":1125},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s05":{
//             "id":"l12s05",
//             "name":"虹梅路",
//             "loc":{"x":455,"y":1125},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l12s06":{
//             "id":"l12s06",
//             "name":"虹漕路",
//             "loc":{"x":500,"y":1125},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s07":{
//             "id":"l12s07",
//             "name":"桂林公园",
//             "loc":{"x":562,"y":1125},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l12s19":{
//             "id":"l12s19",
//             "name":"国际客运中心",
//             "loc":{"x":1030,"y":840},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s20":{
//             "id":"l12s20",
//             "name":"提篮桥",
//             "loc":{"x":1084,"y":834},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l12s22":{
//             "id":"l12s22",
//             "name":"江浦公园",
//             "loc":{"x":1166,"y":809},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l12s23":{
//             "id":"l12s23",
//             "name":"宁国路",
//             "loc":{"x":1220,"y":809},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s24":{
//             "id":"l12s24",
//             "name":"隆昌路",
//             "loc":{"x":1275,"y":809},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l12s25":{
//             "id":"l12s25",
//             "name":"爱国路",
//             "loc":{"x":1325,"y":809},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s26":{
//             "id":"l12s26",
//             "name":"复兴岛",
//             "loc":{"x":1374,"y":809},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l12s27":{
//             "id":"l12s27",
//             "name":"东陆路",
//             "loc":{"x":1420,"y":809},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s29":{
//             "id":"l12s29",
//             "name":"杨高北路",
//             "loc":{"x":1520,"y":809},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l12s30":{
//             "id":"l12s30",
//             "name":"金京路",
//             "loc":{"x":1598,"y":809},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l12s31":{
//             "id":"l12s31",
//             "name":"申江路",
//             "loc":{"x":1650,"y":809},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l12s32":{
//             "id":"l12s32",
//             "name":"金海路",
//             "loc":{"x":1650,"y":866},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l13s01":{
//             "id":"l13s01",
//             "name":"世博大道",
//             "loc":{"x":890,"y":1123},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l13s02":{
//             "id":"l13s02",
//             "name":"世博博物馆",
//             "loc":{"x":890,"y":1074},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l13s05":{
//             "id":"l13s05",
//             "name":"淮海中路",
//             "loc":{"x":865,"y":912},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l13s07":{
//             "id":"l13s07",
//             "name":"自然博物馆",
//             "loc":{"x":865,"y":828},
//             "label":"bottomleft.bottomleft",
//             "scale":0.8
//         },
//         "l13s09":{
//             "id":"l13s09",
//             "name":"江宁路",
//             "loc":{"x":812,"y":779},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l13s11":{
//             "id":"l13s11",
//             "name":"武宁路",
//             "loc":{"x":738,"y":779},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l13s14":{
//             "id":"l13s14",
//             "name":"大渡河路",
//             "loc":{"x":598,"y":730},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l13s15":{
//             "id":"l13s15",
//             "name":"真北路",
//             "loc":{"x":550,"y":730},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l13s16":{
//             "id":"l13s16",
//             "name":"祁连山南路",
//             "loc":{"x":502,"y":730},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l13s17":{
//             "id":"l13s17",
//             "name":"丰庄",
//             "loc":{"x":454,"y":730},
//             "label":"topleft.topright",
//             "scale":0.8
//         },
//         "l13s18":{
//             "id":"l13s18",
//             "name":"金沙江西路",
//             "loc":{"x":406,"y":730},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l13s19":{
//             "id":"l13s19",
//             "name":"金运路",
//             "loc":{"x":358,"y":730},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l16s02":{
//             "id":"l16s02",
//             "name":"华夏中路",
//             "loc":{"x":1161,"y":1236},
//             "label":"bottomright.bottomright",
//             "scale":0.8
//         },
//         "l16s04":{
//             "id":"l16s04",
//             "name":"周浦东",
//             "loc":{"x":1042,"y":1488},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l16s05":{
//             "id":"l16s05",
//             "name":"鹤沙航城",
//             "loc":{"x":1042,"y":1534},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l16s06":{
//             "id":"l16s06",
//             "name":"航头东",
//             "loc":{"x":1042,"y":1580},
//             "label":"right.right",
//             "scale":0.8
//         },
//         "l16s07":{
//             "id":"l16s07",
//             "name":"新场",
//             "loc":{"x":1123,"y":1598},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l16s08":{
//             "id":"l16s08",
//             "name":"野生动物园",
//             "loc":{"x":1186,"y":1598},
//             "label":"bottom.bottom",
//             "scale":0.8
//         },
//         "l16s09":{
//             "id":"l16s09",
//             "name":"惠南",
//             "loc":{"x":1250,"y":1598},
//             "label":"top.top",
//             "scale":0.8
//         },
//         "l16s10":{
//             "id":"l16s10",
//             "name":"惠南东",
//             "loc":{"x":1296,"y":1618},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l16s11":{
//             "id":"l16s11",
//             "name":"书院",
//             "loc":{"x":1316,"y":1671},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l16s12":{
//             "id":"l16s12",
//             "name":"临港大道",
//             "loc":{"x":1348,"y":1707},
//             "label":"topright.topright",
//             "scale":0.8
//         },
//         "l16s13":{
//             "id":"l16s13",
//             "name":"滴水湖",
//             "loc":{"x":1382,"y":1742},
//             "label":"topright.topright",
//             "scale":0.8
//         }
//     },
//     "lines":{
//         "l01":{
//             "id":"l01",
//             "name":"1号线",
//             "color":"#e52035",
//             "num":"1",
//             "lab":"号线",
//             "loc1":{"x":935,"y":70},
//             "loc2":{"x":380,"y":1284},
//             "stations":{
//                 "l01s01":"l01s01",
//                 "l01s02":"l01s02",
//                 "l01s03":"l01s03",
//                 "l01s04":"l01s04",
//                 "l01s05":"l01s05",
//                 "l01s06":"l01s06",
//                 "l01s07":"l01s07",
//                 "l01s08":"l01s08",
//                 "l01s09":"l01s09",
//                 "l01s10":"l01s10",
//                 "l01s11":"l01s11tt",
//                 "l01s12":"l01s12",
//                 "l01s13":"l01s13LL",
//                 "l01s14":"l01s14",
//                 "l01s15":"l01s15RR",
//                 "l01s16":"l01s16",
//                 "l01s17":"l01s17",
//                 "l01s18":"l01s18",
//                 "l01s19":"l01s19",
//                 "l01s20":"l01s20",
//                 "l01s21":"l01s21",
//                 "l01s22":"l01s22",
//                 "l01s23":"l01s23",
//                 "l01s24":"l01s24",
//                 "l01s25":"l01s25",
//                 "l01s26":"l01s26",
//                 "l01s27":"l01s27",
//                 "l01s28":"l01s28"
//             }
//         },
//         "l02":{
//             "id":"l02",
//             "name":"2号线",
//             "color":"#8dc600",
//             "num":"2",
//             "lab":"号线",
//             "loc1":{"x":170,"y":850},
//             "loc2":{"x":1370,"y":1080},
//             "stations":{
//                 "l02s01":"l02s01",
//                 "l02s02":"l02s02",
//                 "l02s03":"l02s03",
//                 "l02s04":"l02s04",
//                 "l02s05":"l02s05",
//                 "l02s06":"l02s06",
//                 "l02s07":"l02s07",
//                 "l02s08":"l02s08",
//                 "l02s09":"l02s09",
//                 "l02s10":"l02s10",
//                 "l02s11":"l01s13",
//                 "l02s12":"l02s12",
//                 "l02s13":"l02s13",
//                 "l02s14":"l02s14",
//                 "l02s15":"l02s15",
//                 "l02s16":"l02s16",
//                 "l02s17":"l02s17",
//                 "l02s18":"l02s18",
//                 "l02s19":"l02s19",
//                 "l02s20":"l02s20tt",
//                 "l02s21":"l02s21tt",
//                 "l02s22":"l02s22"
//             }
//         },
//         "e02":{
//             "id":"e02",
//             "name":"2号东延线",
//             "color":"#8dc600",
//             "num":"2",
//             "lab":"号东延线",
//             "loc1":{"x":1450,"y":1080},
//             "loc2":{"x":1710,"y":1180},
//             "stations":{
//                 "e02s01":"e02s01",
//                 "e02s02":"e02s02",
//                 "e02s03":"e02s03",
//                 "e02s04":"e02s04",
//                 "e02s05":"e02s05",
//                 "e02s06":"e02s06",
//                 "e02s07":"e02s07",
//                 "e02s08":"e02s08",
//                 "e02s09":"l02s01"
//             }
//         },
//         "l03":{
//             "id":"l03",
//             "name":"3号线",
//             "color":"#ffd800",
//             "num":"3",
//             "lab":"号线",
//             "loc1":{"x":1120,"y":76},
//             "loc2":{"x":604,"y":1210},
//             "stations":{
//                 "l03s01":"l03s01",
//                 "l03s02":"l03s02",
//                 "l03s03":"l03s03",
//                 "l03s04":"l03s04",
//                 "l03s05":"l03s05",
//                 "l03s06":"l03s06",
//                 "l03s07":"l03s07",
//                 "l03s08":"l03s08",
//                 "l03s09":"l03s09",
//                 "l03s10":"l03s10",
//                 "l03s11":"l03s11",
//                 "l03s12":"l03s12",
//                 "l03s13":"l03s13",
//                 "l03s14":"l03s14",
//                 "l03s15":"l03s15",
//                 "l03s16":"l03s16tt",
//                 "l03s17":"l01s16tr",
//                 "l03s18":"l03s18tt",
//                 "l03s19":"l03s19tt",
//                 "l03s20":"l03s20tt",
//                 "l03s21":"l03s21tl",
//                 "l03s22":"l02s15ll",
//                 "l03s23":"l03s23ll",
//                 "l03s24":"l03s24ll",
//                 "l03s25":"l03s25bl",
//                 "l03s26":"l03s26",
//                 "l03s27":"l03s27",
//                 "l03s28":"l03s28",
//                 "l03s29":"l01s05"
//             }
//         },
//         "l04":{
//             "id":"l04",
//             "name":"4号线",
//             "color":"#4d2991",
//             "num":"4",
//             "lab":"号线",
//             "loc1":{"x":640,"y":800},
//             "loc2":{"x":1050,"y":1040},
//             "stations":{
//                 "l04s01":"l03s25tr",
//                 "l04s02":"l01s07",
//                 "l04s03":"l04s03",
//                 "l04s04":"l04s04",
//                 "l04s05":"l04s05",
//                 "l04s06":"l04s06",
//                 "l04s07":"l04s07",
//                 "l04s08":"l04s08",
//                 "l04s09":"l04s09",
//                 "l04s10":"l04s10br",
//                 "l04s11":"l04s11",
//                 "l04s12":"l02s07TR",
//                 "l04s13":"l04s13",
//                 "l04s14":"l04s14",
//                 "l04s15":"l04s15",
//                 "l04s16":"l04s16",
//                 "l04s17":"l04s17",
//                 "l04s18":"l03s16bb",
//                 "l04s19":"l01s16bl",
//                 "l04s20":"l03s18bb",
//                 "l04s21":"l03s19bb",
//                 "l04s22":"l03s20bb",
//                 "l04s23":"l03s21br",
//                 "l04s24":"l02s15rr",
//                 "l04s25":"l03s23rr",
//                 "l04s26":"l03s24rr",
//                 "l04s27":"l03s25tr"
//             }
//         },
//         "l05":{
//             "id":"l05",
//             "name":"5号线",
//             "color":"#8d54a7",
//             "num":"5",
//             "lab":"号线",
//             "loc1":{"x":220,"y":1650},
//             "loc2":{"x":320,"y":1350},
//             "stations":{
//                 "l05s01":"l01s01",
//                 "l05s02":"l05s02",
//                 "l05s03":"l05s03",
//                 "l05s04":"l05s04",
//                 "l05s05":"l05s05",
//                 "l05s06":"l05s06",
//                 "l05s07":"l05s07",
//                 "l05s08":"l05s08",
//                 "l05s09":"l05s09",
//                 "l05s10":"l05s10",
//                 "l05s11":"l05s11"
//             }
//         },
//         "l06":{
//             "id":"l06",
//             "name":"6号线",
//             "color":"#d21874",
//             "num":"6",
//             "lab":"号线",
//             "loc1":{"x":1456,"y":432},
//             "loc2":{"x":866,"y":1300},
//             "stations":{
//                 "l06s01":"l06s01",
//                 "l06s02":"l06s02",
//                 "l06s03":"l06s03",
//                 "l06s04":"l06s04",
//                 "l06s05":"l06s05",
//                 "l06s06":"l06s06",
//                 "l06s07":"l06s07",
//                 "l06s08":"l06s08",
//                 "l06s09":"l06s09",
//                 "l06s10":"l06s10",
//                 "l06s11":"l06s11",
//                 "l06s12":"l06s12",
//                 "l06s13":"l06s13",
//                 "l06s14":"l06s14",
//                 "l06s15":"l06s15",
//                 "l06s16":"l06s16",
//                 "l06s17":"l02s07",
//                 "l06s18":"l06s18",
//                 "l06s19":"l04s10tl",
//                 "l06s20":"l06s20",
//                 "l06s21":"l06s21",
//                 "l06s22":"l06s22",
//                 "l06s23":"l06s23",
//                 "l06s24":"l06s24",
//                 "l06s25":"l06s25",
//                 "l06s26":"l06s26",
//                 "l06s27":"l06s27",
//                 "l06s28":"l06s28"
//             }
//         },
//         "l07":{
//             "id":"l07",
//             "name":"7号线",
//             "color":"#ef7200",
//             "num":"7",
//             "lab":"号线",
//             "loc1":{"x":1284,"y":1069},
//             "loc2":{"x":738,"y":55},
//             "stations":{
//                 "l07s01":"l07s01",
//                 "l07s02":"l07s02",
//                 "l07s03":"l07s03",
//                 "l07s04":"l07s04",
//                 "l07s05":"l07s05",
//                 "l07s06":"l07s06",
//                 "l07s07":"l07s07",
//                 "l07s08":"l07s08",
//                 "l07s09":"l07s09",
//                 "l07s10":"l07s10",
//                 "l07s11":"l07s11",
//                 "l07s12":"l07s12",
//                 "l07s13":"l07s13",
//                 "l07s14":"l07s14",
//                 "l07s15":"l07s15",
//                 "l07s16":"l03s19",
//                 "l07s17":"l07s17",
//                 "l07s18":"l07s18",
//                 "l07s19":"l02s13",
//                 "l07s20":"l01s10",
//                 "l07s21":"l07s21",
//                 "l07s22":"l04s04",
//                 "l07s23":"l07s23",
//                 "l07s24":"l07s24",
//                 "l07s25":"l07s25",
//                 "l07s26":"l07s26",
//                 "l07s27":"l07s27",
//                 "l07s28":"l06s22",
//                 "l07s29":"l07s29",
//                 "l07s30":"l07s30",
//                 "l07s31":"l07s31",
//                 "l07s32":"l02s04",
//                 "l07s33":"l07s33"
//             }
//         },
//         "l08":{
//             "id":"l08",
//             "name":"8号线",
//             "color":"#219ce0",
//             "num":"8",
//             "lab":"号线",
//             "loc1":{"x":1290,"y":474},
//             "loc2":{"x":857,"y":1712},
//             "stations":{
//                 "l08s01":"l08s01",
//                 "l08s02":"l08s02",
//                 "l08s03":"l08s03",
//                 "l08s04":"l08s04",
//                 "l08s05":"l08s05",
//                 "l08s06":"l08s06",
//                 "l08s07":"l06s28",
//                 "l08s08":"l08s08",
//                 "l08s09":"l08s09",
//                 "l08s10":"l07s26",
//                 "l08s11":"l08s11",
//                 "l08s12":"l04s07",
//                 "l08s13":"l08s13",
//                 "l08s14":"l08s14",
//                 "l08s15":"l08s15",
//                 "l08s16":"l01s13",
//                 "l08s17":"l08s17",
//                 "l08s18":"l08s18",
//                 "l08s19":"l08s19",
//                 "l08s20":"l03s14",
//                 "l08s21":"l08s21",
//                 "l08s22":"l08s22",
//                 "l08s23":"l08s23",
//                 "l08s24":"l08s24",
//                 "l08s25":"l08s25",
//                 "l08s26":"l08s26",
//                 "l08s27":"l08s27",
//                 "l08s28":"l08s28",
//                 "l08s29":"l08s29",
//                 "l08s30":"l08s30"
//             }
//         },
//         "l09":{
//             "id":"l09",
//             "name":"9号线",
//             "color":"#7fc7f2",
//             "num":"9",
//             "lab":"号线",
//             "loc1":{"x":86,"y":1700},
//             "loc2":{"x":1294,"y":997},
//             "stations":{
//                 "l09s01":"l09s01",
//                 "l09s02":"l02s07BL",
//                 "l09s03":"l09s03",
//                 "l09s04":"l09s04",
//                 "l09s05":"l08s13",
//                 "l09s06":"l09s06",
//                 "l09s07":"l09s07",
//                 "l09s08":"l09s08",
//                 "l09s09":"l07s21",
//                 "l09s10":"l01s08",
//                 "l09s11":"l03s25",
//                 "l09s12":"l09s12",
//                 "l09s13":"l09s13",
//                 "l09s14":"l09s14",
//                 "l09s15":"l09s15",
//                 "l09s16":"l09s16",
//                 "l09s17":"l09s17",
//                 "l09s18":"l09s18",
//                 "l09s19":"l09s19",
//                 "l09s20":"l09s20",
//                 "l09s21":"l09s21",
//                 "l09s22":"l09s22",
//                 "l09s23":"l09s23",
//                 "l09s24":"l09s24",
//                 "l09s25":"l09s25",
//                 "l09s26":"l09s26"
//             }
//         },
//         "l10":{
//             "id":"l10",
//             "name":"10号线",
//             "color":"#bba7d6",
//             "num":"10",
//             "lab":"号线",
//             "loc1":{"x":1222,"y":433},
//             "loc2":{"x":285,"y":910},
//             "stations":{
//                 "l10s01":"l02s21bb",
//                 "l10s02":"l02s20bb",
//                 "l10s03":"l10s03",
//                 "l10s04":"l10s04",
//                 "l10s05":"l10s05",
//                 "l10s06":"l10s06",
//                 "l10s07":"l10s07",
//                 "l10s08":"l10s08",
//                 "l10s09":"l03s24",
//                 "l10s10":"l10s10",
//                 "l10s11":"l10s11",
//                 "l10s12":"l01s11bb",
//                 "l10s13":"l10s13",
//                 "l10s14":"l08s14",
//                 "l10s15":"l10s15",
//                 "l10s16":"l02s10",
//                 "l10s17":"l10s17",
//                 "l10s18":"l10s18",
//                 "l10s19":"l04s17",
//                 "l10s20":"l10s20",
//                 "l10s21":"l08s22",
//                 "l10s22":"l10s22",
//                 "l10s23":"l10s23",
//                 "l10s24":"l10s24",
//                 "l10s25":"l10s25",
//                 "l10s26":"l10s26",
//                 "l10s27":"l10s27",
//                 "l10s28":"l10s28"
//             }
//         },
//         "b10":{
//             "id":"b10",
//             "name":"10号支线",
//             "color":"#bba7d6",
//             "num":"10",
//             "lab":"号支线",
//             "loc1":{"x":320,"y":970},
//             "loc2":{"x":1255,"y":380},
//             "stations":{
//                 "b10s01":"l10s28",
//                 "b10s02":"l10s27",
//                 "b10s03":"l10s26",
//                 "b10s04":"l10s25",
//                 "b10s05":"l10s24",
//                 "b10s06":"l10s23",
//                 "b10s07":"l10s22",
//                 "b10s08":"l08s22",
//                 "b10s09":"l10s20",
//                 "b10s10":"l04s17",
//                 "b10s11":"l10s18",
//                 "b10s12":"l10s17",
//                 "b10s13":"l02s10",
//                 "b10s14":"l10s15",
//                 "b10s15":"l08s14",
//                 "b10s16":"l10s13",
//                 "b10s17":"l01s11bb",
//                 "b10s18":"l10s11",
//                 "b10s19":"l10s10",
//                 "b10s20":"l03s24",
//                 "b10s21":"l10s08",
//                 "b10s22":"l10s07",
//                 "b10s23":"l10s06",
//                 "b10s24":"l10s05",
//                 "b10s25":"b10s25",
//                 "b10s26":"b10s26",
//                 "b10s27":"b10s27"
//             }
//         },
//         "l11":{
//             "id":"l11",
//             "name":"11号线",
//             "color":"#7b2031",
//             "num":"11",
//             "lab":"号线",
//             "loc1":{"x":355,"y":192},
//             "loc2":{"x":1317,"y":1444},
//             "stations":{
//                 "l11s01":"l11s01",
//                 "l11s02":"l11s02",
//                 "l11s03":"l11s03",
//                 "l11s04":"l11s04",
//                 "l11s05":"l11s05",
//                 "l11s06":"l11s06",
//                 "l11s07":"l11s07",
//                 "l11s08":"l11s08",
//                 "l11s09":"l06s28",
//                 "l11s10":"l11s10",
//                 "l11s11":"l11s11",
//                 "l11s12":"l11s12",
//                 "l11s13":"l11s13",
//                 "l11s14":"l01s08",
//                 "l11s15":"l10s10",
//                 "l11s16":"l02s14",
//                 "l11s17":"l11s17",
//                 "l11s18":"l03s20",
//                 "l11s19":"l11s19",
//                 "l11s20":"l11s20",
//                 "l11s21":"l11s21",
//                 "l11s22":"l11s22",
//                 "l11s23":"l11s23",
//                 "l11s24":"l11s24",
//                 "l11s25":"l11s25",
//                 "l11s26":"l11s26",
//                 "l11s27":"l11s27",
//                 "l11s28":"l11s28",
//                 "l11s29":"l11s29",
//                 "l11s30":"l11s30",
//                 "l11s31":"l11s31"
//             }
//         },
//         "b11":{
//             "id":"b11",
//             "name":"11号支线",
//             "color":"#7b2031",
//             "num":"11",
//             "lab":"号支线",
//             "loc1":{"x":10,"y":430},
//             "loc2":{"x":878,"y":1392},
//             "stations":{
//                 "b11s01":"l11s08",
//                 "b11s02":"l06s28",
//                 "b11s03":"l11s10",
//                 "b11s04":"l11s11",
//                 "b11s05":"l11s12",
//                 "b11s06":"l11s13",
//                 "b11s07":"l01s08",
//                 "b11s08":"l10s10",
//                 "b11s09":"l02s14",
//                 "b11s10":"l11s17",
//                 "b11s11":"l03s20",
//                 "b11s12":"l11s19",
//                 "b11s13":"l11s20",
//                 "b11s14":"l11s21",
//                 "b11s15":"l11s22",
//                 "b11s16":"l11s23",
//                 "b11s17":"l11s24",
//                 "b11s18":"l11s25",
//                 "b11s19":"l11s26",
//                 "b11s20":"l11s27",
//                 "b11s21":"l11s28",
//                 "b11s22":"b11s22",
//                 "b11s23":"b11s23",
//                 "b11s24":"b11s24",
//                 "b11s25":"b11s25",
//                 "b11s26":"b11s26",
//                 "b11s27":"b11s27",
//                 "b11s28":"b11s28"
//             }
//         },
//         "l12":{
//             "id":"l12",
//             "name":"12号线",
//             "color":"#118840",
//             "num":"12",
//             "lab":"号线",
//             "loc1":{"x":1650,"y":900},
//             "loc2":{"x":190,"y":1160},
//             "stations":{
//                 "l12s01":"l12s01",
//                 "l12s02":"l12s02",
//                 "l12s03":"l12s03",
//                 "l12s04":"l12s04",
//                 "l12s05":"l12s05",
//                 "l12s06":"l12s06",
//                 "l12s07":"l12s07",
//                 "l12s08":"l01s06",
//                 "l12s09":"l03s27",
//                 "l12s10":"l11s12",
//                 "l12s11":"l07s23",
//                 "l12s12":"l04s05",
//                 "l12s13":"l09s08",
//                 "l12s14":"l01s11",
//                 "l12s15":"l02s12LL",
//                 "l12s16":"l01s15LL",
//                 "l12s17":"l08s17",
//                 "l12s18":"l10s17",
//                 "l12s19":"l12s19",
//                 "l12s20":"l12s20",
//                 "l12s21":"l04s15",
//                 "l12s22":"l12s22",
//                 "l12s23":"l12s23",
//                 "l12s24":"l12s24",
//                 "l12s25":"l12s25",
//                 "l12s26":"l12s26",
//                 "l12s27":"l12s27",
//                 "l12s28":"l06s08",
//                 "l12s29":"l12s29",
//                 "l12s30":"l12s30",
//                 "l12s31":"l12s31",
//                 "l12s32":"l12s32"
//             }
//         },
//         "l13":{
//             "id":"l13",
//             "name":"13号线",
//             "color":"#ff88aa",
//             "num":"13",
//             "lab":"号线",
//             "loc1":{"x":852,"y":1135},
//             "loc2":{"x":274,"y":721},
//             "stations":{
//                 "l13s01":"l13s01",
//                 "l13s02":"l13s02",
//                 "l13s03":"l09s06",
//                 "l13s04":"l10s13BB",
//                 "l13s05":"l13s05",
//                 "l13s06":"l02s12",
//                 "l13s07":"l13s07",
//                 "l13s08":"l01s15",
//                 "l13s09":"l13s09",
//                 "l13s10":"l07s17",
//                 "l13s11":"l13s11",
//                 "l13s12":"l11s17",
//                 "l13s13":"l03s21",
//                 "l13s14":"l13s14",
//                 "l13s15":"l13s15",
//                 "l13s16":"l13s16",
//                 "l13s17":"l13s17",
//                 "l13s18":"l13s18",
//                 "l13s19":"l13s19"
//             }
//         },
//         "l16":{
//             "id":"l16",
//             "name":"16号线",
//             "color":"#77ccaa",
//             "num":"16",
//             "lab":"号线",
//             "loc1":{"x":1230,"y":1220},
//             "loc2":{"x":1295,"y":1730},
//             "stations":{
//                 "l16s01":"l02s04",
//                 "l16s02":"l16s02",
//                 "l16s03":"l11s04",
//                 "l16s04":"l16s04",
//                 "l16s05":"l16s05",
//                 "l16s06":"l16s06",
//                 "l16s07":"l16s07",
//                 "l16s08":"l16s08",
//                 "l16s09":"l16s09",
//                 "l16s10":"l16s10",
//                 "l16s11":"l16s11",
//                 "l16s12":"l16s12",
//                 "l16s13":"l16s13"
//             }
//         },
//         "m00":{
//             "id":"m00",
//             "name":"磁悬浮线",
//             "color":"#888800",
//             "num":"M",
//             "lab":"磁悬浮",
//             "loc1":{"x":1310,"y":1180},
//             "loc2":{"x":1720,"y":1330},
//             "stations":{
//                 "m00s01":"e02s01LL",
//                 "m00p01":{"x":1562, "y":1248},
//                 "m00s02":"l02s04BB"
//             },
//             "turns":{
//                 "m00s01s02":{"x":1562, "y":1248}
//             }
//         }
//     },
//     "sundrys":{
//         "trainstationshanghai":{
//             "sign":"railway",
//             "station":"l01s16",
//             "name":"上海火车站",
//             "offset":{"x":0, "y":-1}
//         },
//         "trainstationshanghaixi":{
//             "sign":"railway",
//             "station":"l11s21",
//             "name":"上海西站",
//             "offset":{"x":-0.6, "y":0.6}
//         },
//         "trainstationhongqiao":{
//             "sign":"railway",
//             "station":"l02s21",
//             "name":"虹桥火车站",
//             "offset":{"x":0, "y":-1}
//         },
//         "trainstationshanghainan":{
//             "sign":"railway",
//             "station":"l01s05",
//             "name":"上海南站",
//             "offset":{"x":-1, "y":0}
//         },
//         "trainstationzuibaichi":{
//             "sign":"railway",
//             "station":"l09s25",
//             "name":"醉白池站",
//             "offset":{"x":-1, "y":0}
//         },
//         "trainstationsongjiangnan":{
//             "sign":"railway",
//             "station":"l09s26",
//             "name":"松江南站",
//             "offset":{"x":-1, "y":0}
//         },
//         "airporthongqiao":{
//             "sign":"airport",
//             "station":"l02s20",
//             "name":"虹桥国际机场",
//             "offset":{"x":0, "y":-1}
//         },
//         "airportpudong":{
//             "sign":"airport",
//             "station":"e02s01",
//             "name":"浦东国际机场",
//             "offset":{"x":1, "y":0}
//         }
//     }
// };
define("shape", ["require", "exports", "draw"], function (require, exports, draw_1) {
    "use strict";
    var Shape = (function () {
        function Shape(shapeParams) {
            this.canvas = draw_1.Draw.canvas;
            this.location = shapeParams.location || { x: 0, y: 0 };
            this.color = shapeParams.color || 'tansparent';
        }
        return Shape;
    }());
    exports.Shape = Shape;
    var Round = (function (_super) {
        __extends(Round, _super);
        function Round(roundParams) {
            var _this = _super.call(this, roundParams) || this;
            _this.radius = roundParams.radius || 5;
            _this.borberColor = roundParams.borberColor || "#000";
            _this.borderWidth = roundParams.borderWidth || 1;
            _this.element = _this.canvas.circle(_this.location.x, _this.location.y, 5);
            _this.update();
            return _this;
        }
        Round.prototype.update = function () {
            this.element.attr({
                x: this.location.x,
                y: this.location.y,
                fill: this.color,
                stroke: this.borberColor,
                'stroke-width': this.borderWidth
            });
        };
        return Round;
    }(Shape));
    exports.Round = Round;
    var Text = (function (_super) {
        __extends(Text, _super);
        function Text(textParams) {
            var _this = _super.call(this, textParams) || this;
            _this.text = textParams.text || "";
            _this.size = textParams.size || 14;
            _this.element = _this.canvas.text(_this.location.x, _this.location.y, _this.text);
            _this.element.attr({
                'font-size': _this.size,
                'fill': _this.color
            });
            return _this;
        }
        return Text;
    }(Shape));
    exports.Text = Text;
    var Path = (function (_super) {
        __extends(Path, _super);
        function Path(pathParams) {
            var _this = _super.call(this, pathParams) || this;
            _this.width = pathParams.width || 1;
            _this.element = _this.canvas.path(_this.createPathString(pathParams.points));
            _this.element.attr({
                'stroke-linejoin': 'round',
                'stroke-width': _this.width,
                'stroke': _this.color
            });
            return _this;
        }
        Path.prototype.createPathString = function (points) {
            var pathArray = [];
            pathArray.push('M');
            for (var i = 0; i < points.length; i++) {
                var point = points[i];
                pathArray.push(point.x + "," + point.y);
                if (i < points.length - 1) {
                    pathArray.push('L');
                }
            }
            return pathArray.join('');
        };
        return Path;
    }(Shape));
    exports.Path = Path;
});
define("draw", ["require", "exports"], function (require, exports) {
    "use strict";
    var Draw = (function () {
        function Draw() {
        }
        return Draw;
    }());
    exports.Draw = Draw;
});
define("lineLabel", ["require", "exports", "shape"], function (require, exports, shape_1) {
    "use strict";
    var LineLabel = (function (_super) {
        __extends(LineLabel, _super);
        function LineLabel(lineInfoData) {
            var _this = _super.call(this, {
                text: lineInfoData.num,
                size: 30,
                color: lineInfoData.color
            }) || this;
            _this.label = new shape_1.Text({
                text: lineInfoData.lab,
                size: 20
            });
            return _this;
        }
        LineLabel.prototype.updatePosition = function (location) {
            this.element.attr(location);
            var numBox = this.element.getBBox();
            var labelBox = this.label.element.getBBox();
            this.label.element.attr({
                x: numBox.x2 + labelBox.width / 2 + 5,
                y: numBox.cy
            });
        };
        LineLabel.prototype.toFront = function () {
            this.element.toFront();
            this.label.element.toFront();
        };
        return LineLabel;
    }(shape_1.Text));
    exports.LineLabel = LineLabel;
});
define("line", ["require", "exports", "shape", "lineLabel"], function (require, exports, shape_2, lineLabel_1) {
    "use strict";
    // var testLength = 6;
    // var Length = 4;
    var stationNameLength = 6;
    var linkWidth = 8;
    var getStationLoaction = function (stationName, stationsInfoData) {
        return stationsInfoData[stationName].loc;
    };
    var zoom = 1.2;
    var azimuth = {
        bb: { x: 0, y: linkWidth * zoom / 2 },
        tt: { x: 0, y: -linkWidth * zoom / 2 },
        rr: { x: linkWidth * zoom / 2, y: 0 },
        ll: { x: -linkWidth / 2, y: 0 },
        br: { x: linkWidth * zoom * 0.7 / 2, y: linkWidth * zoom * 0.7 / 2 },
        bl: { x: -linkWidth * zoom * 0.7 / 2, y: linkWidth * zoom * 0.7 / 2 },
        tr: { x: linkWidth * zoom * 0.7 / 2, y: -linkWidth * zoom * 0.7 / 2 },
        tl: { x: -linkWidth * zoom * 0.7 / 2, y: -linkWidth * zoom * 0.7 / 2 },
        BB: { x: 0, y: linkWidth * zoom },
        TT: { x: 0, y: -linkWidth * zoom },
        RR: { x: linkWidth * zoom, y: 0 },
        LL: { x: -linkWidth, y: 0 },
        BR: { x: linkWidth * zoom * 0.7, y: linkWidth * zoom * 0.7 },
        BL: { x: -linkWidth * zoom * 0.7, y: linkWidth * zoom * 0.7 },
        TR: { x: linkWidth * zoom * 0.7, y: -linkWidth * zoom * 0.7 },
        TL: { x: -linkWidth * zoom * 0.7, y: -linkWidth * zoom * 0.7 }
    };
    var converStationsToPoints = function (stations, stationsInfoData) {
        var pathPoints = [];
        for (var stationName in stations) {
            var pathPoint = void 0;
            var maybeString = stations[stationName];
            if (typeof maybeString == 'string') {
                var stationMMName = maybeString;
                var offset = { x: 0, y: 0 };
                pathPoint = getStationLoaction(stationMMName.slice(0, stationNameLength), stationsInfoData);
                var offsetKey = stationMMName.slice(stationNameLength, stationNameLength + 2);
                if (offsetKey) {
                    offset = azimuth[offsetKey];
                }
                pathPoint.x += offset.x;
                pathPoint.y += offset.y;
            }
            else {
                pathPoint = maybeString;
            }
            pathPoints.push(pathPoint);
        }
        return pathPoints;
    };
    var Line = (function (_super) {
        __extends(Line, _super);
        function Line(lineInfoData, stationsInfoData) {
            var _this = _super.call(this, {
                points: converStationsToPoints(lineInfoData.stations, stationsInfoData),
                color: lineInfoData.color,
                width: linkWidth
            }) || this;
            _this.stationsName = [];
            _this.lineLabel1 = new lineLabel_1.LineLabel(lineInfoData);
            _this.lineLabel2 = new lineLabel_1.LineLabel(lineInfoData);
            _this.lineLabel1.updatePosition(lineInfoData.loc1);
            _this.lineLabel2.updatePosition(lineInfoData.loc2);
            _this.id = lineInfoData.id || (new Date()).toTimeString();
            _this.name = lineInfoData.name || '';
            _this.element.id = _this.id;
            for (var stationName in lineInfoData.stations) {
                var mayString = lineInfoData.stations[stationName];
                if (typeof mayString == 'string') {
                    var realStationName = mayString.slice(0, stationNameLength);
                    _this.stationsName.push(realStationName);
                }
            }
            return _this;
        }
        Line.prototype.toFront = function () {
            this.element.toFront();
            this.lineLabel1.toFront();
            this.lineLabel2.toFront();
        };
        return Line;
    }(shape_2.Path));
    exports.Line = Line;
});
define("selectTips", ["require", "exports"], function (require, exports) {
    "use strict";
    var template = "\n<button value=\"start\">\u8BBE\u4E3A\u8D77\u70B9</button>\n<button value=\"end\">\u8BBE\u4E3A\u7EC8\u70B9</button>\n";
    var SelectTips = (function () {
        function SelectTips() {
            this.createDom();
        }
        SelectTips.prototype.showTips = function (position, handle) {
            this.selectHandle = handle;
            this.element.style.display = 'block';
            this.element.style.left = position.x - this.element.clientWidth / 2 + 3 + 'px';
            this.element.style.top = position.y - this.element.clientHeight - 12 + 'px';
        };
        SelectTips.prototype.hideTips = function () {
            this.element.style.display = 'none';
        };
        SelectTips.prototype.createDom = function () {
            var self = this;
            this.element = document.createElement('section');
            this.element.classList.add('select-tips');
            this.element.innerHTML = template;
            this.element.addEventListener('click', function (e) {
                self.didSelect(e.target.getAttribute('value'));
            });
            document.body.appendChild(this.element);
        };
        SelectTips.prototype.didSelect = function (type) {
            this.selectHandle(type);
        };
        return SelectTips;
    }());
    exports.selectTips = new SelectTips();
});
define("stationMark", ["require", "exports"], function (require, exports) {
    "use strict";
    var StationMark = (function () {
        function StationMark() {
            // 5 * 8
            this.startMark = new Image();
            this.endMark = new Image();
            this.startMark.src = './img/icon_start_point.png';
            this.endMark.src = './img/icon_end_point.png';
            this.startMark.classList.add('mark');
            this.endMark.classList.add('mark');
            document.body.appendChild(this.startMark);
            document.body.appendChild(this.endMark);
        }
        StationMark.prototype.show = function (isStart, point) {
            var shift = {
                x: -25 / 2,
                y: -40
            };
            if (isStart) {
                this.startMark.style.display = 'block';
                this.startMark.style.left = point.x + shift.x + 'px';
                this.startMark.style.top = point.y + shift.y + 'px';
            }
            else {
                this.endMark.style.display = 'block';
                this.endMark.style.left = point.x + shift.x + 'px';
                this.endMark.style.top = point.y + shift.y + 'px';
            }
        };
        StationMark.prototype.hide = function () {
            this.startMark.style.display = 'none';
            this.endMark.style.display = 'none';
        };
        return StationMark;
    }());
    exports.stationMark = new StationMark();
});
define("station", ["require", "exports", "shape"], function (require, exports, shape_3) {
    "use strict";
    var transImagePath = './img/icons_trans.png';
    var shareImagePath = './img/icons_share.png';
    var startImagePath = './img/icons_start_point.png';
    var endImagePath = './img/icons_end_point.png';
    var StationType;
    (function (StationType) {
        StationType[StationType["share"] = 0] = "share";
        StationType[StationType["trans"] = 1] = "trans";
    })(StationType = exports.StationType || (exports.StationType = {}));
    var StationLabel = (function (_super) {
        __extends(StationLabel, _super);
        function StationLabel(stationInfo) {
            var _this = _super.call(this, { text: stationInfo.name, size: 12 }) || this;
            _this.locationLabel = stationInfo.label;
            return _this;
        }
        StationLabel.prototype.converLocation = function (parentElement) {
            var textBox = this.element.getBBox();
            var parentBox = parentElement.getBBox();
            var padding = 5;
            var x, y;
            switch (this.locationLabel) {
                case "left.left":
                    x = parentBox.x - textBox.width / 2 - padding;
                    y = parentBox.cy;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "topleft.topleft":
                    x = parentBox.x - textBox.width / 2;
                    y = parentBox.y - textBox.height / 2;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "top.top":
                    x = parentBox.cx;
                    y = parentBox.y - textBox.height / 2 - padding;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "topleft.topright":
                    x = parentBox.x + textBox.width / 2;
                    y = parentBox.y - textBox.height / 2 - padding;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "topright.topright":
                    x = parentBox.x2 + textBox.width / 2;
                    y = parentBox.y - textBox.height / 2;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "right.right":
                    x = parentBox.x2 + textBox.width / 2 + padding;
                    y = parentBox.cy;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "bottomright.bottomright":
                    x = parentBox.x2 + textBox.width / 2;
                    y = parentBox.y2 + textBox.height / 2;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "bottom.bottom":
                    x = parentBox.cx;
                    y = parentBox.y2 + textBox.height / 2 + padding;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "bottomleft.bottomright":
                    x = parentBox.x + textBox.width / 2;
                    y = parentBox.y2 + textBox.height / 2 + padding;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "bottomleft.bottomleft":
                    x = parentBox.x - textBox.width / 2;
                    y = parentBox.y2 + textBox.height / 2 + padding;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                case "bottomright.bottomleft":
                    x = parentBox.x2 - textBox.width / 2;
                    y = parentBox.y2 + textBox.height / 2 + padding;
                    this.element.attr({
                        x: x,
                        y: y
                    });
                    break;
                default:
                    console.log(this.locationLabel);
                    break;
            }
        };
        return StationLabel;
    }(shape_3.Text));
    exports.StationLabel = StationLabel;
    var Station = (function (_super) {
        __extends(Station, _super);
        function Station(stationInfo) {
            var _this = _super.call(this, { radius: 5, location: stationInfo.loc, color: '#fff' }) || this;
            _this.lines = [];
            _this.isTerminal = false;
            _this.relativeStations = [];
            _this.id = stationInfo.id;
            _this.stationLabel = new StationLabel(stationInfo);
            _this.stationLabel.converLocation(_this.element);
            _this.name = stationInfo.name;
            return _this;
        }
        Station.prototype.setStationType = function (type) {
            if (this.stationType == type) {
                return;
            }
            this.stationType = type;
            var currentBox = this.element.getBBox();
            this.element.remove();
            switch (type) {
                case StationType.share:
                    this.element = this.canvas.image(shareImagePath, currentBox.x, currentBox.y, 10, 10);
                    break;
                case StationType.trans:
                    this.element = this.canvas.image(transImagePath, currentBox.x - 4, currentBox.y - 4, 16, 16);
                    break;
                default:
                    break;
            }
            this.element.click(this.handle);
            this.toFront();
        };
        Station.prototype.click = function (handle) {
            this.handle = handle;
            this.element.click(this.handle);
        };
        Station.prototype.toFront = function () {
            this.element.toFront();
            this.stationLabel.element.toFront();
        };
        return Station;
    }(shape_3.Round));
    exports.Station = Station;
});
define("stationManager", ["require", "exports", "selectTips", "stationMark", "station", "station"], function (require, exports, selectTips_1, stationMark_1, station_1, station_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(station_1);
    var StationManager = (function () {
        function StationManager(stationsInfoData) {
            this.stations = {};
            var self = this;
            var _loop_1 = function () {
                var stationInfo = stationsInfoData[stationName];
                var station = new station_2.Station(stationInfo);
                var box = station.element.getBBox();
                station.click(function (e) {
                    selectTips_1.selectTips.showTips({
                        x: box.cx,
                        y: box.cy
                    }, function (type) {
                        selectTips_1.selectTips.hideTips();
                        if (type == 'start') {
                            stationMark_1.stationMark.show(true, {
                                x: box.cx,
                                y: box.cy
                            });
                            self.startStation = station;
                        }
                        else {
                            stationMark_1.stationMark.show(false, {
                                x: box.cx,
                                y: box.cy
                            });
                            self.endStation = station;
                        }
                        self.checkStartAndEnd();
                    });
                });
                this_1.stations[stationName] = station;
            };
            var this_1 = this;
            for (var stationName in stationsInfoData) {
                _loop_1();
            }
        }
        StationManager.prototype.getDataBetweenTowStation = function (startStation, endStation, callback) {
            if (!startStation || !endStation) {
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var info;
                    try {
                        info = JSON.parse(this.response);
                    }
                    catch (e) {
                    }
                    callback(info);
                }
            });
            xhr.open("POST", "http://182.254.154.16:808/api/Goods/Getdatabetweentwostations");
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.send("Cityid=021&originating%20station=" + startStation.requestId + "&terminate%20station=" + endStation.requestId);
        };
        StationManager.prototype.checkStartAndEnd = function () {
            var self = this;
            this.getDataBetweenTowStation(this.startStation, this.endStation, function (result) {
                if (!result) {
                    return;
                }
                var message = self.startStation.name + " \u2014\u2014 " + self.endStation.name + " \n  \u4EF7\u683C:" + result.content.Price + "\u5143";
                if (confirm(message)) {
                    if (window['MainActivity']) {
                        window['MainActivity'].pushTheTicketInfo(JSON.stringify(result));
                    }
                }
            });
        };
        StationManager.prototype.getStation = function (stationName) {
            return this.stations[stationName];
        };
        StationManager.prototype.setTraslateStation = function (stationName) {
            var station = this.stations[stationName];
        };
        StationManager.prototype.toFront = function (stations) {
            var self = this;
            if (Raphael.is(stations, 'array')) {
                stations.forEach(function (stationName) {
                    var station = self.stations[stationName];
                    station.toFront();
                });
            }
        };
        return StationManager;
    }());
    exports.StationManager = StationManager;
});
define("lineManager", ["require", "exports", "line", "stationManager", "draw"], function (require, exports, line_1, stationManager_1, draw_2) {
    "use strict";
    var LineManager = (function () {
        function LineManager(infoData) {
            this.lines = {};
            var self = this;
            for (var lineId in infoData.lines) {
                var lineInfo = infoData.lines[lineId];
                var line = new line_1.Line(lineInfo, infoData.stations);
                line.element.click(function (e) {
                    self.onLineClick(e, this);
                });
                this.lines[lineId] = line;
            }
            this.stationManager = new stationManager_1.StationManager(infoData.stations);
            this.updateInterface();
            this.maskLayer = draw_2.Draw.canvas.rect(0, 0, draw_2.Draw.canvas.width, draw_2.Draw.canvas.height);
            this.maskLayer.attr({
                fill: '#fff',
                opacity: '0.8'
            }).hide();
            this.maskLayer.click(function () {
                self.onMaskClick();
            });
        }
        LineManager.prototype.onLineClick = function (e, targetLine) {
            this.maskLayer.toFront().show();
            var line = this.lines[targetLine.id];
            line.toFront();
            this.stationManager.toFront(line.stationsName);
        };
        LineManager.prototype.onMaskClick = function () {
            this.maskLayer.hide();
        };
        LineManager.prototype.updateInterface = function () {
            var _this = this;
            var _loop_2 = function () {
                var line = this_2.lines[lineId];
                var lineColor = line.color;
                var stations = line.stationsName;
                var length_1 = stations.length;
                var prevStation, nextStation;
                stations.forEach(function (value, index) {
                    var station = _this.stationManager.getStation(value);
                    prevStation = nextStation = null;
                    if (index > 1) {
                        prevStation = stations[index - 1];
                    }
                    if (index < length_1 - 1) {
                        nextStation = stations[index + 1];
                    }
                    if (prevStation && nextStation) {
                        if (station.relativeStations.indexOf(prevStation) == -1) {
                            station.relativeStations.push(prevStation);
                        }
                        if (station.relativeStations.indexOf(nextStation) == -1) {
                            station.relativeStations.push(nextStation);
                        }
                    }
                    else {
                        station.isTerminal = true;
                    }
                    if (station.lines.length > 0) {
                        var isTransStop = (station.id.substr(1, 2) != lineId.substr(1, 2)) ||
                            (station.relativeStations.length == 2 && station.isTerminal) ||
                            station.relativeStations.length > 2;
                        if (isTransStop) {
                            station.setStationType(stationManager_1.StationType.trans);
                        }
                        else {
                            station.setStationType(stationManager_1.StationType.share);
                        }
                    }
                    else {
                        station.borberColor = lineColor;
                        station.lines.push(line.id);
                        station.update();
                    }
                });
            };
            var this_2 = this;
            for (var lineId in this.lines) {
                _loop_2();
            }
        };
        return LineManager;
    }());
    exports.LineManager = LineManager;
});
define("main", ["require", "exports", "draw", "lineManager", "stationMark"], function (require, exports, draw_3, lineManager_1, stationMark_2) {
    "use strict";
    /*
    http://182.254.154.16:808/Goods/GetLineStations
    http://182.254.154.16:808/Goods/Getdatabetweentwostations
    http://182.254.154.16:808/Goods/GetGoodsList
     */
    // window['MainActivity'].pushTheTicketInfo(string);
    // 
    var getMinWidthHeight = function (sourceData) {
        var offset = {
            x: 50,
            y: 50
        };
        var minSize = { width: 0, height: 0 };
        for (var stationId in sourceData.stations) {
            var station = sourceData.stations[stationId];
            station.loc.x += offset.x;
            station.loc.y += offset.y;
            minSize.width = minSize.width > station.loc.x ? minSize.width : station.loc.x;
            minSize.height = minSize.height > station.loc.y ? minSize.height : station.loc.y;
        }
        for (var lineId in sourceData.lines) {
            var line = sourceData.lines[lineId];
            if (line.loc1) {
                line.loc1.x += offset.x;
                line.loc1.y += offset.y;
            }
            if (line.loc2) {
                line.loc2.x += offset.x;
                line.loc2.y += offset.y;
            }
        }
        minSize.width += 2 * offset.x;
        minSize.height += 2 * offset.y;
        return minSize;
    };
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            try {
                var info = JSON.parse(this.response);
                var MinSize = getMinWidthHeight(info.content);
                var canvas = Raphael('container', MinSize.width, MinSize.height);
                draw_3.Draw.canvas = canvas;
                var lineManager = new lineManager_1.LineManager(info.content);
            }
            catch (e) {
            }
        }
    });
    xhr.open("POST", "http://182.254.154.16:808/api/Goods/GetLineStations");
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send("Citycde=021");
    window['CLEAR_MAP_INFO'] = function () {
        stationMark_2.stationMark.hide();
    };
});
