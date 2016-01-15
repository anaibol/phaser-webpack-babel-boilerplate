import Game from './Game'
import config from './config'

class Char {
  constructor(id, x, y) {
    this.id = id

    //game.world.width / tileSize / 2
    // game.add.sprite(32, 32, 'player')
    // this.mainSprite = game.add.sprite( this.x * config.TILE_SIZE, this.y * config.TILE_SIZE, 'player')
    // this.mainSprite.animations.add('east', [16,17,18,19,20,21,22,23], 8, true)
    // this.mainSprite.animations.add('north', [0,1,2,3,4,5,6,7], 8, true)
    // this.mainSprite.animations.add('west', [48,49,50,51,52,53,54,55], 8, true)
    // this.mainSprite.animations.add('south', [32,33,34,35,36,37,38, 39], 8, true)

    // this.physics.enable(this.mainSprite, Phaser.Physics.ARCADE);
    // game.camera.follow(this.mainSprite);

  }

  moveTo(x, y) {

  }
}

export default Char
