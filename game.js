var windowWidth = window.innerWidth * window.devicePixelRatio;
var windowHeight = window.innerHeight * window.devicePixelRatio;
var scaleRatio = window.devicePixelRatio / 3;

if (windowWidth > 800 && windowHeight > 600) {
    windowWidth = 800;
    windowHeight = 400;
}

var game = new Phaser.Game(windowWidth, windowHeight, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });
var player;
function preload() {
	game.load.image('player', 'assets/player.png')
	game.load.image('sky', 'assets/sky.png')
	

}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0, 0, 'sky');
	player = game.add.sprite(32, game.world.height - 150, 'player');
	game.physics.arcade.enable(player);
	
	
	player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    cursors = game.input.keyboard.createCursorKeys()
    


}

function update() {

    if (cursors.left.isDown) {
        player.body.velocity.x = -120;
    }
    if (cursors.right.isDown){
        player.body.velocity.x= 120;
    }
    if(cursors.up.isDown &&(player.body.touching.down || player.body.onFloor())){
        player.body.velocity.y = -350;
    }
}