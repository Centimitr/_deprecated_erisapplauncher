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
        vibrancy: 'ultra-dark',
        // show: false,
        // autoHideMenuBar: true,
        // focusable: false,
        // movable: false,
        // resizable: false,
        // minimizable: false,
        // maximizable: false
    });

    // const template = [
    //     {
    //         label: 'View',
    //         submenu: [
    //             {
    //                 role: 'togglefullscreen'
    //             }
    //         ]
    //     },
    //     {
    //         role: 'window',
    //         submenu: [
    //             {
    //                 role: 'minimize'
    //             },
    //             {
    //                 role: 'close'
    //             }
    //         ]
    //     },
    //     {
    //         role: 'help',
    //         submenu: [
    //             {
    //                 label: 'Learn More',
    //                 click () {
    //                     require('electron').shell.openExternal('http://devbycm.com')
    //                 }
    //             }
    //         ]
    //     }
    // ];
    // if (process.platform === 'darwin') {
    //     template.unshift({
    //         label: app.getName(),
    //         submenu: [
    //             {
    //                 role: 'about'
    //             },
    //             {
    //                 type: 'separator'
    //             },
    //             {
    //                 role: 'services',
    //                 submenu: []
    //             },
    //             {
    //                 type: 'separator'
    //             },
    //             {
    //                 role: 'hide'
    //             },
    //             {
    //                 role: 'hideothers'
    //             },
    //             {
    //                 role: 'unhide'
    //             },
    //             {
    //                 type: 'separator'
    //             },
    //             {
    //                 role: 'quit'
    //             }
    //         ]
    //     });
    //     // Window menu.
    //     template[2].submenu = [
    //         {
    //             label: 'Close',
    //             accelerator: 'CmdOrCtrl+W',
    //             role: 'close'
    //         },
    //         {
    //             label: 'Minimize',
    //             accelerator: 'CmdOrCtrl+M',
    //             role: 'minimize'
    //         },
    //         {
    //             label: 'Zoom',
    //             role: 'zoom'
    //         },
    //         {
    //             type: 'separator'
    //         },
    //         {
    //             label: 'Bring All to Front',
    //             role: 'front'
    //         }
    //     ];
    // }
    // const menu = Menu.buildFromTemplate(template);
    // Menu.setApplicationMenu(menu);

    main.loadURL(url.format({
        pathname: path.join(__dirname, 'docs', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // main.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }));

    // console.log(process.argv);
    // const entry = {
    //     path: process.argv[0],
    //     argv: process.argv
    // };
    // main.loadURL('http://localhost:4200' + '?entry=' + JSON.stringify(entry));
    main.on('closed', function () {
        main = null
    })
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
