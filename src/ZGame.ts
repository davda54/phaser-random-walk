export class Play extends Phaser.Scene {
  dot: Phaser.Math.Vector2;
  graphics: Phaser.GameObjects.Graphics;

  create() {
    this.dot = new Phaser.Math.Vector2(80, 80);
    this.graphics = this.add.graphics();
    this.graphics.setBlendMode(Phaser.BlendModes.SCREEN);
  }

  update(time: number, delta: number) {
    this.dot = new Phaser.Math.Vector2(this.dot.x + Phaser.Math.Between(-1, 1), this.dot.y + Phaser.Math.Between(-1, 1));
    if (this.dot.x < 0) this.dot.x = 0;
    if (this.dot.x > 160) this.dot.x = 160;
    if (this.dot.y < 0) this.dot.y = 0;
    if (this.dot.y > 160) this.dot.y = 160;

    this.graphics.fillStyle(0x6611FF, 0.5);
    this.graphics.fillPoint(this.dot.x * 4, this.dot.y * 4, 4);
  }
}

export var gameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 640,
  backgroundColor: 0x000000,
  scene: [Play],
};

