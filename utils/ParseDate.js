'use strict';

class ParseDate {
  constructor(date) {
    this.date = date
  }

  parseDate() {
    var d = date.split(/[- :]/);
    var date = new Date(Date.UTC(d[0], d[1]-1, d[2], d[3], d[4], d[5]));
    return date;
  }
}