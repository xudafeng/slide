var nameObj = {
  name: 'Tom',
  showName: function() {
    console.log(this.name);
  },
  waitShowName: function() {
    this.showName();
    setTimeout(function() {
      this.showName();
    }, 1000);
  }
};

nameObj.waitShowName();
