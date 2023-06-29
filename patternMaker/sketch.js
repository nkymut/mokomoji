

let mokomojiGrid;

let cardWidth = 117;
//let cardHeight = 374;
let cardHeight = 187;

let cardRadius = 4;

let guideHoleRadius = 3;
let guideHoleSpacing = 6;
let guideColumnPositions = [[5, 4], [cardWidth - 5, 4]];

let loomHoleRadius = 4;
let loomHoleSpacing = 5;
let loomHoleOffset = [11, 4];

let maxRow = 62 / 2;
let rowSpacing = 6;
let colSpacing = 5;
let maxCol = 20;

//let cW, cH, cR, gHR, gHS, gCP, lHR, lHS, lHO, rS, cS;

let svgWriter;

let omoteColor = "";
let uraColor = "";

let gridSize = 20;

let editorGrid = [];

//heart pattern
let pattern = [[0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], //0
[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0], //1
[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1], //2
[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0], //3
[0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1], //4
[1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0], //5
[0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1], //6
[1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0], //7
[0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1], //8
[1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0], //9
[0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1], //10
[1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0], //11
[0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1], //12
[1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0], //13
[0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1], //14
[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0], //15 
[0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1], //16
[1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0], //17
[0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1], //18
[1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0], //19
[0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1], //20
[1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0], //21
[0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1], //22
[1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], //23
[0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1], //24
[1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0], //25
[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1], //26
[1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0]  //27
];




function setup() {
    createCanvas(windowWidth, windowHeight);

    let dpi = window.devicePixelRatio * 96;

    weftColors = [color(100, 255, 255)]
    warpColors = [color(255, 100, 255)]

    //constructor(x,y,w,h,rows,cols,weftColors,warpColors){
    mokomojiGrid = new WeavePattern(60, 60, 600, 600, 28, 20, weftColors, warpColors);

    mokomojiCard = new MokomojiCard(cardWidth, cardHeight, cardRadius, guideHoleRadius, guideHoleSpacing, guideColumnPositions, loomHoleRadius, loomHoleSpacing, loomHoleOffset, rowSpacing, colSpacing);



    // omoteColor = color();
    // uraColor = color();

    let clearButton = createButton('clear');
    clearButton.position(820, 10);
    clearButton.style('font-size', '24px');
    clearButton.mousePressed(function () {
        mokomojiGrid.clearPattern();
    });
    let loadButton = createButton('load');
    loadButton.position(820, 50);
    loadButton.style('font-size', '24px');
    loadButton.mousePressed(function () {
        mokomojiGrid.loadCardPattern(pattern);
    });


    let exportButton = createButton('export!');
    exportButton.position(820, 90);
    exportButton.style('font-size', '24px');


    weftColorPicker = createColorPicker(weftColors[0]);
    //weftColorPicker.position(820, 130);
    weftColorPicker.input(setWeftColor);
    //weftColorPicker.html();
    label = createDiv('weft color ');
    label.position(830, 130);
    weftColorPicker.parent(label);

    warpColorPicker = createColorPicker(warpColors[0]);
    // warpColorPicker.position(820, 170);
    label = createDiv('warp color ');
    label.position(830, 170);
    warpColorPicker.parent(label);
    warpColorPicker.input(setWarpColor);
    //exportButton.style('background-color', '#2222CC');
    //exportButton.style('color', 'white');
    //exportButton.style('border', 'none');
    //exportButton.style('padding', '15px 32px');

    exportButton.mousePressed(function () {
        mokomojiCard.exportCard(mokomojiGrid.getPattern()); // export gcode to a file.
    });




}

function setWeftColor() {
    //print("setWeftColor", weftColorPicker.color());
    weftColors = [weftColorPicker.color()];
    mokomojiGrid.setWeftColors(weftColors);

}

function setWarpColor() {
    warpColors = [warpColorPicker.color()];
    mokomojiGrid.setWarpColors(warpColors);
}

function draw() {
    background(250);

    mokomojiGrid.draw(60, 60);

    //noLoop(); 
}


function mousePressed() {
    mokomojiGrid.mousePressed();
}

function mouseDragged() {
    let dist = sqrt((mouseX - pmouseX) * (mouseX - pmouseX) + (mouseY - pmouseY) * (mouseY - pmouseY));
    if (dist > 5) {
        mokomojiGrid.mouseDragged();
    }
}

