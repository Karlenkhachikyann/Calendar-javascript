var date = new Date();
function calendar_table(month, year) {
    var startOfMonth = new Date(year, month, 1);
    var endOfMonth = new Date(year, month + 1, 1);
    endOfMonth.setHours(-1);
    var emptyCellsStart = startOfMonth.getDay() === 0 ? 6 : startOfMonth.getDay() - 1;
    var emptyCellsEnd = endOfMonth.getDay() === 0 ? 0 : 7 - endOfMonth.getDay();
    var currentWeekDay = 0;

    var table = document.getElementById("table");
    table.innerHTML = "<tr><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td><td>S</td></tr>";
    var tr = document.createElement("tr");
    var month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var p = document.getElementById("month");
    p.innerHTML = month_name[month] + " " + year;
    var daysofmonth = new Date(year, month + 1, 0).getDate();

    for (var i = 1 - emptyCellsStart; i <= endOfMonth.getDate() + emptyCellsEnd; i++) {
        var td = document.createElement("td");
        td.innerHTML = i;
        tr.appendChild(td);
        if (i < 1 || i > daysofmonth) {
            td.innerHTML = " ";
        }
        if (currentWeekDay === 6) {
            var currentWeekDay = 0;
            table.appendChild(tr);
            tr = document.createElement("tr");
        } else {
            currentWeekDay++;
        }
    }
}
calendar_table(date.getMonth(), date.getFullYear());

var previusMonth = document.getElementById("previusMonth");
var nextMonth = document.getElementById("nextMonth");

previusMonth.addEventListener("click", function () {
    date.setMonth(date.getMonth() - 1)
    calendar_table(date.getMonth(), date.getFullYear());
});
nextMonth.addEventListener("click", function () {
    date.setMonth(date.getMonth() + 1)
    calendar_table(date.getMonth(), date.getFullYear());
});