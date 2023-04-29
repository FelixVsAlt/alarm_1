basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        . # # # .
        # . . . #
        `)
    for (let index = 0; index < 120; index++) {
        basic.pause(5000)
        basic.pause(5000)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 6; index++) {
        basic.pause(5000)
        basic.pause(5000)
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 6; index++) {
        basic.pause(5000)
        basic.pause(5000)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Breve))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        . # # # .
        # . . . #
        `)
    break;
})
