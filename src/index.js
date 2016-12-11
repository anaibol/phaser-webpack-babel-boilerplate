import config from './config'
// import Boot from './boot'
import Game from './Game'
import Play from './states/Play'

window.game = new Game(config.SCREEN_WIDTH, config.SCREEN_HEIGHT)

game.state.add('Play', Play)
game.state.start('Play')
