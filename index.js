function initBoard() {
  var board = Array(...Array(4)).map(() => {
    return Array(4).fill(0)
  })
  var cell1 = randCell(board)
  board[cell1[0]][cell1[1]] = 2
  var cell2 = randCell(board)
  board[cell2[0]][cell2[1]] = 2
  return board
}

var randCellfunction(board) {
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

var currentBoard = initBoard()

function updateBoard(){
  var cell1 = randCell(currentBoard)
  currentBoard[cell1[0]][cell1[1]] = 2
  return currentBoard
}

function move(direction) {

}

function combine(num1, num2){
  num1 + num2
}

function canCombine(num1, num2){
  if (num1 == num2){
    combine(num1, num2)
  }
  else{
    return
  }
}

function nextNeighbourToMy(direction, myPosition){
  number, neighbourPosition
}

function isNeighbourToMy(direction, myPosition){
  //return boolean
}

function isAtBoundary(direction){
  //return boolean
}

function isEmptyBox(location){
  //return boolean
}

function tryCombineLine(line){
  //return newLine
  //if (line === newLine){
  //  done
  //}
}

for (var i =0; i < 14; i++){
  console.log(updateBoard())
}

