var name = 'Bob';
var nameObj = {
  name: 'Tom',
  showName: function() {
    console.log(this.name);
  },
  waitShowName: function() {
    setTimeout(this.showName, 1000);
  }
};

nameObj.waitShowName();