class MokomojiCard {
    constructor(cardWidth, cardHeight, cardRadius, guideHoleRadius, guideHoleSpacing, guideColumnPositions, loomHoleRadius, loomHoleSpacing, loomHoleOffset, rowSpacing, colSpacing) {
        ellipseMode(CENTER);

        this.cW = this.mmToPixel(cardWidth);
        this.cH = this.mmToPixel(cardHeight);
        this.cR = this.mmToPixel(cardRadius);
        this.gHR = this.mmToPixel(guideHoleRadius);
        this.gHS = this.mmToPixel(guideHoleSpacing);
        this.gCP = [[this.mmToPixel(guideColumnPositions[0][0]), this.mmToPixel(guideColumnPositions[0][1])], [this.mmToPixel(guideColumnPositions[1][0]), this.mmToPixel(guideColumnPositions[1][1])]];
        this.lHR = this.mmToPixel(loomHoleRadius);
        this.lHS = this.mmToPixel(loomHoleSpacing);
        this.lHO = [this.mmToPixel(loomHoleOffset[0]), this.mmToPixel(loomHoleOffset[1])];
        this.rS = this.mmToPixel(rowSpacing);
        this.cS = this.mmToPixel(colSpacing);

        this.svgWriter = createGraphics(this.cW, this.cH, SVG);

    }

    mmToPixel(mm) {
        let dpi = window.devicePixelRatio * 96;

        return mm / 25.4 * dpi / pixelDensity();
    }

    exportCard(pattern) {

        let maxRow = pattern.length;
        let maxCol = pattern[0].length;


        this.svgWriter.rect(0, 0, this.cW, this.cH, this.cR);
        this.svgWriter.strokeWeight(0.5);
        for (let rowIdx = 0; rowIdx < maxRow + 3; rowIdx++) {
            this.svgWriter.ellipse(this.gCP[0][0], this.gCP[0][1] + rowIdx * this.rS, this.gHR, this.gHR);
            this.svgWriter.ellipse(this.gCP[1][0], this.gCP[1][1] + rowIdx * this.rS, this.gHR, this.gHR);
        }

        for (let rowIdx = 0; rowIdx < maxRow; rowIdx++) {
            if (rowIdx < 2 || rowIdx > 59) continue;
            let patternRowIdx = rowIdx - 2;
            for (let colIdx = 0; colIdx < maxCol; colIdx++) {
                if (patternRowIdx < pattern.length) {
                    if(rowIdx % 2 == 0){
                        if (pattern[patternRowIdx][colIdx] == 0) {
                            //svgWriter.fill(0);
                            this.svgWriter.ellipse(this.lHO[0] + colIdx * this.cS, this.lHO[1] + rowIdx * this.rS, this.lHR, this.lHR);
                        } 

                    } else{
                        if (pattern[patternRowIdx][colIdx] == 1) {
                            //svgWriter.fill(0);
                            this.svgWriter.ellipse(this.lHO[0] + colIdx * this.cS, this.lHO[1] + rowIdx * this.rS, this.lHR, this.lHR);
                        } 

                    }
  
                }
            }

        }
        
        this.svgWriter.save("mokomojiPattern.svg");
        //print("saved svg");
    }

}


class Tog {

    constructor(offsetX, offsetY, x, y, w, h, offColor, onColor) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.onColor = onColor;
        this.offColor = offColor;
        this.state = false;
    }

    draw() {
        push();
        if (this.state) {
            fill(this.onColor)
        }
        else {
            fill(this.offColor)
        }

        rect(this.x, this.y, this.w, this.h);
        pop();
    }

    draw(x, y) {
        this.offsetX = x;
        this.offsetY = y;
        push();
        if (this.state) {
            fill(this.onColor)
        }
        else {
            fill(this.offColor)
        }

        rect(this.x, this.y, this.w, this.h);
        pop();
    }

    toggle() {
        this.state = !this.state;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    setOnColor(color) {
        this.onColor = color;
    }

    setOffColor(color) {
        this.offColor = color;
    }

    mousePressed() {
        if (mouseX > this.x + this.offsetX && mouseX < this.x + this.offsetX + this.w && mouseY > this.y + this.offsetY && mouseY < this.y + this.offsetY + this.h) {
            this.toggle();
        }
    }

    mouseDragged() {
        if (mouseX > this.x + this.offsetX && mouseX < this.x + this.offsetX + this.w && mouseY > this.y + this.offsetY && mouseY < this.y + this.offsetY + this.h) {
            this.setState(1);
        }
    }

}


class WeavePattern {

    constructor(x, y, w, h, rows, cols, weftColors, warpColors) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rows = rows;
        this.cols = cols;
        this.grid = [];


        this.gridSizeX = this.w / this.cols;
        this.gridSizeY = this.h / this.rows;

        this.weftGuideOffsetX = 0;
        this.weftGuideOffsetY = -this.gridSizeY;
        this.warpGuideOffsetX = this.gridSizeX * this.cols;
        this.warpGuideOffsetY = 0;

