import Char from './Char'
import config from './config'

class Player extends Phaser.Sprite {
  constructor(id, name, x, y) {
    super()

    this.pos = {x, y}

    this.id = id

    this.body = game.add.sprite(x * config.TILE_SIZE, y * config.TILE_SIZE, 'player')

    // this.player.animations.add('east', [16,17,18,19,20,21,22,23], 8, true)
    // this.player.animations.add('north', [0,1,2,3,4,5,6,7], 8, true)
    // this.player.animations.add('west', [48,49,50,51,52,53,54,55], 8, true)
    // this.player.animations.add('south', [32,33,34,35,36,37,38, 39], 8, true)

    // Phaser.Sprite.call(game, x, y, 'bunny');
  }
}

export default Player
