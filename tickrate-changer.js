// @ts-nocheck
const METADATA = {
    website: "",
    author: "Blue_Beaker",
    name: "Tickrate Changer",
    version: "1",
    id: "tickrate-changer",
    description: "Change tickrates to componsate performance and belt speed",
    minimumGameVersion: ">=1.5.0",
    doesNotAffectSavegame: true,
    
    settings: {
        tickrate: 20,
    },
};

class Mod extends shapez.Mod {
    init() {
        this.signals.gameStarted.add(root => {
                root.dynamicTickrate.setTickRate(this.settings.tickrate)
        });
        this.modInterface.registerIngameKeybinding({
            id: "tick_down",
            keyCode: 219,
            translation: "Tickrate -1",
            modifiers: {
                shift: false,
            },
            handler: root => {
                this.settings.tickrate--
                root.dynamicTickrate.setTickRate(this.settings.tickrate)
                this.saveSettings();
            },
        });
        this.modInterface.registerIngameKeybinding({
            id: "tick_up",
            keyCode: 221,
            translation: "Tickrate +1",
            modifiers: {
                shift: false,
            },
            handler: root => {
                this.settings.tickrate++
                root.dynamicTickrate.setTickRate(this.settings.tickrate)
                this.saveSettings();
            },
        });
    }
} 
