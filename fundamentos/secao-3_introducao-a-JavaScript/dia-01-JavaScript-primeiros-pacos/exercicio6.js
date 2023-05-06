// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

let chessPiece = "knight"

switch (chessPiece.toLowerCase()) {
  case "king":
    console.log("The King moves from its square to a neighboring square.");
    break;

  case "rook":
    console.log("The Rook can move in its line or row.");
    break;

  case "bishop":
    console.log("The Bishop moves diagonally.");
    break

  case "queen":
    console.log("The Queen may move like a Rook or a Bishop.");
    break

  case "knight":
    console.log("The Knight jumps in making the shortest move that is not a straight one.");
    break

  case "pawn":
    console.log("The Pawn moves one square straight ahead.");
    break

  default:
    console.log("This piece is not valid.");
};