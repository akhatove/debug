const debug = require('./node.js')('test');
debug('hello')
setTimeout(() => {
   debug('another hello after 2 sec')
}, 2000)