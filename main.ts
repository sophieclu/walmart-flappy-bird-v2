controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    character.vy = -75
    pause(100)
    character.ay = 200
    pause(200)
    character.ay = 120
})
function createMap () {
    scene.setTile(14, img`
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b c c 
        d b b b b b b c d b b b b c b c 
        d b b b b b b c d b b b d d b c 
        d b b b b b b c d b b c b b b c 
        d b b b b b b c d b c c b b b c 
        d b b b b b b b d b c c b b b b 
        c c c c c c b a c c c c c c b a 
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b c c d b b b b b b c 
        d b b b b c c c d b b b b b b c 
        d b b b b c c b d b b b b b b b 
        c c c c c c c a c c c c c c c a 
        `, true)
    scene.setTile(6, img`
        c c c c c c c c c c c c c c c c 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 6 6 6 8 8 8 6 6 6 6 8 8 8 
        6 6 8 8 8 6 6 6 6 6 6 8 8 8 8 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        9 9 6 6 6 6 6 9 9 9 9 6 6 6 9 9 
        6 6 6 6 9 9 9 6 6 6 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, true)
    scene.setTile(15, img`
        d d d d d d d d d d d d d d b c 
        d d d d d d d d d d d d d d b c 
        c c b c c b c c b c c b c c b c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c b d c b d c b d c b d c b d c 
        c c b c c b c c b c c b c c b c 
        d d d d d d d d d d d d d d b c 
        d d d d d d d d d d d d d d b c 
        `, true)
    scene.setTile(7, img`
        . . . f f f f e e 8 f f f . . . 
        . . f 8 f f 8 8 e 6 e e e f . . 
        . f 8 8 8 6 8 8 6 6 8 e e 6 f . 
        8 8 8 8 6 6 6 8 6 6 6 8 6 6 8 8 
        8 6 6 8 6 6 6 6 6 7 6 6 6 8 6 8 
        8 6 6 6 7 6 6 6 7 7 6 6 7 6 6 8 
        6 8 6 6 7 7 6 7 7 7 6 7 7 6 8 6 
        6 7 7 7 6 7 7 7 7 6 7 7 7 6 7 6 
        8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
        8 6 7 7 7 7 7 7 7 7 7 7 7 7 6 8 
        6 7 6 7 7 7 7 7 7 7 7 7 7 6 7 6 
        6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
        . 6 7 7 7 7 7 7 7 7 7 7 7 7 6 . 
        . 6 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        `, true)
    scene.setTile(2, img`
        5 5 4 2 2 2 2 2 4 2 2 2 2 4 4 5 
        5 4 2 2 2 2 2 4 4 4 4 4 4 4 5 5 
        4 2 2 4 2 4 4 4 5 5 5 5 5 5 4 4 
        2 2 2 2 4 4 5 5 4 4 4 5 4 5 4 4 
        4 4 2 4 4 5 5 4 4 2 2 4 5 4 4 2 
        4 4 2 4 5 4 4 2 2 2 2 4 5 4 4 2 
        2 2 4 5 4 4 2 2 2 4 4 2 5 5 4 2 
        4 4 5 5 4 2 2 2 2 4 4 2 4 5 5 4 
        5 5 5 4 2 2 4 2 2 2 2 2 4 5 5 5 
        4 5 4 4 2 2 2 2 2 2 2 2 4 5 4 4 
        4 5 5 2 2 4 2 2 2 4 2 2 4 5 5 4 
        5 5 4 2 4 2 4 2 2 2 2 4 5 5 5 5 
        4 5 5 4 2 4 2 2 2 2 2 4 5 4 4 4 
        4 5 5 5 2 2 2 4 4 4 5 5 5 4 2 2 
        4 5 5 4 5 5 5 5 5 5 5 4 4 2 2 2 
        4 5 5 4 4 4 4 4 4 4 4 2 2 2 4 4 
        `, true)
    scene.setTile(12, img`
        a c c c c c c c c c c c c c c a 
        c d d c b b b b b b b b c d d c 
        c d d c b b b e e b b b c d d c 
        c d d c b b e 4 4 e b b c d d c 
        c d d c b b 4 e 4 4 b b c d d c 
        c b b c 4 b 5 f 4 5 b 4 c b b c 
        c d d c b e 4 5 5 4 e b c d d c 
        c d d c b e 5 b b 5 e b c d d c 
        c d d c 4 b b 5 5 b b 4 c d d c 
        c d d c b b b b b b b b c d d c 
        c b b c b b b b b b b b c b b c 
        c c c c c c c c c c c c c c c c 
        c d d d d d d d d d d d d d d c 
        c d d d d d d d d d d d d d d c 
        c b b b b b b b b b b b b b b c 
        c b b b b b b b b b b b b b b c 
        `, true)
    scene.setTile(13, img`
        e f 2 4 5 1 1 1 1 1 5 4 2 f e . 
        . e f 2 4 5 1 1 1 5 4 2 f e . . 
        . . e f 2 4 5 1 5 4 2 f e . . . 
        . . . e f 2 4 5 4 2 f e . . . . 
        . . . . e f 2 4 2 f e . . . . . 
        . . . . . e f 2 f e . . . . . . 
        . . . . . . e f e . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(3, img`
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
        `, false)
    scene.setTile(5, img`
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
        `, false)
    scene.setTile(4, img`
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
        `, false)
    if (room == 1) {
        scene.setTileMap(img`
            ...777eee777eee..eeee7777e...eee7777eeee..........eee................4.....eeeeeee.....eee........dd.dd..dd.dd.....
            33....eee...eee..eeee........eee....eeee....4.4...eee.....4................eeeeeee.....eee........dd.dd..dd.dd.....
            ............eee..2222........777..................................22...................eee........................c
            .......4..........22..................4....77777...4.....ee......2222.........4........eee......................fff
            ff...........4.....2..........4............eeee7...4.....ee.....222222........................eee...............555
            .........................eee...............eeee7.........ee.....eeeeee.....222222.............eee..................
            ......eee........4444....eee.....222.......eeee7ee7......ee.....eeeeee.....222222.............eee.....7777777777...
            666666eee666eee66....6eeeeee66666eee6666666eeeeeee76666666e666666eeeee666662222226666666666666eee66666eeeeeeeeee666
            `)
    } else if (room == 2) {
        scene.setTileMap(img`
            ..77ee777ee777777777777eee...eeeee.....222222222....777eee777....eeeee.......eeeeeee...d..d..d......e...e....e.....
            ....ee...77..................eeeee.........222.........777.......eeeee.......eeeeeee................e...e...ee....c
            ....ee.......................eeeee..........22....................d.d...........................................fff
            ..............22222..........eeeee...77............ee....................77.............e..e..e.................fff
            ..............e22ee..................ee............ee....................ee..eeeeeee....e..e..e.............ee.....
            .........ee...ee2ee..................ee............ee...........ffffff...ee..eeeeeee....e..e..e.....777777...e.....
            ff..ee...ee...eeeee..................ee...eeee.....ee...........ffffff...ee..eeeeeee....e..e..e.....eeeeee...e.....
            ff66ee666ee666eeeee6666eeee6666666666ee666eeee66666ee66666666666ffffff666ee66eeeeeee6666e66e66e66666eeeeee666e66666
            `)
    }
}
function createSprite () {
    character = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    controller.moveSprite(character, 50, 0)
    character.x = 0
    character.ay = 120
    scene.cameraFollowSprite(character)
    scene.placeOnRandomTile(character, 3)
}
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
	
})
function createEnemy () {
    evilGuy = sprites.create(img`
        ...............ff.......
        .............ff2ffff....
        ............ff2feeeeff..
        ...........ff22feeeeeff.
        ...........feeeeffeeeef.
        ..........fe2222eefffff.
        ..........f2effff222efff
        ..........fffeeeffffffff
        ..........fee44fbe44efef
        ...........feddfb4d4eef.
        ..........c.eeddd4eeef..
        ....ccccccceddee2222f...
        .....dddddcedd44e444f...
        ......ccccc.eeeefffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    scene.placeOnRandomTile(evilGuy, 5)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy()
    otherSprite.setStayInScreen(true)
    otherSprite.setBounceOnWall(true)
})
function createCoins () {
    tile_list = scene.getTilesByType(4)
    for (let value of tile_list) {
        coins = sprites.create(img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value, coins)
        animation.runMovementAnimation(
        coins,
        animation.animationPresets(animation.bobbing),
        2000,
        false
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.beamUp.play()
})
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
	
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
	
})
let bullet: Sprite = null
let coins: Sprite = null
let tile_list: tiles.Tile[] = []
let evilGuy: Sprite = null
let character: Sprite = null
let room = 0
info.setLife(5)
room = 1
createMap()
createCoins()
createSprite()
createEnemy()
game.onUpdateInterval(500, function () {
    bullet = sprites.createProjectileFromSprite(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ......77............
        .....751577.........
        ......77............
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, evilGuy, randint(5, -100), randint(-40, 50))
    bullet.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
