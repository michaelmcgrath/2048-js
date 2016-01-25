
function initBoard() {
  var board = Array(...Array(4)).map(() => {
    return Array(4).fill(0)
  })
  var cell1 = randCell(board)
  // cell1 = [0, 3]
  // cell1[0] === 0, cell1[1] === 3
  board[cell1[0]][cell1[1]] = 2
  // board[0][3] = 2
  var cell2 = randCell(board)
  board[cell2[0]][cell2[1]] = 2
  return board
}

var randCell = function(board) {
  var emptyCells = []
  board.forEach(function(row, i) {
    row.forEach(function(cell, j){
      if(cell === 0){
        emptyCells.push([i, j])
      }
    })
  })
  return emptyCells[Math.floor(Math.random() * emptyCells.length)]
}




//   selectedCell = board[Math.floor(Math.random() * board.length)]
//   for (var i = 0; i < 15; i++){
//     if(selectedCell.length < 1){
//       selectedCell.push(2)
//       i+15
//     }
//     else {
//       selectedCell
//     }
//   }
// }
