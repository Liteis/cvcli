import fs from "fs";
import path from "path";
export default new class {
    createDirectoryAndFile(dirPath, fileName) {
        const directories = dirPath.split('/');
        let currentDirectory = '';
        // 循环创建目录
        for (const directory of directories) {
            currentDirectory += directory + '/';
            if (!fs.existsSync(currentDirectory)) {
                fs.mkdirSync(currentDirectory);
            }
        }
        // 根据最后目录名创建文件
        // const lastDirectory = directories[directories.length - 1];
        //根据文件目录设置唯一样式
        // let currentClass = currentDirectory.replace(/\//g, '-');
        let vueContent = `<template>
    <div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    }
}
</script>

<style scoped lang="scss">

</style>`
        const file = path.join(currentDirectory, `${fileName}.vue`);
        if (!fs.existsSync(file)) {
            fs.writeFileSync(file, vueContent);
        }
    }

}