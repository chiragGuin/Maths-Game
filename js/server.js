const fs = require('fs');

fs.readfile('./.json', 'utf-8', (err,data) => {
        if(err){
                console.log(err);
        }else{
                let content = JSON.parse(data);
                console.log(content);
        }
})