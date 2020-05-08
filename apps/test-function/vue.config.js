// vue.config.js

const isProduction = process.env.NODE_ENV === 'production';
const isLocal = process.env.HANDLED_IS_LOCAL;

const rootPath = isProduction && !isLocal ? '/handled' : '/';
const publicPath = `${rootPath}/public`;
console.log('Vue config: ');
console.log({
    rootPath,
    publicPath,
});

module.exports = {
    rootPath,
    publicPath
}
