module.exports = {
    diff: function (dateFrom, dateTo){
        var dif = dateFrom.getTime() - dateTo.getTime();
        var seconds = Math.abs(dif / 1000);
        return {
            seconds : seconds,
            minutes :  seconds / 60,
            hours : seconds / 3600,
            days : seconds / (3600 * 24)
        }
    } 
}