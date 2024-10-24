# Tickrate changer for shapez.io

This mod allows you to change tickrate/TPS(Ticks per Second), to prevent slowing down production in late-game or on a poor CPU.  

It also unbinds tickrate from the framerate/FPS(Frames per Second) setting.  
It defaults to 20 TPS. This allows belts to transfer at 20/s with minimum lags.  

### Keybinds
`[`: Tickrate -1  
`]`: Tickrate +1  

### How to choose a tickrate
Show FPS (`F4` by default) to check desired tickrate and ticktime (shown as "Tick: x ms").  
Game slows down when `tickrate * ticktime > 1000ms`, which is easy to occur in late-game and 60FPS. This can't be checked by a speedometer.  

For best results, set a TPS that's equal to or a bit lower than the belt transfer rate (check info of the belt). For example, when transfer rate is 23.15/s, set TPS to 23.  

Worst transfer rate occurs when TPS is about 1.5 times belt transfer rate. The transfer rate is limited to TPS/2 then. This can be checked by a speedometer.  
So 30 TPS is still not good in late-game, capping transfer rate at 15 when it should be >=20.  
