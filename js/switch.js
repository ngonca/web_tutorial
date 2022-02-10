console.log(process.argv); // read arguments from command line
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
c = myArgs[0];

switch(c){

    case 'dog':
        console.log("thats a dog!");
        break;
    
    case 'cat':
        console.log("thats a cat!");
        break;

    case 'horse':
        console.log("Thahts a horse!");
        break;

    default:
        console.log("Thats nothing!");
        break

}