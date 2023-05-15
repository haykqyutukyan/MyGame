let board = [
   ["-", "-", "-"],
   ["-", "-", "-"],
   ["-", "-", "-"]
];



let player1 = "x";
let player2 = "o"; 
let player = player1;

debugger
while(true) {
   let boardStr = board[0].join("   ") + "\n" + board[1].join("   ") + "\n" + board[2].join("   ");
   let row;
   let column;

   if (player === player1) {
      row = +prompt("Dear Player1, please provider the value for the row (0, 1 or 2) \n\n" + boardStr);
      column = +prompt("Dear Player1, please provider the value for the column (0, 1 or 2) \n\n" + boardStr);
      
      if (row >= board.length || column >= board.length || board[row][column] !== "-") {
         alert("Not a legal move, try again");
         continue;
      }

      board[row][column] = player1;
      player = player2;

   } else {
      row = +prompt("Dear Player2, please provider the value for the row (0, 1 or 2) \n\n" + boardStr);
      column = +prompt("Dear Player2, please provider the value for the column (0, 1 or 2) \n\n" + boardStr);

      if (row >= board.length || column >= board.length || board[row][column] !== "-") {
         alert("Not a legal move, try again");
         continue;
      }
         board[row][column] = player2;
         player = player1;
   }

   if (
      board[row][0] === "x" && board[row][1] === "x" && board[row][2] === "x" ||
      board[0][column] === "x" && board[1][column] === "x" && board[2][column] === "x" ||
      board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x" ||
      board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x" 
      ) {
      boardStr = board[0].join("   ") + "\n" + board[1].join("   ") + "\n" + board[2].join("   ");
      alert("Player1 Wins \n\n" + boardStr);
      break;
   }

   if (
      board[row][0] === "o" && board[row][1] === "o" && board[row][2] === "o" || 
      board[0][column] === "o" && board[1][column] === "o" && board[2][column] === "o" || 
      board[0][0] === "o" && board[1][1] === "o" && board[2][2] === "o" ||
      board[0][2] === "o" && board[1][1] === "o" && board[2][0] === "o"
      ) {
      boardStr = board[0].join("   ") + "\n" + board[1].join("   ") + "\n" + board[2].join("   ");
      alert("Player2 Wins \n\n" + boardStr);
      break;
   }

   if (board[0][0] !== "-" && board[0][1] !== "-" && board[0][2] !== "-" && 
      board[1][0] !== "-" && board[1][1] !== "-" && board[1][2] !== "-" &&
      board[2][0] !== "-" && board[2][1] !== "-" && board[2][2] !== "-"
   ) {
      alert("Тhe game is over and no one has won");
      break;
   }
}