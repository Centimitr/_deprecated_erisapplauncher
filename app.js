const {server} = require('./x');
const gopher = require('./gopher');
gopher.start();

const {app, Menu, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let associatePath;

let main;
function createWindow() {
    const size = require('electron').screen.getPrimaryDisplay().workAreaSize;
    const wh = Math.floor(size.height * 0.85), ww = Math.floor(wh / 0.618);
    main = new BrowserWindow({
        width: ww, height: wh,
        minWidth: 480, minHeight: 320,
        titleBarStyle: 'hidden-inset',
        // titleBarStyle: 'inset',
        // vibrancy: 'ultra-dark',
        // vibrancy: 'light',
        backgroundColor: '#000000',
        // show: false,
        // autoHideMenuBar: true,
        webPreferences: {
            webSecurity: false,
            scrollBounce: true,
        }
    });
    Menu.setApplicationMenu(Menu.buildFromTemplate([]));

    main.webContents.on('dom-ready', () => {
        main.webContents.send('path', associatePath);
        main.webContents.send('port', gopher.port);
    });
    // main.webContents.openDevTools();
    gopher.onStart(port => {
        main.webContents.send('port', port)
    });

    // main.loadURL('file://' + path.join(__dirname, 'test.html?p=' + associatePath));
    // main.webContents.openDevTools();
    // main.loadURL('http://localhost:4200');
    // main.loadURL(url.format({
    //     pathname: path.join(__dirname, 'app', 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }));

    main.loadURL(url.format({
        pathname: path.join(__dirname, 'maid', 'maid.html'),
        protocol: 'file:',
        slashes: true
    }));

    // main.loadURL('http://localhost:9000');

    // save img from page
    main.on('closed', function () {
        main = null
    });
}

app.on('open-file', (e, p) => {
    console.log(e, p);
    associatePath = p;
});
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (main === null) {
        createWindow()
    }
});
app.on('quit', function () {
    gopher.kill();
});

