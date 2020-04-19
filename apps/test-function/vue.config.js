// vue.config.js

const isProduction = process.env.NODE_ENV === 'production';
const isLocal = process.env.HANDLED_IS_LOCAL
module.exports = {
    publicPath: isProduction && !isLocal ? '/handled-test/public' : '/public',
}
