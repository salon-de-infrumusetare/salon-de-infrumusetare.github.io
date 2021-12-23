function dtime(num) {
    var curDate = new Date().getTime() + num * 24 * 3600 * 1000;
    curDate = new Date(curDate);
    var curDay = (curDate.getDate() >= 10) ? curDate.getDate() : '0' + curDate.getDate(),
      curMonth = curDate.getMonth() + 1 >= 10 ? curDate.getMonth() + 1 : '0' + (curDate.getMonth() + 1),
      curYear = curDate.getFullYear();
    document.write(curDay + '.' + curMonth + '.' + curYear);
  };