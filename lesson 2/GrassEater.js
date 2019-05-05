class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
        return super.chooseCell(character);
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
    

