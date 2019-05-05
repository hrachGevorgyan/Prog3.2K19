// function zang(m, n) {
//     var arr = [];
//     for (var y = 0; y < m; y++) {
//         arr[y] = [];
//         for (var x = 0; x < n; x++) {
//             arr[y][x] = Math.round(Math.random() * 5);
//         }
//     }
//     return arr;
// }
// var width = 40;
// var height = 40;
// var matrix = zang(width, height);
// var side = 20;

// var grassArr = [];
// var grassMove = [];
// var gishatich = [];
// var gishatich2 = [];
// var zonee = [];

// /*matrix = [
//     [0, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 5, 0, 0],
//     [1, 1, 0, 0, 0]
// ];*/


// function setup() {
//     frameRate(3);
//     createCanvas(height * side, width * side);
//     background('#acacac');

//     for (var u = 0; u < matrix.length; u++) {
//         for (var e = 0; e < matrix[u].length; e++) {
//             if (matrix[u][e] == 1) {
//                 var gr = new Grass(e, u, 1);
//                 grassArr.push(gr);
//             }
//             if (matrix[u][e] == 2) {
//                 var cell = new GrassEater(e, u, 2);
//                 grassMove.push(cell);
//             }
//             if (matrix[u][e] == 3) {
//                 var gishat = new gesh(e, u, 3);
//                 gishatich.push(gishat);
//             }
//             if (matrix[u][e] == 4) {
//                 var gish2 = new gish(e, u, 4);
//                 gishatich2.push(gish2);
//             }
//             if (matrix[u][e] == 5) {
//                 var zone2 = new zone(e, u, 5);
//                 zonee.push(zone2);
//             }


//         }
//     }
// }

// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             }

//             else if (matrix[y][x] == 2) {
//                 fill("yellow");
//                 rect(x * side, y * side, side, side);
//             }

//             else if (matrix[y][x] == 3) {
//                 fill("red");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("black");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 5) {
//                 fill("#ffffff");
//                 rect(x * side, y * side, side, side);
//             }
//         }
//     }
//     for (var p in grassArr) {
//         grassArr[p].mul();
//     }
//     for (var i in grassMove) {
//         grassMove[i].eat();
//     }
//     for (var z in gishatich) {
//         gishatich[z].eat();
//     }
//     for (var k in gishatich2) {
//         gishatich2[k].eat();
//     }
//     for (var f in zonee) {
//         zonee[f].kiiling();
//     }
// }







///////////////hin
function zang(m, n) {
    var arr = [];
    for (var y = 0; y < m; y++) {
        arr[y] = [];
        for (var x = 0; x < n; x++) {
            arr[y][x] = 0;
        }
    }
    return arr;
}
var width = 40;
var height = 40;
var matrix = zang(width, height);
var side = 20;
// var chap1 = width.concat(height);
// var chap = random(chap1);

var grassArr = [];
var grassArrQanak = 140;
var grassMove = [];
var grassMoveQanak = 35;
var gishatich = [];
var gishatichQanak = 20;
var gishatich2 = [];
var gishatich2Qanak = 10;
var zonee = [];
var zoneeQanak = 10;

while (zoneeQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] == 0) {
        zoneeQanak--;
        matrix[y][x] = 5;
    }

}
while (gishatich2Qanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] == 0) {
        gishatich2Qanak--;
        matrix[y][x] = 4;
    }

}
while (gishatichQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] == 0) {
        gishatichQanak--;
        matrix[y][x] = 3;
    }

}
while (grassMoveQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] == 0) {
        grassMoveQanak--;
        matrix[y][x] = 2;
    }

}
while (grassArrQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] == 0) {
        grassArrQanak--;
        matrix[y][x] = 1;
    }

}

// while (zoneeQanak > 0) {
//     var x = Math.round(Math.random() * (chap - 1));
//     var y = Math.round(Math.random() * (chap - 1));
//     if (matrix[y][x] == 0){
//         matrix[y][x] = 3;
//         zoneeQanak--;
//     }
// }
/*matrix = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 5, 0, 0],
    [1, 1, 0, 0, 0]
];*/




function setup() {
    frameRate(3);
    createCanvas(height * side, width * side);
    background('#acacac');


    for (var u = 0; u < matrix.length; u++) {
        for (var e = 0; e < matrix[u].length; e++) {
            if (matrix[u][e] == 1) {
                var gr = new Grass(e, u, 1);
                grassArr.push(gr);
            }
            if (matrix[u][e] == 2) {
                var cell = new GrassEater(e, u, 2);
                grassMove.push(cell);
            }
            if (matrix[u][e] == 3) {
                var gishat = new gesh(e, u, 3);
                gishatich.push(gishat);
            }
            if (matrix[u][e] == 4) {
                var gish2 = new gish(e, u, 4);
                gishatich2.push(gish2);
            }
            if (matrix[u][e] == 5) {
                var zone2 = new zone(e, u, 5);
                zonee.push(zone2);
            }


        }
    }
}
var exanak = 0;
function draw() {
    exanak++;
    console.log(exanak);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x] == 1 && exanak % 50 <= 25) {
                fill('#e6ffe6');
                rect(x * side, y * side, side, side);
                
            }
                
            
            else if (matrix[y][x] == 1 && exanak % 100 > 50) {
                fill("#ffcc80");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                if (exanak % 50 <= 25) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                }
                else if (exanak % 100 <= 50) {
                    fill("#e68a00");
                    rect(x * side, y * side, side, side);
                }
                else {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
            }

            else if (matrix[y][x] == 5) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var p in grassArr) {
        grassArr[p].mul();
    }
    for (var i in grassMove) {
        grassMove[i].eat();
    }
    for (var z in gishatich) {
        gishatich[z].eat();
    }
    for (var k in gishatich2) {
        gishatich2[k].eat();
    }
    for (var f in zonee) {
        zonee[f].kiiling();
    }
}
