const program=require('commander');

program
.command('set')
.description("set API key -- Get at https://nomics.com/")
.action(()=>console.log("set the api key"))

program
.command('show')
.description("show API key ")
.action(()=>console.log("show the api key"))

program
.command('delete')
.description("delete API key ")
.action(()=>console.log("delete the api key"))

program.parse(process.argv)