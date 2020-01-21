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
sprites.onOverlap(SpriteKind.Player, SpriteKind.wall, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    thor.vx += 15
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.destroy()
})
function Background () {
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f d d d d d d d d e e e e e e d d d d d e e e e e e e d d d d d e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e e e e e e d f 
f c c c c d d d e c c c c c c c e d d d c c c c c c c c d d d d c c c c c c c c c c c e d d d d d d d d d c c c c e d d d d d d c c c c e d d d d d d d d d d d d d d d e c b b b b b b 5 b b b b b 7 f 
f b b b b e d e c b b b b b b b e d d c b b b b b b b b e d d c b b b b b b b b b b b e e d d d d d d d d c b b b e d d d d d d c b b b e d d d d d d d d d d d d d d d e c b b b b b b b b b b b b 7 f 
f b b b b b e c b b b b b b b b e d d c b b b b b b b b e d d c b b b b b b b b b b b b e e d d d d d d c b b b b e d d d d d d c b b b e d d d d d d d d d d d d d d d e c b b b b b b b b b b b b 7 f 
f b b b b b c b b b b b b b b b b e c b b b b b b b b b e d d c b b b b b b b b b b b b b e d d d d d c b b b b b e d d d d d d c b b b b e d d d d d d d d d d d d d e c b b b b b b b b b b b b b 7 f 
f b b b b b b b b b b b b b b b b c b b b b b b b b b b e d d c b b b b b b b b b b b b b e e d d d d c b b b b b b e d d d d c b b b b b b e d d d d d d d d d d d e c b b b b b b b b c c c c c c 7 f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b e d d c b b b b b b c b b b b b b b e e d d c b b b b b b b e d d d d c b b b b b b b e d d d d d d d d d e c b b b b b b b b b e e e e e c 7 f 
f b b b b b 5 b b c b b b b b 5 b b b b b b b b b b b b b e c b b b b b b b e c b b b b b b b e d c b b b b b b b b b e e e c b b b b 5 b b b b e d d d d d d d e c b b b b b b b b b e d d d d d c 7 f 
f b b b b b b b b e c b b b b b b b b b b c b b b b b b b e c b b b b b b b e c b b b b b b b c c b b b b b 5 b b b b c c c b b b b b b b b b b b e d d d d d e c b b b b b b b b b e d d d d d d c 7 f 
f b b b b b b b e d e c b b b b b b b b b e c b b b b b b c b b b b b b b e d e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e d d d e c b b b b b b 5 b b e d d d d d d d c 7 f 
f b b b b b b e d d d e c b b b b b b b e d e c b b b b b b b b b b b b b e d e c b b b b b b b b b b b b b b b b c c c c c c c c b b b b b b b b b b e e e c b b b b b b b b b e d d d d d d d d c 7 f 
f b b b b b b e d d d d c b b b b b b b e d e c b b b b 5 b b b b b b b e d d d e c b b b c c c c c c b b b b b b e e e e e e e e c b b b b b b b b b c c c b b b b b b b b b e d d d d d d d d d c 7 f 
f b b b b b e e d d d d d c b b b b b e d d d d c b b b b b b b b b b b e d d d e c b b b e e e e e e c b b b b e d d d d d d d d d c b b b b b b b b b b b b b b b b b b b e d d d d d d d d d d c 7 f 
f c c c c c e d d d d d d c c c c c c e d d d d c c c c c c c c c c c c d d d d d c c c c d d d d d d d c c c c d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c e d d d d d d d d d d c 7 f 
f e e e e e d d d d d d d e e e e e e d d d d d e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Sixteen)
    scene.setTile(14, img`
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
    game.splash("Find the Exit...")
    game.splash("the Stars Will Give You ", "Another Life...")
    game.splash("Be Careful for the Bats!", "Press A to Throw Your Hammer.")
}
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
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
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
    info.setLife(7)
}
let projectile: Sprite = null
let thor: Sprite = null
let star: Sprite = null
let enemyy: Sprite = null
let wall2: Sprite = null
Background()
Hero()
powerups()
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
game.onUpdateInterval(200, function () {
    enemy()
})
