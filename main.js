// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    BrowserView,
    Menu,
} = require('electron')

const baseUrl = `file://${__dirname}/dist/index.html#/`
// const baseUrl = `http://localhost:8080/index.html#/`
const path = require('path')
const isMac = process.platform === 'darwin'
let mainWindow

const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [{
                role: 'about',
                label: '关于'
            },
            {
                type: 'separator'
            },
            {
                role: 'services',
                label: '服务'
            },
            {
                type: 'separator'
            },
            {
                role: 'hide',
                label: '隐藏窗口'
            },
            {
                role: 'hideOthers',
                label: '隐藏其它窗口'
            },
            {
                role: 'unhide',
                label: '显示窗口'
            },
            {
                type: 'separator'
            },
            {
                role: 'quit',
                label: '退出'
            }
        ]
    }] : []),
    // { role: 'fileMenu' }
    {
        label: '文件',
        submenu: [
            isMac ? {
                role: 'close',
                label: '退出'
            } : {
                role: 'quit',
                label: '退出'
            }, {
                label: '主页',
                click: async () => {
                    mainWindow.loadURL(baseUrl)
                }
            }, {
                label: '首选项',
                click: async () => {
                    mainWindow.loadURL(baseUrl + 'config')
                }
            }
        ],
    },
    // { role: 'editMenu' }
    {
        label: '编辑',
        submenu: [{
                role: 'undo',
                label: '撤销'
            },
            {
                role: 'redo',
                label: '重做'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut',
                label: '剪切'
            },
            {
                role: 'copy',
                label: '复制'
            },
            {
                role: 'paste',
                label: '粘贴'
            },
            ...(isMac ? [{
                    role: 'pasteAndMatchStyle',
                    label: '粘贴'
                },
                {
                    role: 'delete',
                    label: '删除'
                },
                {
                    role: 'selectAll',
                    label: '全选'
                },
                {
                    type: 'separator'
                },
                {
                    label: '讲述',
                    submenu: [{
                            role: 'startSpeaking',
                            label: '开始讲述'
                        },
                        {
                            role: 'stopSpeaking',
                            label: '停止讲述'
                        }
                    ]
                }
            ] : [{
                    role: 'delete',
                    label: '删除'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'selectAll',
                    label: '全选'
                }
            ])
        ]
    },
    // { role: 'viewMenu' }
    {
        label: '视图',
        submenu: [{
                role: 'reload',
                label: '刷新'
            },
            {
                role: 'forceReload',
                label: '强制刷新'
            },
            {
                role: 'toggleDevTools',
                label: '切换开发工具'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetZoom',
                label: '重置缩放'
            },
            {
                role: 'zoomIn',
                label: '放大'
            },
            {
                role: 'zoomOut',
                label: '缩小'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen',
                label: '切换全屏'
            }
        ]
    },
    // { role: 'windowMenu' }
    {
        label: '窗口',
        submenu: [{
                role: 'minimize',
                label: '最小化'
            },
            ...(isMac ? [{
                    type: 'separator'
                },
                {
                    role: 'front',
                    label: '前置'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'window',
                    label: '窗口'
                }
            ] : [{
                role: 'close',
                label: '关闭'
            }])
        ]
    },
    {
        role: 'help',
        label: '帮助',
        submenu: [{
            label: '学习更多',
            click: async () => {
                const {
                    shell
                } = require('electron')
                await shell.openExternal('https://electronjs.org')
            }
        }]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    // and load the index.html of the app.
    mainWindow.loadURL(baseUrl)

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


const {
    ipcMain
} = require('electron')
const Store = require('electron-store')
const store = new Store()

ipcMain.on('save-user-config', (event, arg) => {
    console.log(arg)
    store.set('user-config', arg)
    event.returnValue = true
})

ipcMain.on('get-user-config', (event, arg) => {
    let config = store.get('user-config')
    console.log(config)
    event.returnValue = config ? config : {}
})