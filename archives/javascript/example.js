console.log('\nhello world!\n');
var iNum = 0;

for (var i = 1; i < 10; i++) {
  if (i % 5 === 0) {
    break;      //输出什么？
    //continue;   //输出什么？
  }
  iNum++;
}
console.log(iNum);
