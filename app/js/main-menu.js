const { app, Menu } = require('electron');
const isWindows = process.platform;

module.exports = {
    setMainMenu
};

function setMainMenu() {
    let template = [
        {
            label: "File",
            submenu: [
                {
                    label: "Exit",
                    accelerator: "Ctrl+Q",
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: "Edit",
            submenu: [
                { role: "undo" },
                { role: "redo" },
                { type: "separator" },
                { role: "cut" },
                { role: "copy" },
                { role: "paste" },
                { role: "selectall" }
            ]
        },
        {
            label: "Help",
            submenu: [
                { role: "about" }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

