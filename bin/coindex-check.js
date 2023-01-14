const program = require('commander');
const check=require('../commands/check');
program
.command('Price')
.description('check price for coin')
.action(()=>check.price());

program.parse(process.argv);