const Config = {
    SCREEN_WIDTH: 320,
    SCREEN_HEIGHT: 240,
    RENDER_ID: 'game',

    TILE_SIZE: 32,
    MIN_MAP_X: 1,
    MAX_MAP_X: 100,
    MIN_MAP_Y: 1,
    MAX_MAP_Y: 100,

    USERS_MOVE_SPEED: 150
};

Config.VIEWPORT_TILE_WIDTH = Config.SCREEN_WIDTH / Config.TILE_SIZE
Config.VIEWPORT_TILE_HEIGHT = Config.SCREEN_HEIGHT / Config.TILE_SIZE

// const maxX = maxMapX * tileSize
// const maxY = maxMapY * tileSize

export default Config;
