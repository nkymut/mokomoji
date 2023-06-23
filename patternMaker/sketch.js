
let cardWidth = 117;
let cardHeight = 374;
let cardRadius = 4;

let guideHoleRadius = 3;
let guideHoleSpacing = 6;
let guideColumnPositions = [[5,4],[cardWidth - 5,4]];
    
let loomHoleRadius = 4;
let loomHoleSpacing = 5;
let loomHoleOffset = [11, 4];

let maxRow = 62;
let rowSpacing = 6;
let colSpacing = 5;
let maxCol = 20;

let cW,cH,cR, gHR,gHS,gCP,lHR,lHS,lHO,rS, cS;

let svgWriter;

let omoteColor = "";
let uraColor = "";

let gridSize = 20;

//heart pattern
let pattern = [[0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1], //0
               [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0], //1
               [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1], //2
               [1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0], //3
               [0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1], //4
               [1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0], //5
               [0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1], //6
               [1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0], //7
               [0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1], //8
               [1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0], //9
               [0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1], //10
               [1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0], //11
               [0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1], //12
               [1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0], //13
               [0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1], //14
               [1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0], //15 
               [0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1], //16
               [1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0], //17
               [0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1], //18
               [1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0], //19
               [0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1], //20
               [1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0], //21
               [0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1], //22
               [1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0], //23
               [0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1], //24
               [1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0], //25
               [0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1], //26
               [1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0]  //27
            ]; 



function mmToPixel(mm){
    let dpi = window.devicePixelRatio * 96;

    return mm / 25.4 * dpi / pixelDensity();
}

  function setup() {
    let dpi = window.devicePixelRatio * 96;
    omoteColor = color(255,100,255);
    uraColor = color(100,255,255);

    ellipseMode(CENTER);
    cW = mmToPixel(cardWidth);
    cH = mmToPixel(cardHeight);
    cR = mmToPixel(cardRadius);
    gHR = mmToPixel(guideHoleRadius);
    gHS = mmToPixel(guideHoleSpacing);
    gCP = [[mmToPixel(guideColumnPositions[0][0]),mmToPixel(guideColumnPositions[0][1])],[mmToPixel(guideColumnPositions[1][0]),mmToPixel(guideColumnPositions[1][1])]];
    lHR = mmToPixel(loomHoleRadius);
    lHS = mmToPixel(loomHoleSpacing);
    lHO = [mmToPixel(loomHoleOffset[0]),mmToPixel(loomHoleOffset[1])];
    rS = mmToPixel(rowSpacing);
    cS = mmToPixel(colSpacing);

    createCanvas(windowWidth, windowHeight);

    svgWriter = createGraphics(cW, cH, SVG);
  
  }
  
  function draw() {
    background(250);

    for (let colIdx = 0; colIdx < 20; colIdx++) {
        fill(0)
        textAlign(CENTER, CENTER);
        text(colIdx+1, (colIdx+0.5) * gridSize, 0.5* gridSize );
    }
    translate(0,gridSize);
    for (let rowIdx = 0; rowIdx < 28; rowIdx++) {
        for (let colIdx = 0; colIdx < 20; colIdx++) {
            
            if(pattern[rowIdx][colIdx] == 1) (rowIdx %2 === 0) ? fill(omoteColor) : fill(uraColor);
            else (rowIdx %2 === 0) ? fill(uraColor) : fill(omoteColor);

            // if(pattern[i][colIdx] == 1) fill(omoteColor);
            // else  fill(uraColor);


            if(colIdx > 0 && colIdx < 19) rect(colIdx * gridSize, rowIdx * gridSize, gridSize, gridSize);
            if(colIdx == 20-1){
                fill(0)
                textAlign(CENTER, CENTER);
                text(rowIdx+1, (colIdx+0.5) * gridSize, (rowIdx + 0.5)* gridSize );

            }  
        }
       
    }
    
    svgWriter.rect(0,0,cW,cH,cR);
    svgWriter.strokeWeight(0.5);
    for(let colIdx = 0; colIdx < maxRow; colIdx++){
        svgWriter.ellipse(gCP[0][0], gCP[0][1] + colIdx * rS, gHR, gHR);

        svgWriter.ellipse(gCP[1][0], gCP[1][1] + colIdx * rS, gHR, gHR);
    }

    for(let rowIdx = 0; rowIdx < maxRow; rowIdx++){
        if(rowIdx < 2 || rowIdx > 59) continue;
        let patternRowIdx = rowIdx - 2;
        for(let colIdx = 0; colIdx < maxCol; colIdx++){
            if(patternRowIdx < pattern.length){
            if(pattern[patternRowIdx][colIdx] == 0) {
            svgWriter.fill(0);
            svgWriter.ellipse(lHO[0] + colIdx * cS, lHO[1] + rowIdx * rS , lHR, lHR);
            }else{

            }
        }
        }

    }

    //svgWriter.save("mySVG.svg"); // give file name
   
    noLoop(); 
  }

  function mousePressed(){
    svgWriter.save("mokomojiPatter.svg");
    print("saved svg");
  }