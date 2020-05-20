import { IStep } from '../IStep';

export class filewriter{
save(products:IStep[]){
let output=JSON.stringify(products);
let fs = require('fs');

// write to a new file named 2pac.txt
fs.writeFile("bob.JSON", output, (err) => {
// throws an error, you could also catch it here
if (err) throw err;

// success case, the file was saved
console.log('Lyric saved!');
});
}
}