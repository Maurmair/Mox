
// DATE TESTING
Date.prototype.yyyymmdd = function(showtime) {
    var dateString = this.getFullYear() +"-"+
      ("0" + (this.getMonth()+1)).slice(-2) +"-"+
      ("0" + this.getDate()).slice(-2) + " ";
    if (showtime || false) {
      dateString += ("0" + this.getHours()).slice(-2) + ":" +
      ("0" + this.getMinutes()).slice(-2) + ":" +
      ("0" + this.getSeconds()).slice(-2) + "." +
      ("00" + this.getMilliseconds()).slice(-3)
    }
    return dateString;
  }
  var d = new Date();
  var tomorrow = new Date(d);
  tomorrow.setDate(d.getDate() + 1);
  var yesterday = new Date(d);
  yesterday.setDate(d.getDate() -1);
   
  var output = 'Date: ' + d.yyyymmdd() + '<br/>Day before: ' + yesterday.yyyymmdd() + '<br/>Day after: ' + tomorrow.yyyymmdd();
  output += '<br/>toISOString (Date): ' + d.toISOString().substring(0,10);
  $('#resultbox').html(output);