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
function Hero () {
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
. . . . . . . . . . . . . f d 4 f f f f f 4 d f . f b b b f . . . . . . . . . . 
. . . . . . . . . . . . f d d f f 9 f 9 f f d d f . f b b b f . . . . . . . . . 
. . . . . . . . . . . f 2 2 f f f f f f f f f 2 2 f e f b f . . . . . . . . . . 
. . . . . . . . . . f d d 2 f b f f f f f b f 2 d d f . f . . . . . . . . . . . 
. . . . . . . . . . f d d f f b f 9 f 9 f b f f e d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f 5 5 5 5 5 5 5 f e f f . . . . . . . . . . . . . . 
. . . . . . . . . . f f 2 f b b f 9 f 9 f b b f 2 f f . . . . . . . . . . . . . 
. . . . . . . . . . f 2 2 f b b b f f f b b b f 2 2 f . . . . . . . . . . . . . 
. . . . . . . . . . f 2 f f 5 5 f 2 2 2 f 5 5 f f 2 f . . . . . . . . . . . . . 
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
    scene.cameraFollowSprite(thor)
    thor.setVelocity(90, 0)
    controller.moveSprite(thor, 0, 200)
    thor.setPosition(40, 115)
}
function Background () {
    scene.setTileMap(img`
f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f c c c e e e e e c c c c c c e e e e e c c c c c c c e e e e e c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b e e e c b b b b b b b e e e c b b b b b b b b e e e c b b b b b 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b e c b b b b b b b b e e e c b b b b b b b b e e e c b b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b c b b b b b b b b b b e c b b b b b b b b b e e e c b b b b b e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b c b b b b b b b b b b e e e c b b b b b e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e c b b b b e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b 5 b b c b b b b b 5 b b b b b b b b b b b b b e c b b b b b e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b e c b b b b b b b b b b c b b b b b b b e c b b b b b e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b e e e c b b b b b b b b b e c b b b b b b c b b b b b b e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b e e e e e c b b b b b b b e e e c b b b b b b b b b b b e e e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b e e e e e c b b b b b b b e e e c b b b b b b b b b b b e e e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b e e e e e e e c b b b b b e e e e e c b 5 b b b b b b b b e e e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f c c c c c e e e e e e e c c c c c c e e e e e c c c c c c c c c c c e e e e e c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f 
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
    game.splash("Find the Exit...")
    game.splash("the Stars Will Increase ", "Your Speed...")
    game.splash("Be Careful for the Bats!", "Press A to Throw Your Hammer.")
}
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
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    thor.vx += 20
    otherSprite.destroy()
})
let star: Sprite = null
let thor: Sprite = null
Background()
Hero()
powerups()
