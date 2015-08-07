(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var Dispatcher = require('./vendor/Dispatcher');
'use strict';

var ScheduleApp = require('./components/ScheduleApp.jsx');

React.render(React.createElement(ScheduleApp, null), document.getElementById('scheduleapp'));

// console.log(Dispatcher);

function test() {
  return [1, 2, 3].map(function (x) {
    return require('./prod')(x, 2);
  });
}
console.log(test());

},{"./components/ScheduleApp.jsx":4,"./prod":5}],2:[function(require,module,exports){
"use strict";

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    return React.createElement(
      "li",
      null,
      "happy item"
    );
  }
});

},{}],3:[function(require,module,exports){
'use strict';

var PriorityItem = require('./PriorityItem.jsx');

module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    return React.createElement(
      'ul',
      null,
      React.createElement(PriorityItem, null)
    );
  }
});

},{"./PriorityItem.jsx":2}],4:[function(require,module,exports){
"use strict";

var PriorityList = require('./PriorityList.jsx');

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    return React.createElement(
      "div",
      { className: "ScheduleApp" },
      React.createElement(PriorityList, null)
    );
  }
});

},{"./PriorityList.jsx":3}],5:[function(require,module,exports){
"use strict";

module.exports = function prod(a, b) {
  return a * b;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2xlZXB5bGVtdXIvcmVhY3QvdmFncmFudC9zcmMvYnJvd3Nlci9jbGllbnQuanMiLCIvVXNlcnMvc2xlZXB5bGVtdXIvcmVhY3QvdmFncmFudC9zcmMvYnJvd3Nlci9jb21wb25lbnRzL1ByaW9yaXR5SXRlbS5qc3giLCIvVXNlcnMvc2xlZXB5bGVtdXIvcmVhY3QvdmFncmFudC9zcmMvYnJvd3Nlci9jb21wb25lbnRzL1ByaW9yaXR5TGlzdC5qc3giLCIvVXNlcnMvc2xlZXB5bGVtdXIvcmVhY3QvdmFncmFudC9zcmMvYnJvd3Nlci9jb21wb25lbnRzL1NjaGVkdWxlQXBwLmpzeCIsIi9Vc2Vycy9zbGVlcHlsZW11ci9yZWFjdC92YWdyYW50L3NyYy9icm93c2VyL3Byb2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNDQSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7QUFHMUQsS0FBSyxDQUFDLE1BQU0sQ0FDVixvQkFBQyxXQUFXLE9BQUcsRUFDZixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUN2QyxDQUFDOzs7O0FBSUYsU0FBUyxJQUFJLEdBQUc7QUFDZCxTQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1dBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7R0FBQSxDQUFDLENBQUM7Q0FDakQ7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Ozs7O0FDZHBCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ2pDLFFBQU0sRUFBRSxrQkFBVztBQUNqQixXQUNFOzs7O0tBQW1CLENBQ25CO0dBQ0g7Q0FDRixDQUFDLENBQUM7Ozs7O0FDTkgsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7O0FBRWpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ2pDLFFBQU0sRUFBRSxrQkFBVztBQUNqQixXQUNFOzs7TUFDRSxvQkFBQyxZQUFZLE9BQUc7S0FDYixDQUNMO0dBQ0g7Q0FDRixDQUFDLENBQUM7Ozs7O0FDVkgsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7O0FBRWpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ2pDLFFBQU0sRUFBRSxrQkFBVztBQUNqQixXQUNFOztRQUFLLFNBQVMsRUFBQyxhQUFhO01BQzFCLG9CQUFDLFlBQVksT0FBRztLQUNaLENBQ047R0FDSDtDQUNGLENBQUMsQ0FBQzs7Ozs7QUNWSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUU7QUFDbEMsU0FBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0NBQ1osQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyB2YXIgRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vdmVuZG9yL0Rpc3BhdGNoZXInKTtcbnZhciBTY2hlZHVsZUFwcCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9TY2hlZHVsZUFwcC5qc3gnKTtcblxuXG5SZWFjdC5yZW5kZXIoXG4gIDxTY2hlZHVsZUFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjaGVkdWxlYXBwJylcbik7XG5cbi8vIGNvbnNvbGUubG9nKERpc3BhdGNoZXIpO1xuXG5mdW5jdGlvbiB0ZXN0KCkge1xuICByZXR1cm4gWzEsMiwzXS5tYXAoeCA9PiByZXF1aXJlKCcuL3Byb2QnKSh4LDIpKTtcbn1cbmNvbnNvbGUubG9nKHRlc3QoKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPmhhcHB5IGl0ZW08L2xpPlxuICAgICk7XG4gIH1cbn0pO1xuIiwidmFyIFByaW9yaXR5SXRlbSA9IHJlcXVpcmUoJy4vUHJpb3JpdHlJdGVtLmpzeCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICA8UHJpb3JpdHlJdGVtIC8+XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn0pO1xuIiwidmFyIFByaW9yaXR5TGlzdCA9IHJlcXVpcmUoJy4vUHJpb3JpdHlMaXN0LmpzeCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTY2hlZHVsZUFwcFwiPlxuICAgICAgICA8UHJpb3JpdHlMaXN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcHJvZChhLGIpIHtcbiAgcmV0dXJuIGEqYjtcbn07XG4iXX0=