        this.weftColors = weftColors;
        this.warpColors = warpColors;
        this.initGrid();
    }

    setWeftColors(colors) {
        if (colors.length == 0) return;
        this.weftColors = colors;

        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {
                this.grid[rowIdx][colIdx].setOffColor(this.weftColors[0]);
            }
        }

    }

    setWarpColors(colors) {
        if (colors.length == 0) return;
        this.warpColors = colors;

        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {
                this.grid[rowIdx][colIdx].setOnColor(this.warpColors[0]);
            }
        }
    }

    drawWeftColors() {

        push();
        translate(this.weftGuideOffsetX, -this.gridSizeY * 2);
        for (let colIdx = 0; colIdx < this.cols; colIdx++) {
            fill(255)
            stroke(0);
            rect(colIdx * this.gridSizeX, 0, this.gridSizeX, this.gridSizeY);
        }
        pop();

    }

    loadCardPattern(pattern){
        if (pattern.length != this.rows) {
            print("pattern rows do not match grid rows", pattern.length, this.rows);
            return;
        }
        if (pattern[0].length != this.cols) {
            print("pattern cols do not match grid cols", pattern[0].length, this.cols);
            return;
        }


        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {
                if(rowIdx % 2 == 0){
                    this.grid[rowIdx][colIdx].setState(pattern[rowIdx][colIdx]);
                   
                }else{
                    this.grid[rowIdx][colIdx].setState(pattern[rowIdx][colIdx] == 0 ? 1 : 0);
                }
            }
        }
    }

    loadPattern(pattern) {
        //check pattern dimensions are the same as the grid
        if (pattern == null) return;


        if (pattern.length != this.rows) {
            print("pattern rows do not match grid rows", pattern.length, this.rows);
            return;
        }
        if (pattern[0].length != this.cols) {
            print("pattern cols do not match grid cols", pattern[0].length, this.cols);
            return;
        }

        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {
                this.grid[rowIdx][colIdx].setState(pattern[rowIdx][colIdx]);
            }
        }


    }

    getPattern() {
        let pattern = [];
        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            let row = [];
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {
                row.push(this.grid[rowIdx][colIdx].getState());
            }
            pattern.push(row);
        }
        return pattern;
    }

    clearPattern() {

        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {
                this.grid[rowIdx][colIdx].setState(0);
            }
        }
    }


    drawWarpColors() {

        push();
        translate(this.warpGuideOffsetX + this.gridSizeX, this.warpGuideOffsetY);
        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            fill(255)
            stroke(0);
            rect(0, rowIdx * this.gridSizeY, this.gridSizeX, this.gridSizeY);
        }
        pop();
    }

    drawWeftGuide() {
        push();
        translate(this.weftGuideOffsetX, this.weftGuideOffsetY);
        for (let colIdx = 0; colIdx < this.cols; colIdx++) {
            fill(0)
            textAlign(CENTER, CENTER);
            text(colIdx + 1, (colIdx + 0.5) * this.gridSizeX, 0.5 * this.gridSizeY);
            noFill();

        }
        pop();

    }

    drawWarpGuide() {
        push();
        translate(this.warpGuideOffsetX, this.warpGuideOffsetY);
        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            fill(0)
            textAlign(CENTER, CENTER);
            text(rowIdx + 1, 0.5 * this.gridSizeX, (rowIdx + 0.5) * this.gridSizeY);
            noFill();
        }
        pop();
    }

    initGrid() {
        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            let row = [];
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {
                //print("gridSizeX:" + this.gridSizeX + " gridSizeY:" + this.gridSizeY);
                row.push(new Tog(this.x, this.y, colIdx * this.gridSizeX, rowIdx * this.gridSizeY, this.gridSizeX, this.gridSizeY, this.weftColors[0], this.warpColors[0]));
            }
            this.grid.push(row);
        }

        print(this.grid);
    }

    draw() {
        push();
        translate(this.x, this.y);
        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {
                this.grid[rowIdx][colIdx].draw();
            }
        }
        pop();
    }

    draw(x, y) {
        this.x = x;
        this.y = y;
        push();
        translate(x, y);

        //translate(0,gridSize);
        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
            for (let colIdx = 0; colIdx < this.cols; colIdx++) {

                // if(pattern[rowIdx][colIdx] == 1) (rowIdx %2 === 0) ? fill(this.weftColor) : fill(uraColor);
                // else (rowIdx %2 === 0) ? fill(uraColor) : fill(omoteColor);

                // if(pattern[rowIdx][colIdx] == 1) fill(omoteColor);
                // else  fill(uraColor);

                this.grid[rowIdx][colIdx].draw(x, y);

                // if(colIdx < 1 || colIdx > 18) noFill();

                // rect(colIdx * gridSize, rowIdx * gridSize, gridSize, gridSize);

                // if(colIdx == 20-1){
                //     fill(0)
                //     textAlign(CENTER, CENTER);
                //     text(rowIdx+1, (colIdx+0.5) * gridSize, (rowIdx + 0.5)* gridSize );

                // }  
            }

            this.drawWeftGuide();
            this.drawWarpGuide();

            this.drawWeftColors();
            this.drawWarpColors();


        }

        pop();
    }

    mousePressed() {

        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {

            for (let colIdx = 0; colIdx < this.cols; colIdx++) {

                this.grid[rowIdx][colIdx].mousePressed();
            }

        }
    }

    mouseDragged() {

        for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {

            for (let colIdx = 0; colIdx < this.cols; colIdx++) {

                this.grid[rowIdx][colIdx].mouseDragged();
            }

        }
    }


}