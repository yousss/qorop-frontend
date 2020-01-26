
export default ({app}, inject) => {
  let moment = {
    formatIndianDate: (date) => {
      return app.$moment(date).subtract(1, "h").format("Do MMM YYYY hh:mm a");
    },
    setCountDownTimer: (start_date, end_date) => {
      var now = app.$moment();
      var newStartDate = app.$moment(start_date).subtract(1, "h");
      var newEndDate = app.$moment(end_date).subtract(1, "h");

      if (start_date && app.$moment(now).isBefore(newStartDate)) {
        return newStartDate - now;
      } else if ( end_date && app.$moment(now).isAfter(newStartDate) && app.$moment(now).isBefore(newEndDate) ) {
        return newEndDate - now;
      }
    },
    getDateFormat: (date) => {
      return app.$moment(date).format('YYYY-MM-DD');
    },
    getTimeFormat: (date) => {
      return app.$moment(date).format('HH:mm:ss');
    },
    getDateTimeFormat: (date) => {
      return app.$moment(date).format('YYYY-MM-DD HH:mm:ss');
    },
    getDateUserFormat: (date) => {
      return app.$moment(date).format('LL')
    },
    getDateWithAddedHours: (hours) => {
      return app.$moment().add(hours, 'hours').toDate()
    },
  }

  app.$jwMoment = moment;
  inject('jwMoment', moment);
}