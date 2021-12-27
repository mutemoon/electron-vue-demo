# electron-demo

## 安装依赖
```
npm install
```

### 开发时，先运行本地的http服务器，然后打开electron窗口程序
```
npm run serve
运行本地的http服务器


然后在main.js里修改baseUrl的地址为本地服务器的地址
const baseUrl = `http://localhost:8080/index.html#/`

npm run window
打开electron窗口程序
```

### 打包时，打包vue应用至dist，再用electron-packager打包窗口程序
```
npm run build
打包vue应用至dist

然后在main.js里修改baseUrl的地址为本地服务器的地址
const baseUrl = `file://${__dirname}/dist/index.html#/`

npm run package
打包窗口程序至build目录下
```
