const { app, BrowserWindow } = require('electron');
const ipc = require("electron").ipcMain;
const path = require('path');
// const { setMainMenu } = require("./js/main-menu");

let mainWindow;


app.on("ready", () => {
    mainWindow = new BrowserWindow({
        show: false
    });

    mainWindow.loadURL(path.join("file://", __dirname, "..", "index.html"));

    mainWindow.on("ready-to-show", () => {
        mainWindow.show();
    });

    // setMainMenu();
});
