
const chalk=require('chalk')
const fs=require('fs')


const addNote= (title,body)=>{

const notes=loadNotes()

const duplicateNote=notes.find((note)=>note.title===title)

if(!duplicateNote){
notes.push({
    title:title,
    body:body
})
saveNotes(notes)
console.log(chalk.green.inverse('New note added'))
}

else{
  console.log(chalk.red.inverse('Title Taken'))
}
}



const saveNotes=(notes)=>{
const dataJSON=JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{

    try{
       const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
       return JSON.parse(dataJSON)
    }catch(e){
            return []
    }

}



const removeNotes=(title)=>{

const notes=loadNotes()
const notesToKeep=notes.filter((note)=>note.title!==title)
if(notes.length===notesToKeep.length)
{
    console.log(chalk.red.inverse('Note not found'))
}
else{ 
    console.log(chalk.green.inverse('Note Removed'))
}
saveNotes(notesToKeep)

}
const listNote=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note)=>{
        console.log(note.title)
    })

}
const readNote=(title)=>{
const notes=loadNotes()
const note=notes.find((note)=>note.title===title)
if(note){
console.log(chalk.inverse(note.title))
console.log(note.body)
}
else{
    console.log(chalk.red.inverse('Note not found'))
}
}
    

module.exports={
    
    addNotes: addNote,
    removeNotes:removeNotes,
    listNote:listNote,
    readNote:readNote
}