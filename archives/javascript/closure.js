function getStaffNum() {
  var staffNum = 5000;
  return function() {
    staffNum++;
    console.log("Num is " + staffNum);
  }
}

var staffNum = getStaffNum();

staffNum(); // 输出什么？

staffNum(); // 输出什么？
