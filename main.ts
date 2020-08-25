let afstand = 0
basic.forever(function () {
    afstand = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    basic.showNumber(afstand)
    basic.pause(500)
})
