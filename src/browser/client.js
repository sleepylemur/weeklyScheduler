// var Dispatcher = require('./vendor/Dispatcher');
var ScheduleApp = require('./components/ScheduleApp.jsx');


React.render(
  <ScheduleApp />,
  document.getElementById('scheduleapp')
);

// console.log(Dispatcher);

function test() {
  return [1,2,3].map(x => require('./prod')(x,2));
}
console.log(test());
