controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . . . . . . 
        . . . . 4 4 4 4 . . . . . . . . 
        . . . 4 f 4 f 4 . . . . . . . . 
        . . . 4 4 4 4 f . . . . . . . . 
        . . . . f 4 f 4 . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . 4 4 4 4 4 . . . . . . . . 
        . . . 4 . 4 . 4 . . . . . . . . 
        . . . 4 . 4 . 4 . . . . . . . . 
        . . . 4 . 4 . 4 . . . . . . . . 
        . . . 4 . 4 . 4 . . . . . . . . 
        . . . . . 4 . . . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.disintegrate, 100)
    info.changeScoreBy(1)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 4 4 . . . . . . . . . . 
    . . . f 4 f . . . . . . . . . . 
    . . . 4 4 4 . . . . . . . . . . 
    . . . 4 f 4 . . . . . . . . . . 
    . . f f f f f . . e e . . . . . 
    . . 4 f f f 4 . . e e . . . . . 
    . . 4 f f f 4 . e . . . . . . . 
    . . 4 f f f 4 e . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . 4 . 4 . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
scene.setBackgroundColor(8)
for (let index = 0; index < 10; index++) {
    mySprite2 = sprites.create(img`
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
        `, SpriteKind.Player)
    mySprite.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f 4 f . . . . . . . . . . 
    . . . 4 f 4 . . . . . . . . . . 
    . . . f 4 f . . . . . . . . . . 
    . . . 4 4 4 . . . . . . . . . . 
    . 4 f f f f f 4 . . . . . . . . 
    . 4 . f f f . 4 . . . . . . . . 
    . 4 . f f f . 4 . . . . . . . . 
    . 4 . f f 1 . 4 . . . . . . . . 
    . . 1 1 1 1 . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    `],
200,
true
)
game.onUpdateInterval(2100, function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . 4 f f 4 . . . . 
        . . . . . . . . 4 f f 4 . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        `, SpriteKind.Enemy)
    mySprite.setPosition(5, randint(5, 115))
    mySprite.vx = -75
})
