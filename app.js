const chalk=require('chalk')
const notes =require('./notes.js');
const yargs= require('yargs')
const fs=require('fs')

//creating yarg command
 yargs.command({
      command : 'add',
      describe:'Add a new note',
      builder:{
          title:{
              describe:'Note title',
              demandOption: 'true',
              type: 'string'
          },
          body:{
              describe:'Body',
              demandOption: 'true',
              type: 'string'
          }
      },
       handler(argv) {
    notes.addNotes(argv.title,argv.body)
      }
 })

 //create remove command
 yargs.command({
      command : 'remove',
      describe:'Remove a note',
      builder:{
          title:{
              describe:'Delete Note ',
              demandOption: 'true',
              type: 'string'
          }
      },
       handler(argv) {
          notes.removeNotes(argv.title)
      }
 })

  //create list command
 yargs.command({
      command : 'list',
      describe:'List your notes',
       handler() {
          notes.listNote()
      }
 })

   //create read command
 yargs.command({
      command : 'read',
      describe:'read your notes',
      builder:{
          title:{
              describe:'Note title',
              demandOption:true,
              type:'string'
          }
          
      },
       handler(argv) {
          notes.readNote(argv.title)
      }
 })

yargs.parse()