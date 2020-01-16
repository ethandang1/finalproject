scene.setTileMap(img`
f f f e e e e e e e f f f f e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f b b b e e e e e b b b b b b e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b e e e b b b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b e b b b b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b 7 b b b b b b b b b 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b 7 7 7 b b b b b b b 7 7 7 2 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b 7 7 7 2 7 b b b b b b 7 2 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b 7 2 7 7 7 b b b b b b b b e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b 7 7 7 b b b b b b b b b e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b e b b b b b b b b b b e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.Sixteen)
let thor = sprites.create(img`
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
thor.setVelocity(50, 0)
controller.moveSprite(thor, 0, 50)
thor.setPosition(40, 0)
