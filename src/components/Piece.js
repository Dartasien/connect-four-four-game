export class Piece {
  constructor(index, attack, hitPoints, color, player) {
    this.index = index;
    this.attack = attack;
    this.hitPoints = hitPoints;
    this.color = color;
    this.player = player;
  }
}
