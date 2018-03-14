const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron
const url = require('url')
const path = require('path')

let mainWindow, loginWindow;

function createLogin () {
    loginWindow = new BrowserWindow({
        width: 300,
        height: 300
    });
    loginWindow.loadURL('http://127.0.0.1:3000/login.html')
    ipcMain.on('openMain', (event, arg) => {
        console.log('receive')
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600
        });
        mainWindow.hide();
        mainWindow.loadURL('http://127.0.0.1:3000/index.html')
        setTimeout(() => {
            loginWindow.close();
            loginWindow = null;
            mainWindow.show();
        }, 2000);
    })
}

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
}

app.on('ready', createLogin);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createLogin()
    }
})