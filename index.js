#!/usr/bin/env node
import yargs from "yargs";
import fileUtil from "./utils/file-util.js";
// 解析命令行参数
const argv = yargs
    .command('create', '-c 创建组件', {
        component: {
            description: '名称',
            alias: 'c',
            type: 'string',
            demandOption: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// 处理命令
if (argv._[0] === 'create') {
    const component = argv.component;
    fileUtil.createDirectoryAndFile(component)
} else {
    console.log('--help');
}