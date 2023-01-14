const program = require('commander');
program
.command('Price')
.description('check price for coin')
.action(()=>{console.log("Hello from price")})

program.parse(process.argv);