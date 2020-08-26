const Electron = require('electron')
const DB = require('./DB')
const Definitions = require('./Definitions')

Electron.app.whenReady()
.then(() => {

  const { width, height } = Electron.screen.getPrimaryDisplay().workAreaSize

  const window = new Electron.BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    height: height,
    width: Math.ceil(width / 2)
  })

  window.setPosition(999999, 0)

  window.loadFile('index.html')

  window.toggleDevTools()

})