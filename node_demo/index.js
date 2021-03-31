// console.log('这是nodejs的demo');
// const path = require('path');
// console.log(path);

// const a = path.resolve(__dirname,'zpt');
// const b = path.resolve('lalal','zpt','hhh','lulala');
// const c = path.join('lalla','zpt');
// console.log(__dirname); 
// console.log(path.join('./a','./b'));  //a\b
// console.log(path.resolve('./a','./b'));  //C:\Users\19144\Desktop\09day\09day\abc\a\
// console.log('结束'); 
// const rm = require('rimraf')
// console.log(rm); 
// console.log(process);
// console.log('海贼王');
// process.nextTick(function(){
//     console.log('火影忍者');
// });
// process.stdout.write('啦啦啦')
// process.stdout.write('vvv')
// process.argv.forEach((val,index,array) => {
//     console.log(`参数${index}:${val}`)
//     console.log(array);
// });
// process.chdir('/tmp');

// const shell = require('shelljs');

// if(shell.which('npm')){
//     console.log('npm');
// }
// if(shell.which('node')){
//     console.log('node');
// }
// console.log(shell.which('npm'));
// console.log(shell.which('node'));
// console.log(!shell.which('git'));
const cp = require('child_process');
console.log(process.cwd());
// console.log(cp);