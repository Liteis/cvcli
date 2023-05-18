#!/usr/bin/env node
import yargs from "yargs";
import fileUtil from "./utils/file-util.js";
// 解析命令行参数
const argv = yargs
    .command('create', '-c 创建组件', {
        component: {
            description: '组件',
            alias: 'c',
            type: 'string',
            demandOption: true
        }
    }).option('file', {
        description: '文件名',
        alias: 'f',
        type: 'string',
        demandOption: true,
        default: 'index'
    }).group(['file'], 'create -c option')
    .help()
    .alias('help', 'h')
    .argv;
// 处理命令
if (argv._[0] === 'create') {
    const component = argv.component;
    if (!component) {
        console.log('输入组件名称')
    } else {
        fileUtil.createDirectoryAndFile(component, argv.file);
        console.log('success')
    }
} else {
    console.log('--help');
}