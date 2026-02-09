window.addEventListener( 'load', onLoad );

const ROWS = 3;
const COLS = 3;
const CELLS = ROWS * COLS;
const CELL_ID_PREFIX = 'col';

function onLoad()
{
    let s = "<table>";

    for( let y = 0; y < ROWS; y++ ){
        s += "<tr>";
        for( let x = 0; x < COLS; x++ ){
            s += "<td id = '" + CELL_ID_PREFIX + ( y * COLS + x ) + "'></td>";
        }
        s += "</tr>";
    } 
    s += "</table>";
    document.getElementById( 'GameArea' ).innerHTML = s;

    setInterval( OnTick, 1000 );
}

let mogPos = -1;
function OnTick()
{
    if( mogPos >= 0 ){
        let name = CELL_ID_PREFIX + mogPos;
        document.getElementById( name ).style.setProperty( 'background-image', 'url( res/hole.png )' );    
    }

    let id = Math.floor( ( Math.random() * ( CELLS + 1 ) ) - 1;
    if( id >= 0 ){
        let name = CELL_ID_PREFIX + id;
        document.getElementById( name ).style.setProperty( 'background-image', 'url( res/mole.png )' );
    }

}