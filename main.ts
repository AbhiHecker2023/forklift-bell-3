radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function Forward () {
    wuKong.setAllMotor(20, 20)
}
function forkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function forkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function Backward () {
    wuKong.setAllMotor(-20, -20)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(5)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else {
    	
    }
})
