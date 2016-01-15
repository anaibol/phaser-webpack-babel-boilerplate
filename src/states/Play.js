import Player from '../Player'
import config from '../config'

class Play extends Phaser.State {

	preload() {
		game.load.tilemap('tiles', 'assets/maps/1.json', null, Phaser.Tilemap.TILED_JSON)
		game.load.image('tilesImage', 'assets/img/terrain_atlas.png')
		game.load.spritesheet('player', 'assets/img/dude.png', 27, 49)
	}

	create() {
		// game.plugins.add(Phaser.Plugin.Inspector)
		game.time.events.loop(250, this.checkKeys, this);

		game.world.setBounds(0, 0, config.MAX_MAP_X, config.MAX_MAP_Y)

		const map = game.add.tilemap('tiles')
		map.addTilesetImage('tileSet', 'tilesImage')

		const layer = map.createLayer('floor')
		layer.resizeWorld()
		layer.debug = true
		layer.wrap = true


		game.load.spritesheet('player', 'assets/img/dude.png', 27, 49)

		game.cursors = game.input.keyboard.createCursorKeys()

		let players = []

		let pos = {
			x: (config.SCREEN_WIDTH / config.TILE_SIZE) / 2,
			y: (config.SCREEN_HEIGHT / config.TILE_SIZE) / 2
		}

		this.player = new Player(1, 'player', pos.x, pos.y)

		players.push(this.player)

		this.physics.arcade.enable(this.player.body)
		// this.player.body.body.collideWorldBounds = true;
    game.camera.follow(this.player.body)
	}

	render() {
		game.debug.text('FPS: ' + game.time.fps, 32, 32)
	  // game.debug.text('HP: ' + player.minHP + ' / ' + player.maxHp, 32, 32)
	  game.debug.text('X: ' + this.player.pos.x + ' Y: ' + this.player.pos.y, 32, 64)

	  // if (me) {
	    // game.debug.text(game.time.physicsElapsed, 32, 32)
	    // game.debug.body(this.player.body)
	    // game.debug.bodyInfo(this.player.body, 32, 24)
	  // }

			this.checkKeys()

	  // if (newPlayer) {
	  //   game.debug.text(game.time.physicsElapsed, 32, 32)
	  //   game.debug.body(newPlayer.player)
	  //   game.debug.bodyInfo(newPlayer.player, 16, 24)
	  // }
	}

	update() {

		// this.player.body.marker.x = this.math.snapToFloor(Math.floor(this.player.body.x), 32) / 32;
		// this.player.body.marker.y = this.math.snapToFloor(Math.floor(this.player.body.y), 32) / 32;

	}

	checkKeys() {
	  if (game.cursors.left.isDown) {
	    this.moveMe(Phaser.LEFT)
	  } else if (game.cursors.right.isDown) {
	    this.moveMe(Phaser.RIGHT)
	  } else if (game.cursors.up.isDown) {
	    this.moveMe(Phaser.UP)
	  } else if (game.cursors.down.isDown) {
	    this.moveMe(Phaser.DOWN)
		} else if (this.player.isMoving) {
			this.stopMe()
		}
	}

	moveMe(direction) {
		// if (direction !== this.player.body.direction) {
		// 	return
		// }
		if (this.player.isMoving) return

	 	let pos = this.player.pos

		switch (direction) {
			case Phaser.LEFT:
				pos.x--
				break

			case Phaser.RIGHT:
				pos.x++
				break

			case Phaser.UP:
				pos.y--
				break

			case Phaser.DOWN:
				pos.y++
				break
		}

		this.moveChar(this.player, pos.x, pos.y)
	}

	stopMe() {
		console.log('stop me');
		this.player.isMoving = false
		// this.player.body.velocity.x = 0
		// this.player.body.velocity.y = 0
	}

	moveChar(char, x, y) {
		char.isMoving = true

		game.add.tween(char.body).to({
			x: x * config.TILE_SIZE,
			y: y * config.TILE_SIZE
		}, config.USERS_MOVE_SPEED, null, true).onComplete.add(function() {
			console.log(char.isMoving);
			// Phaser.Easing.Quadratic.InOut
			char.isMoving = false
			// this.checkKeys()
		}, this)
	}

  // let mapData = []
  //
  // for (let x = 0 x < maxMapX x++) {
  //   mapData[x] = []
  // }


  // function checkBounds() {
  //   return !(me.x < minMapX || me.x > maxMapX || me.y < minMapY || me.y > maxMapY)
			// if (pos.x < config.SCREEN_WIDTH / config.TILE_SIZE / 2 * config.MIN_MAP_X - 1 ||
			// 	pos.x > config.SCREEN_WIDTH / config.TILE_SIZE / 2 * config.MAX_MAP_X - 1 ||
			// 	pos.y < config.SCREEN_HEIGHT / config.TILE_SIZE / 2 * config.MIN_MAP_Y - 1 ||
			// 	pos.x > config.SCREEN_HEIGHT / config.TILE_SIZE / 2 * config.MAX_MAP_Y - 1) {
			// 		return
			// }
  // }
}

export default Play
