const program=require('commander');
const key=require("../commands/key")

program
.command('set')
.description("set API key -- Get at https://nomics.com/")
.action(key.set)

program
.command('show')
.description("show API key ")
.action(key.show)

program
.command('remove')
.description("remove API key ")
.action(key.remove)

program.parse(process.argv)