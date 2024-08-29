// import React from 'react';
// import './chess.css';

// function Board() {
//   const board = [];

//   for (let i = 0; i < 8; i++) {
//     const row = [];
//     for (let j = 0; j < 8; j++) {
//       const isBlack = (i + j) % 2 === 1;
//       let piece = null;

//       // Add pawns
//       if (i === 1) {
//         piece = <span id="black" className="piece pawn black">&#9823;</span>;
//       } else if (i === 6) {
//         piece = <span id="white" className="piece pawn white">&#9817;</span>;
//       }

//       // Add rooks
//       if ((i===0 && (j===0 || j===7)) || (i===7 && (j===0 || j===7))) {
//         piece = i === 0 ? <span id="black" className="piece rook black">&#9820;</span> : <span  id="white" className="piece rook white">&#9814;</span>;
//       }

//       // Add knights
//       if ((i===0 && (j===1 || j===6)) || (i===7 && (j===1 || j===6))) {
//         piece = i === 0 ? <span id="black" className="piece knight black">&#9822;</span> : <span  id="white" className="piece knight white">&#9816;</span>;
//       }

//       // Add bishops
//       if ((i===0 && (j===2 || j===5)) || (i===7 && (j===2 || j===5))) {
//         piece = i === 0 ? <span id="black" className="piece bishop black">&#9821;</span> : <span  id="white" className="piece bishop white">&#9815;</span>;
//       }

//       // Add queens
//       if ((i===0 && j===3) || (i===7 && j===3)) {
//         piece = i === 0 ? <span id="black" className="piece queen black">&#9819;</span> : <span  id="white" className="piece queen white">&#9813;</span>;
//       }

//       // Add kings
//       if ((i===0 && j===4) || (i===7 && j===4)) {
//         piece = i === 0 ? <span id="black" className="piece king black">&#9818;</span> : <span  id="white"  className="piece king white">&#9812;</span>;
//       }

//       row.push(
//         <div key={`${i}-${j}`}
//           className={`square ${isBlack ? 'black' : 'white'}`}>
//           {piece}
//         </div>
//       );
//     }
//     board.push(
//       <div key={i} className="row">
//         {row}
//       </div>
//     );
//   }

//   return <div className="board">{board}</div>;
// }

// export default Board;