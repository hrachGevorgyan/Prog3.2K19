class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.takt = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];


    }
    yntrelVandak(ind) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === ind) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.takt++;
        var datarkVandakner = this.yntrelVandak(0);
        var xot = random(datarkVandakner);

        if (xot && this.takt >= 8) {
            var nX = xot[0];
            var nY = xot[1];
            matrix[nY][nX] = 1;

            var norXot = new Grass(nX, nY, this.index);
            grassArr.push(norXot);
            this.takt = 0;
        }
    }

}




class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.takt = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var vand = this.chooseCell(0);
        var zarg = random(vand);

        if (zarg) {
            var nX = zarg[0];
            var nY = zarg[1];
            matrix[nY][nX] = 2;

            var newzarg = new GrassEater(nX, nY, this.index);
            grassMove.push(newzarg);

        }
    }
    move() {
        var newCells = this.chooseCell(0);
        var newCell = random(newCells);
        if (newCell) {
            var nX = newCell[0];
            var nY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[nY][nX] = 2;
            this.x = nX;
            this.y = nY;
        }


    }


    eat() {
        var grasses = this.chooseCell(1);
        var grass = random(grasses);
        if (grass) {
            matrix[this.y][this.x] = 0;
            var nX = grass[0];
            var nY = grass[1];
            matrix[nY][nX] = 2;
            this.energy++;
            this.x = nX;
            this.y = nY;
            for (var i in grassArr) {
                if (grassArr[i].x == nX && grassArr[i].y == nY) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 10) {
                this.mul();
                this.energy = 5;
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }




    }
    die() {
        for (var i in grassMove) {
            if (grassMove[i].x == this.x && grassMove[i].y == this.y) {
                grassMove.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}

class gesh {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.takt = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found1 = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === character) {
                    found1.push(this.directions[i]);
                }
            }
        }
        return found1;
    }
    mul() {
        var vand1 = this.chooseCell(1);
        var gish = random(vand1);
        if (gish) {

            var nX = gish[0];
            var nY = gish[1];
            matrix[nY][nX] = 3;
            for (var i in grassArr) {
                if (grassArr[i].x == nX && grassArr[i].y == nY) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            var newgish = new gesh(nX, nY, this.index);
            gish.push(newgish);

        }
    }
    move() {
        var newgishat = this.chooseCell(0);
        var newg = random(newgishat);
        if (newg) {
            var nX = newg[0];
            var nY = newg[1];

            matrix[this.y][this.x] = 0;
            matrix[nY][nX] = 3;

            this.x = nX;
            this.y = nY;
        }


    }


    eat() {
        var grasseater = this.chooseCell(2);
        var gesh = random(grasseater);
        if (gesh) {
            matrix[this.y][this.x] = 0;
            var nX = gesh[0];
            var nY = gesh[1];
            matrix[nY][nX] = 3;
            this.energy++;
            this.x = nX;
            this.y = nY;
            for (var i in grassMove) {
                if (grassMove[i].x == nX && grassMove[i].y == nY) {
                    grassMove.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 20) {
                this.mul();
                this.energy = 10;
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }




    }
    die() {
        for (var i in gishatich) {
            if (gishatich[i].x == this.x && gishatich[i].y == this.y) {
                gishatich.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}

class gish {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.index = index;
        this.takt = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found1 = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found1.push(this.directions[i]);
                }
            }
        }
        return found1;
    }
    chooseCell2(t, t1) {
        this.getNewCoordinates();
        var found1 = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t || matrix[y][x] === t1) {
                    found1.push(this.directions[i]);
                }
            }
        }
        return found1;
    }
    mul() {
        var vand1 = this.chooseCell(0);
        var g = random(vand1);

        if (g) {
            var nX = g[0];
            var nY = g[1];
            matrix[nY][nX] = 4;

            var newgish = new gish(nX, nY, this.index);
            gishatich2.push(newgish);

        }
    }
    move() {
        var newgishat = this.chooseCell(0);
        var newg = random(newgishat);
        if (newg) {
            var nX = newg[0];
            var nY = newg[1];

            matrix[this.y][this.x] = 0;
            matrix[nY][nX] = 4;
            this.x = nX;
            this.y = nY;
        }


    }


    eat() {
        var grasseater = this.chooseCell2(2, 3);
        var ges = random(grasseater);


        if (ges) {

            var nX = ges[0];
            var nY = ges[1];
            matrix[this.y][this.x] = 0;
            this.energy++;
            if (matrix[nY][nX] == 2) {
                for (var i in grassMove) {
                    if (grassMove[i].x == nX && grassMove[i].y == nY) {
                        grassMove.splice(i, 1);
                        break;
                    }

                }

            }
            else if (matrix[nY][nX] == 3) {
                for (var i in gishatich) {
                    if (gishatich[i].x == nX && gishatich[i].y == nY) {
                        gishatich.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[nY][nX] = 4;
            this.y = nY;
            this.x = nX;


            if (this.energy >= 30) {
                this.mul();
                this.energy = 15;
            }

        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }





    }
    die() {
        for (var i in gishatich2) {
            if (gishatich2[i].x == this.x && gishatich2[i].y == this.y) {
                gishatich2.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}

class zone {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            // [this.x - 2, this.y - 2],
            // [this.x, this.y - 1],
            // [this.x + 2, this.y - 2],
            // [this.x - 2, this.y],
            // [this.x + 2, this.y],
            // [this.x - 2, this.y + 2],
            // [this.x, this.y + 2],
            // [this.x + 2, this.y + 2]

        ];

    }
    chooseCell2(t, t1) {
        this.getNewCoordinates();
        var found1 = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t || matrix[y][x] === t1) {
                    found1.push(this.directions[i]);
                }
            }
        }
        return found1;
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }

    kiiling() {
        var spanox = this.chooseCell2(1, 2);
        var spanox1 = this.chooseCell2(3, 4);
        var sax = spanox.concat(spanox1);
        for (var a = 0; a < sax.length; ++a) {
            var t = sax[a];//[5,4]
            var nX = t[0];//[1,5]
            var nY = t[1];
            if (matrix[nY][nX] == 2) {
                for (var i in grassMove) {
                    if (grassMove[i].x == nX && grassMove[i].y == nY) {
                        matrix[nY][nX] = 0;
                        grassMove.splice(i, 1);
                        break;
                    }
                    //console.log(grassMove)

                }

            }
            else if (matrix[nY][nX] == 3) {
                for (var i in gishatich) {
                    if (gishatich[i].x == nX && gishatich[i].y == nY) {
                        matrix[nY][nX] = 0;

                        gishatich.splice(i, 1);
                        break;
                    }
                    //console.log(gishatich)
                }
            }
            else if (matrix[nY][nX] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == nX && grassArr[i].y == nY) {
                        matrix[nY][nX] = 0;

                        grassArr.splice(i, 1);
                        break;
                    }
                    //console.log(grassArr)
                }
            }
            else if (matrix[nY][nX] == 4) {
                for (var i in gishatich2) {
                    if (gishatich2[i].x == nX && gishatich2[i].y == nY) {
                        matrix[nY][nX] = 0;

                        gishatich2.splice(i, 1);
                        break;
                    }
                }
            }
        }

    }





}
