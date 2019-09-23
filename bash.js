
process.stdout.write('promt > ');
process.stdin.on('data' , (data) => {
    const cmd = data.toString().trim();


    if ( cmd === 'pwd'){
        return pwd();
    }

    if ( cmd === 'ls'){
        return ls(); 
    }
    process.stdout.write('promt > ');
});

const pwd = require('./pwd');
const ls = require('./ls');

