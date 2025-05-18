control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_4_DOWN, function () {
    // rechts
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, 150)
})
// ─── GRIJPER  OPEN / DICHT ───────────────────────────────────────────
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_C_DOWN, function () {
    // dicht
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S3, 45)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_DOWN, function () {
    // open
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S3, 120)
})
// ─── BASIS  LINKS / RECHTS ───────────────────────────────────────────
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_3_DOWN, function () {
    // links
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, 30)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_2_DOWN, function () {
    // arm omlaag
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, 160)
})
// ─── ARM  OP / NEER ───────────────────────────────────────────────────
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_1_DOWN, function () {
    // arm omhoog
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, 20)
})
