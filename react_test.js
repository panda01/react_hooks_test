"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ReactReg extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      count: 0
    });

    this.incrementCount = function () {
      this.setState({
        count: this.state.count + 1
      });
    }.bind(this);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      id: "reg_increment",
      onClick: this.incrementCount
    }, "IncrementCount"), this.state.count);
  }

}

function ReactHook() {
  const [count, setCount] = React.useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    id: "hook_increment",
    onClick: incrementCount
  }, "IncrementCount"), count);
}

console.time("react_reg");
ReactDOM.render( /*#__PURE__*/React.createElement(ReactReg, null), document.getElementById("react_reg_container"));
console.timeEnd("react_reg");
console.time("react_hooks");
ReactDOM.render( /*#__PURE__*/React.createElement(ReactHook, null), document.getElementById("react_hooks_container"));
console.timeEnd("react_hooks");

function clickIncrement(forHook) {
  const selector = forHook ? "hook_increment" : "reg_increment";
  const $incrementBtn = document.getElementById(selector);
  const count = 100000;
  const consoleTimeStr = "click increment " + count + " times for " + selector;
  console.time(consoleTimeStr);

  for (let idx = 0; idx < count; idx++) {
    $incrementBtn.click();
  }

  console.timeEnd(consoleTimeStr);
}

clickIncrement(true);
clickIncrement(false);
