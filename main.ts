sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy(effects.fire, 100)
    asteriod.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, tie_fighter, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    asteriod.destroy()
    info.changeLifeBy(-1)
})
let asteriod: Sprite = null
let projectile: Sprite = null
let tie_fighter: Sprite = null
tie_fighter = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.showLongText("welcome to    empire tie    fighter       asteriod field", DialogLayout.Center)
game.showLongText("controls are click q to shoot click left arrows are to go back right arrow is to go forward up arrow is to go up and down arrow is to go down simple  ", DialogLayout.Bottom)
game.showLongText("i must get to darth vader and you are here to help me  music will play and u have one shot at this rember if i fail darth vader will not be pleased", DialogLayout.Full)
tie_fighter.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(tie_fighter, 200, 200)
game.onUpdateInterval(500, function () {
    asteriod = sprites.create(img`
. . e e e e e . . . . . . . . . 
. e e e e e e e . . . . . . . . 
. e e e e e e e . . . . . . . . 
. e e e e e e e . . . . . . . . 
. e e e e e e e . . . . . . . . 
. e e e e e e e . . . . . . . . 
. . e e e e e . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    asteriod.setVelocity(-100, 0)
    asteriod.setPosition(180, Math.randomRange(0, 120))
})
forever(function () {
    music.playMelody("G B A G C5 B A B ", 132)
    music.setVolume(255)
})
