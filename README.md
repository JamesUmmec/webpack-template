# webpack template

this is a template for web development using webpack, typescript, less and jquery. just `git clone` it and run `npm i`, then you can focus on development rather than file structure config.

the template is a webpage with hello world and now time on it. you can just delete what you need not and add your own code to establish your webpage.

don't forget to change items like `name` `author` `version` and so on in the `package.json` file and add your license rather than the raw one.

and don't forget to run commands `webpack` and `less` in ths `scripts` in `package.json` file in order to watch compile your code. (you can also run `npm run webpack` and `npm run less` in the terminal directly).

fell free to use, enjoy.

---

## 中文简体

这是一个使用 webpack, typescriptm less 和 jquery 进行网页开发的模板。

在 `git bash` 中运行下面这句指令将这个仓库复制到本地文件夹中，

```bash
git clone git@github.com:JamesUmmec/webpack-template.git
```

然后运行以下指令进行构建，构建完成就可以在此基础上进行开发了。

```bash
npm i
```

**如果**速度过慢（即下载网速过慢），推荐**配置NPM国内镜像**：在用户文件夹下新建或修改 `.npmrc` 文件，添加以下内容：

```npmrc
registry=https://registry.npm.taobao.org/
disturl=https://npm.taobao.org/mirrors/node/
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
prefix=D:/nodejs/npm_global
cache=D:/nodejs/npm_cache
```

`package.json` 中已经写好了NPM脚本：如果是在vscode中直接鼠标悬停弹出窗口点击运行 `webpack` 和 `less` 这两个命令用于实时编译代码（否则代码没编译没效果），或者在命令行中直接运行 `npm run webpack` 和 `npm run less` 也可以。但注意要在当前项目文件夹下。

希望能对你有所帮助。