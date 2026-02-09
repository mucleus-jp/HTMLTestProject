document.addEventListener( 'load', onLoad );

const ROWS = 3;
const COLS = 3;

function onLoad()
{
    let s = "<table>";

    for( let y = 0; y < ROWS; y++ ){
        s += "<tr?";
        for( let x = 0; x < COLS; x++ ){
            s += "<td id = 'col'" + y + x + "></td>";
        }
        s += "</tr?";
    } 
}