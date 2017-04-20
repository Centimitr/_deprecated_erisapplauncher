const {server} = require('./x');
const gopher = require('./gopher');
gopher.start();

const {app, Menu, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let main;
function createWindow() {
    main = new BrowserWindow({
        width: 860, height: 640,
        // x: 48, y: 64,
        // frame: false,
        // alwaysOnTop: true,
        titleBarStyle: 'hidden-inset',
        // titleBarStyle: 'inset',
        // vibrancy: 'ultra-dark',
        vibrancy: 'light',
        show: false,
        // autoHideMenuBar: true,
        webPreferences: {
            webSecurity: false
        }
    });
    {
        const template = [
            {
                label: 'View',
                submenu: [
                    {
                        role: 'togglefullscreen'
                    }
                ]
            },
            {
                role: 'window',
                submenu: [
                    {
                        role: 'minimize'
                    },
                    {
                        role: 'close'
                    }
                ]
            },
            {
                role: 'help',
                submenu: [
                    {
                        label: 'Learn More',
                        click () {
                            require('electron').shell.openExternal('http://devbycm.com')
                        }
                    }
                ]
            }
        ];
        if (process.platform === 'darwin') {
            template.unshift({
                label: app.getName(),
                submenu: [
                    {
                        role: 'about'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        role: 'services',
                        submenu: []
                    },
                    {
                        type: 'separator'
                    },
                    {
                        role: 'hide'
                    },
                    {
                        role: 'hideothers'
                    },
                    {
                        role: 'unhide'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        role: 'quit'
                    }
                ]
            });
            // Window menu.
            template[2].submenu = [
                {
                    label: 'Close',
                    accelerator: 'CmdOrCtrl+W',
                    role: 'close'
                },
                {
                    label: 'Minimize',
                    accelerator: 'CmdOrCtrl+M',
                    role: 'minimize'
                }, {
                    label: 'Zoom',
                    accelerator: 'Ctrl+Cmd+=',
                    role: 'zoom'
                }, {
                    label: 'Always On Top',
                    type: 'checkbox',
                    checked: false,
                    click: function (item, win) {
                        win.setAlwaysOnTop(!win.isAlwaysOnTop());
                        item.checked = win.isAlwaysOnTop();
                    }
                }, {
                    type: 'separator'
                }, {
                    label: 'Developer Tools',
                    accelerator: 'Cmd+Alt+I',
                    click: function (item, win) {
                        if (!win.webContents.isDevToolsOpened()) {
                            win.webContents.openDevTools();
                        }
                    }
                }, {
                    type: 'separator'
                },
                {
                    label: 'Bring All to Front',
                    role: 'front'
                }
            ];
        }
        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }

    const associatePath = process.argv[0];
    main.webContents.on('dom-ready', () => {
        main.webContents.send('path', associatePath);
        main.webContents.send('port', gopher.port);
    });
    // main.webContents.openDevTools();
    gopher.onStart(port => {
        main.webContents.send('port', port)
    });

    main.loadURL('http://localhost:4200');
    // main.loadURL(url.format({
    //     pathname: path.join(__dirname, 'app', 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }));

    // main.loadURL(url.format({
    //     pathname: path.join(__dirname, 'maid', 'maid.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }));
    //
    // main.loadURL('http://localhost:9000');

    // save img from page
    main.on('closed', function () {
        main = null
    });
}

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
