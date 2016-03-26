function Company(name) {
  this.name = name;
}

Company.prototype.showCompany = function() {
  console.log(this.name);
};

function Google(name) {
  this.name = name;
}

Google.prototype = new Company();
Google.prototype.constructor = Google; 

// Google.prototype.showCompany = function() {
//   console.log('巨头公司' + this.name);
// };

var google = new Google('谷歌');

google.showCompany();

var facebook = new Company('脸谱');

facebook.showCompany();
