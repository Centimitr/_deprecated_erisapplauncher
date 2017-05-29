const {server} = require('./x')
const gopher = require('./gopher')
gopher.start()

const {app, Menu, BrowserWindow, dialog} = require('electron')
const path = require('path')
const url = require('url')

app.commandLine.appendSwitch('disable-http-cache')
app.commandLine.appendSwitch('no-proxy-server')
app.commandLine.appendSwitch('ignore-certificate-errors')
let associatePath

let main
function createWindow () {
  const size = require('electron').screen.getPrimaryDisplay().workAreaSize
  const wh = Math.floor(size.height * 0.85), ww = Math.floor(wh / 0.68)
  main = new BrowserWindow({
    width:           ww,
    height:          wh,
    minWidth:        480,
    minHeight:       320,
    titleBarStyle:   'hidden-inset',
    // titleBarStyle:   'inset',
    // vibrancy: 'ultra-dark',
    vibrancy:        'light',
    // backgroundColor: '#000000',
    // backgroundColor: '#dedede',
    show:            false,
    autoHideMenuBar: true,
    webPreferences:  {
      webSecurity:          false,
      scrollBounce:         false,
      experimentalFeatures: true,
      plugins:              false,
    },
  })
  // Menu.setApplicationMenu(Menu.buildFromTemplate([]))

  // main.webContents.on('dom-ready', () => {
  //   main.webContents.send('path', associatePath)
  //   main.webContents.send('port', gopher.port)
  // })
  // main.webContents.openDevTools();
  gopher.onStart(port => {
    main.webContents.send('port', port)
  })
  // main.loadURL('file://' + path.join(__dirname, 'test.html?p=' + associatePath));
  // main.webContents.openDevTools()
  main.loadURL('http://localhost:4200')
  // main.loadURL('file://' + path.join(__dirname, 'credits.html'));

  // main.loadURL('file:///Users/shixiao/Playground/canvas/a.html')
  // main.loadURL(url.format({
  //     pathname: path.join(__dirname, 'maid', 'maid.html'),
  //     protocol: 'file:',
  //     slashes: true
  // }));
  //
  associatePath = dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory', 'showHiddenFiles'],
    filters:    [
      {name: 'Images', extensions: ['webp', 'jpg', 'png', 'gif', 'jpeg']},
      {name: 'Manga', extensions: ['eris']},
      {name: 'Archive', extensions: ['rar', 'zip']},
    ],
  }).pop()
  main.webContents.send('path', associatePath)
  main.webContents.send('port', gopher.port)
  main.on('closed', function () {
    main = null
  })
}

app.on('open-file', (e, p) => {
  associatePath = p
  if (main) main.webContents.send('path', p)
})
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (main === null) createWindow()
})
app.on('quit', () => gopher.kill())
