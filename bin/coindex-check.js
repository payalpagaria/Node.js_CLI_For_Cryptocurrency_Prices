const program = require('commander');
const check=require('../commands/check');
program
.command('Price')
.description('check price for coin')
.option(
    '--coin <type>',
    'Add specific coin types in CSV format',
    'BTC,ETH,XRP'
  )
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action(cmd => check.price(cmd));

program.parse(process.argv);
