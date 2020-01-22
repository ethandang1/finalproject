namespace SpriteKind {
    export const wall = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function Spawn () {
    // Spawns enemy walls
    for (let value of scene.getTilesByType(14)) {
        wall2 = sprites.create(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, SpriteKind.wall)
        scene.place(value, wall2)
    }
}
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    // You lose when you touch the brown blocks
    game.over(false)
})
function powerups () {
    for (let value of scene.getTilesByType(5)) {
        star = sprites.create(img`
b b b b b b b f f b b b b b b b 
b b b b b b f 5 5 f b b b b b b 
b b b b b b f 5 5 f b b b b b b 
b b b b b f 5 5 5 5 f b b b b b 
f f f f f f 5 5 5 5 f f f f f f 
f 4 5 5 5 5 5 5 5 5 5 5 5 5 4 f 
b f 4 5 5 5 f 5 5 f 5 5 5 4 f b 
b b f 4 5 5 f 5 5 f 5 5 4 f b b 
b b b f 4 5 5 5 5 5 5 4 f b b b 
b b b f 4 5 5 5 5 5 5 4 f b b b 
b b f 4 5 5 5 5 5 5 5 5 4 f b b 
b b f 4 5 5 5 4 4 5 5 5 4 f b b 
b f 4 5 5 4 4 f f 4 4 5 5 4 f b 
b f 4 4 4 f f b b f f 4 4 4 f b 
f 4 4 f f b b b b b b f f 4 4 f 
f f f b b b b b b b b b b f f f 
`, SpriteKind.Food)
        scene.place(value, star)
    }
}
// When sprite hits the brown they lose
sprites.onOverlap(SpriteKind.Player, SpriteKind.wall, function (sprite, otherSprite) {
    game.over(false)
})
// When sprite touches the stars they gain an extra
// life, sprite goes faster, the star is destroyed,
// sprite says a text, and a sound is played
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    thor.vx += 15
    otherSprite.destroy()
    thor.say("Powerup!!!", 1000)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.destroy()
})
function Background () {
    // Makes the black block a wall
    //
    scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(5, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, false)
    scene.setTile(13, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
    scene.setTile(7, img`
c c c c f f f f f f f c c c c c 
c c c f f f f f f f f c d d b b 
c c c f f f f f f f f c d d b b 
f f f f f f f f f f f c d d b b 
c c f f f f f f f f f c d d b b 
c c c f f f f f f f f c d d b b 
c c c f f f f f f f f c d d b b 
c f c f f f f f f f f c d d b b 
c f f f f f f f f f f c d d b b 
c c f c f f f f f f f c d d b b 
c c f c f f f f f f f c d d b b 
c c f f f f f f f f f c d d b b 
f f f f f f f f f f f c d d b b 
c c f f f f f f f f f c d d b b 
c c f f f f f f f f f c d d b b 
c c c c f f f f f f f c c c c c 
`, true)
    // At the start a text is created to give directions
    game.splash("Find the Exit...")
    game.splash("the Stars Will Give You ", "Another Life...")
    game.splash("Be Careful for the Bats!", "Press A to Throw Your Hammer.")
    // My map
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f d d d d d d d d e e e e e e d d d d d e e e e e e e d d d d d e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e e e e e e d 7 
f c c c c d d d e c c c c c c c e d d d c c c c c c c c d d d d c c c c c c c c c c c e d d d d d d d d d c c c c e d d d d d d c c c c e d d d d d d d d d d d d d d d e c b b b b b b 5 b b b b b b 7 
f b b b b e d e c b b b b b b b e d d c b b b b b b b b e d d c b b b b b b b b b b b e e d d d d d d d d c b b b e d d d d d d c b b b e d d d d d d d d d d d d d d d e c b b b b b b b b b b b b b 7 
f b b b b b e c b b b b b b b b e d d c b b b b b b b b e d d c b b b b b b b b b b b b e e d d d d d d c b b b b e d d d d d d c b b b e d d d d d d d d d d d d d d d e c b b b b b b b b b b b b b 7 
f b b b b b c b b b b b b b b b b e c b b b b b b b b b e d d c b b b b b b b b b b b b b e d d d d d c b b b b b e d d d d d d c b b b b e d d d d d d d d d d d d d e c b b b b b b b b b b b b b b 7 
f b b b b b b b b b b b b b b b b c b b b b b b b b b b e d d c b b b b b b b b b b b b b e e d d d d c b b b b b b e d d d d c b b b b b b e d d d d d d d d d d d e c b b b b b b b b c c c c c c c 7 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b e d d c b b b b b b c b b b b b b b e e d d c b b b b b b b e d d d d c b b b b b b b e d d d d d d d d d e c b b b b b b b b b e e e e e e e 7 
f b b b b b 5 b b c b b b b b 5 b b b b b b b b b b b b b e c b b b b b b b e c b b b b b b b e d c b b b b b b b b b e e e c b b b b 5 b b b b e d d d d d d d e c b b b b b b b b b e d d d d d d d 7 
f b b b b b b b b e c b b b b b b b b b b c b b b b b b b e c b b b b b b b e c b b b b b b b c c b b b b b 5 b b b b c c c b b b b b b b b b b b e d d d d d e c b b b b b b b b b e d d d d d d d d 7 
f b b b b b b b e d e c b b b b b b b b b e c b b b b b b c b b b b b b b e d e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e d d d e c b b b b b b 5 b b e d d d d d d d d d 7 
f b b b b b b e d d d e c b b b b b b b e d e c b b b b b b b b b b b b b e d e c b b b b b b b b b b b b b b b b c c c c c c c c b b b b b b b b b b e e e c b b b b b b b b b e d d d d d d d d d d 7 
f b b b b b b e d d d d c b b b b b b b e d e c b b b b 5 b b b b b b b e d d d e c b b b c c c c c c b b b b b b e e e e e e e e c b b b b b b b b b c c c b b b b b b b b b e d d d d d d d d d d d 7 
f b b b b b e e d d d d d c b b b b b e d d d d c b b b b b b b b b b b e d d d e c b b b e e e e e e c b b b b e d d d d d d d d d c b b b b b b b b b b b b b b b b b b b e d d d d d d d d d d d d 7 
f c c c c c e d d d d d d c c c c c c e d d d d c c c c c c c c c c c c d d d d d c c c c d d d d d d d c c c c d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c e d d d d d d d d d d d d 7 
f e e e e e d d d d d d d e e e e e e d d d d d e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e e e e e e e e e e e e d d d d d d d d d d d d d 7 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Sixteen)
}
// When A is pressed the sprite shoots a projectile
// and makes a sound
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f f f . . 
. . . . . . . f b b b b b f . . 
. . . . . . . f b b b b b f . . 
. . . . . . . f b b b b b f . . 
. f f f f f f f b b b b b f . . 
. f e e e e e e b b b b b f . . 
. f e e e e e e b b b b b f . . 
. f f f f f f f b b b b b f . . 
. . . . . . . f b b b b b f . . 
. . . . . . . f b b b b b f . . 
. . . . . . . f b b b b b f . . 
. . . . . . . f f f f f f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, thor, 400, 0)
    music.pewPew.play()
})
// Creates enemy sprite and they spawn on the green
// tile and they constantly go left
function enemy () {
    enemyy = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f 8 8 . . . . . . f 8 6 6 8 
f f 8 8 . . . . . . f 8 6 6 8 . 
f 8 f 8 . . . . . . f 6 8 8 8 . 
f f f 8 8 . 8 8 . f 8 6 6 8 8 . 
f f 8 9 8 8 9 8 8 f 6 8 6 6 8 . 
f f 6 9 6 8 9 6 8 f 6 8 8 6 8 . 
. 8 1 6 6 6 1 6 8 6 6 8 8 8 . . 
. 8 1 6 6 6 1 6 6 8 8 8 8 . . . 
8 6 6 6 6 6 6 6 6 6 8 8 . . . . 
8 6 1 f f 1 8 6 6 6 6 f . . . . 
f f 1 f f 1 f 6 6 6 6 f 8 . . . 
f f 9 9 9 9 f 6 6 6 6 f 8 8 . . 
. f 9 9 9 9 6 6 6 6 8 f . . . . 
. . f 6 6 6 6 6 6 8 f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Enemy)
    scene.placeOnRandomTile(enemyy, 7)
    enemyy.setVelocity(-200, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    thor.say("Ouch!", 100)
    music.powerDown.play()
})
// When sprite hits the "green block" they lose
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    game.over(true)
})
function Hero () {
    // Creates a sprite
    thor = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f b f b f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . f f . . . f b f f b f b f f b f . . . f f . . . . . . . . . . . 
. . . . . . . . f 1 f . f b f f f b f b f f f b f . f 1 f . . . . . . . . . . . 
. . . . . . . . f 1 1 f f b f f f b f b f f f b f f 1 1 f . . . . . . . . . . . 
. . . . . . . . . f 1 f b b b b b b b b b b b b b f 1 f . . . . . . . . . . . . 
. . . . . . . . . f 1 f b b b b b b b b b b b b b f 1 f . . . . . . . . . . . . 
. . . . . . . . . . f f b 5 5 d d d d d d d 5 5 b f f . . . . . . . . . . . . . 
. . . . . . . . . . . f 5 5 d d d d d d d d d 5 5 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 5 5 d 1 f d d d 1 f d 5 5 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 5 d f f d d d f f d 5 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d d d d d d d d d f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d d d d d d d d d f . . . f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f d d d d d f f . . . f b f . . . . . . . . . . . 
. . . . . . . . . . . . . f d 8 f f f f f 8 d f . f b b b f . . . . . . . . . . 
. . . . . . . . . . . . f d d f f 9 f 9 f f d d f . f b b b f . . . . . . . . . 
. . . . . . . . . . . f 8 8 f f f f f f f f f 8 8 f e f b f . . . . . . . . . . 
. . . . . . . . . . f d d 8 f b f f f f f b f 8 d d f . f . . . . . . . . . . . 
. . . . . . . . . . f d d f f b f 9 f 9 f b f f e d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f 5 5 5 5 5 5 5 f e f f . . . . . . . . . . . . . . 
. . . . . . . . . . f f 8 f b b f 9 f 9 f b b f 8 f f . . . . . . . . . . . . . 
. . . . . . . . . . f 8 8 f b b b f f f b b b f 8 8 f . . . . . . . . . . . . . 
. . . . . . . . . . f 8 f f 5 5 f 8 8 8 f 5 5 f f 8 f . . . . . . . . . . . . . 
. . . . . . . . . . f f f 5 5 5 f f f f f 5 5 5 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    // Makes the camera follow the sprite
    scene.cameraFollowSprite(thor)
    // Makes the sprite's go right constantly by 90
    thor.setVelocity(90, 0)
    // Allows the sprite to be moved with only the up and
    // down buttons
    controller.moveSprite(thor, 0, 200)
    // Sets the sprite position to (40,115)
    thor.setPosition(40, 115)
    // sets lives to 3
    info.setLife(3)
}
let enemyy: Sprite = null
let projectile: Sprite = null
let thor: Sprite = null
let star: Sprite = null
let wall2: Sprite = null
Background()
Hero()
powerups()
Spawn()
// This is a loop that causes the bat to spawn every
// 200 ms
game.onUpdateInterval(200, function () {
    enemy()
})
