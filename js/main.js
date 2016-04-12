var React = require('react');
var ReactDom = require('react-dom');

var Calculator = React.createClass({
  getInitialState(){
    return{
      buttons: [1, 2, 3, '+',4, 5, 6,'-', 6, 8, 9, '*', 0, 'C',  '/', '='],
      text: '',
      displayValue: [],
      firstBox: 0,
      secBox: 0,
      totalCount: false
    };
  },
  onClick(value){
    var displayValueLength = this.state.displayValue.length;
    if (value == '=') {
      if (displayValueLength <= 0){
        return;
      } else {
        if (this.state.displayValue[displayValueLength - 1] === '+' || this.state.displayValue[displayValueLength - 1] === '-' || this.state.displayValue[displayValueLength - 1] === '*' || this.state.displayValue[displayValueLength - 1] === '/'){
          return;
        }
      }
      this.calculate();
    } else if (value == 'C') {
      calculate = [];
      this.state.displayValue = [];
      this.state.totalCount = false;
      this.state.firstBox = 0;
      this.setState({
        totalCount: false,
        text: ''
      });
    } else {
      if (displayValueLength <= 0) {
        if (value === '+' || value === '-' || value === '*'|| value === '/') {
          if (!this.state.totalCount) {
            return;
          } else {
            this.state.displayValue = [this.state.firstBox];
          }
        }
      } else if (displayValueLength >= 1){
        if (value === 0) {
          return;
        }
        if (value === '+' || value === '-' || value === '*' || value === '/'){
          if (this.state.displayValue[displayValueLength - 1] === '+' || this.state.displayValue[displayValueLength - 1] === '-' || this.state.displayValue[displayValueLength - 1] === '*' || this.state.displayValue[displayValueLength - 1] === '/'){
            return;
          }
        }
        this.state.totalCount = false;
      }
      this.state.displayValue.push(value);
      this.setState({
        text: this.state.displayValue.join('')
      });
    }
  },
  calculate() {
    var symbol;
    var  displayValueCharacter = this.state.displayValue.join("");
    var array = displayValueCharacter.split(/(\+|\-|\*|\/)/);

    for (var character of array) {
      if(character === '+'){
        symbol = character;
      } else if (character === '-'){
        symbol = character;
      } else if (character === '*'){
        symbol = character;
      } else if (character === '/'){
        symbol = character;
      } else if (character === '='){
        symbol = character;
      } else{
        this.state.firstBox  = parseInt(array[0]);
        this.state.secBox    = parseInt(array[2]);
      }
    }

    if(symbol === '+') {
      this.state.secBox = this.state.firstBox + this.state.secBox;
    } else if (symbol === '-') {
      this.state.secBox = this.state.firstBox - this.state.secBox;
    } else if (symbol === '*') {
      this.state.secBox = this.state.firstBox * this.state.secBox;
    } else if (symbol === '/') {
      this.state.secBox = this.state.firstBox / this.state.secBox;
    }

    this.state.totalCount = true;

    this.state.displayValue = [];
    this.setState({
      text: this.state.secBox
    });
  },
  render(){
    var self = this;
    var buttonElements = this.state.buttons.map(function(button, i) {
      return (
        <button key={i} onClick={function() {
          self.onClick(button);
        }}>{button}</button>
      );
    });
    return (
      <div>
        <input type="text" name="" value={this.state.text} readOnly></input>
        <div id="keyboard">{buttonElements}</div>
      </div>
    );
  }
});

ReactDom.render(<Calculator />, document.getElementById("calculator_wrap"));