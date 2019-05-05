class Zone {
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
                for (var i in Gishatich) {
                    if (Gishatich[i].x == nX && Gishatich[i].y == nY) {
                        matrix[nY][nX] = 0;

                        Gishatich.splice(i, 1);
                        break;
                    }
                    //console.log(Gishatich)
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
                for (var i in Gishatich2) {
                    if (Gishatich2[i].x == nX && Gishatich2[i].y == nY) {
                        matrix[nY][nX] = 0;

                        Gishatich2.splice(i, 1);
                        break;
                    }
                }
            }
        }

    }





}
