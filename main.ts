namespace SpriteKind {
    export const sangdockgogi = SpriteKind.create()
    export const egg = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.sangdockgogi, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        sprites.destroy(생_닭고기)
        보유_생_닭고기 += 1
        리스트[0] = "생 닭고기" + 보유_생_닭고기
        pause(15000)
        닭 = sprites.create(img`
            . . . . . . . . . . b 2 2 b . . 
            . . . . . . . . . b 2 2 b . . . 
            . . . . . . b b b b b b b . . . 
            . . . . . b b 1 1 1 1 1 b . . . 
            . . . . b b 1 d 1 f 1 d 4 b b . 
            . . . . b 1 1 1 f f d d 4 4 4 b 
            . . . . b 1 1 d f b 4 4 4 4 b . 
            . . . b 1 1 1 1 1 4 4 4 4 b . . 
            . b b 1 1 1 1 1 1 1 1 1 1 b . . 
            b 1 1 1 1 1 1 1 1 1 1 1 1 1 b . 
            b 1 1 1 1 1 1 1 1 1 1 1 1 1 b . 
            b b 1 1 1 1 1 1 1 1 1 1 1 1 b . 
            b b 1 1 1 1 1 1 1 1 1 1 1 1 b . 
            b b b b b b b b b b b b b b . . 
            . . . . . 5 . . . . 5 . . . . . 
            . . . . . 5 . . . . 5 . . . . . 
            `, SpriteKind.Enemy)
        닭.setPosition(390, 270)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(리스트)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(닭)
        생_닭고기 = sprites.create(img`
            . . b b b b b b b . . . . . . . 
            . b b 3 3 3 3 3 3 b . . . . . . 
            b 3 3 3 3 3 3 3 3 3 b . . . . . 
            b 3 3 3 3 3 d d 3 3 b . . . . . 
            b 3 3 3 3 3 3 3 d 3 3 b . . . . 
            b 3 3 3 3 3 3 3 3 d 3 b . . . . 
            b 3 3 3 3 3 3 3 3 3 3 b . . . . 
            b 3 3 3 3 3 3 3 3 3 3 b . . . . 
            . b 3 3 3 3 3 3 3 3 3 b . . . . 
            . . b b 3 3 3 3 3 3 3 b . . . . 
            . . . b b 3 3 3 3 3 b b b . . . 
            . . . . . b b b b b b b d b b . 
            . . . . . . . . . . . b 1 1 1 b 
            . . . . . . . . . . . c 1 d d b 
            . . . . . . . . . . . c 1 b c . 
            . . . . . . . . . . . . c c . . 
            `, SpriteKind.sangdockgogi)
        생_닭고기.setPosition(닭.x, 닭.y)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.egg, function (sprite, otherSprite) {
	
})
let 리스트: string[] = []
let 생_닭고기: Sprite = null
let 닭: Sprite = null
let 보유_생_닭고기 = 0
tiles.setCurrentTilemap(tilemap`수준2`)
보유_생_닭고기 = 0
let 플레이어 = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(플레이어)
플레이어.setPosition(320, 320)
플레이어.setBounceOnWall(true)
닭 = sprites.create(img`
    . . . . . . . . . . b 2 2 b . . 
    . . . . . . . . . b 2 2 b . . . 
    . . . . . . b b b b b b b . . . 
    . . . . . b b 1 1 1 1 1 b . . . 
    . . . . b b 1 d 1 f 1 d 4 b b . 
    . . . . b 1 1 1 f f d d 4 4 4 b 
    . . . . b 1 1 d f b 4 4 4 4 b . 
    . . . b 1 1 1 1 1 4 4 4 4 b . . 
    . b b 1 1 1 1 1 1 1 1 1 1 b . . 
    b 1 1 1 1 1 1 1 1 1 1 1 1 1 b . 
    b 1 1 1 1 1 1 1 1 1 1 1 1 1 b . 
    b b 1 1 1 1 1 1 1 1 1 1 1 1 b . 
    b b 1 1 1 1 1 1 1 1 1 1 1 1 b . 
    b b b b b b b b b b b b b b . . 
    . . . . . 5 . . . . 5 . . . . . 
    . . . . . 5 . . . . 5 . . . . . 
    `, SpriteKind.Enemy)
닭.setPosition(390, 270)
animation.runImageAnimation(
플레이어,
[img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `,img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b e e 4 4 4 4 4 f b b f . 
    . . f 4 4 4 e d d d b f e f . . 
    . . f e 4 4 e d d d d c 4 e . . 
    . . . f e e d d b d b b f e . . 
    . . . f f 1 d 1 d 1 1 f f . . . 
    . . . . . f f f b b f . . . . . 
    `,img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `,img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b f 4 4 4 4 4 e e b b f . 
    . . f e f b d d d e 4 4 4 f . . 
    . . e 4 c d d d d e 4 4 e f . . 
    . . e f b b d b d d e e f . . . 
    . . . f f 1 1 d 1 d 1 f f . . . 
    . . . . . f b b f f f . . . . . 
    `],
200,
true
)
forever(function () {
    scene.cameraFollowSprite(플레이어)
})
