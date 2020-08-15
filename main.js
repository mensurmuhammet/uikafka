const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Tarayıcı penceresini oluştur.
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame:false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // ve uygulamanın index.html dosyasını yükle.
  win.loadFile('src/homepage.html')
}

app.whenReady().then(createWindow)

