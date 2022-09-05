const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err, result) => {     //utf8 is passed so that the file can be read in this format
    if(err){
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {   // this line means 'read the file at the given location in the given format 
        if(err){                                                  // if there is an error in reading the file
            console.log(err)
            return;
        }

        const second = result                                      // if no error 

        writeFile('./content/result-async.txt',                    // where the content is to written. if the file does not exist, it is created
        `the result is ${first}, ${second}`,                       //what to write
        (err, result) => {                                         // callback function
            if(err){
                console.log(err);
                return;
            }   
            console.log(result)     

        }
        )
    })
})