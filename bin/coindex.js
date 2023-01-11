#!/usr/bin/env node
const program=require('commander');
//gives the version -coindex -V 
program
.version('1.0.0')
.command("key","Manage API key -- https://nomics.com/")
.parse(process.argv);
