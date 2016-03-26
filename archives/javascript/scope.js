// var a = '0';
function level0() {
  // var a = '1';

  function level1() {
    // var a = '2';
    function level2a() {
      console.log(a);
    }
    console.log(a);

    level2a();
  }
  console.log(a);
  level1();
}
console.log(aa);
