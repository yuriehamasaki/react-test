var React = require('react');
var ReactDom = require('react-dom');

var Calculator = React.createClass({
  getInitialState(){
    repository = [];
    firstBox = 0;
    secBox = 0;
    totalCount = false;
    return{
      buttons: [1, 2, 3, '+',4, 5, 6,'-', 6, 8, 9, '*', 0, 'C',  '/', '='],
      text: ¡®¡¯
    };
  },
  onClick(value){
    var strLength = repository.length;
    if (value == '=') {
      if (strLength <= 0){
        return;
      } else {
        if (repository[strLength - 1] === '+' || repository[strLength - 1] === '-' || repository[strLength - 1] === '*' || repository[strLength - 1] === '/'){
          return;
        }
      }
      this.calculate();
    } else if (value == 'C') {
      calculate = [];
      repository = [];
      totalCount = false;
      firstBox = 0;
      this.setState({
        totalCount: false,
        text: ''
      });
    } else {
      if (strLength <= 0) {
        if (value === '+' || value === '-' || value === '*'|| value === '/') {
          if (!totalCount) {
            return;
          } else {
            repository = [firstBox];
          }
        }
      } else if (strLength >= 1){
        if (value === 0) {
          return;
        }
        if (value === '+' || value === '-' || value === '*' || value === '/'){
          if (repository[strLength - 1] === '+' || repository[strLength - 1] === '-' || repository[strLength - 1] === '*' || repository[strLength - 1] === '/'){
            return;
          }
        }
        totalCount = false;
      }
      repository.push(value);
      this.setState({
        text: repository.join('')
      });
    }
  },
  calculate() {
    var symbol;
    var repoStr = repository.join("");
    var array = repoStr.split(/(\+|\-|\*|\/)/);

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
        firstBox  = parseInt(array[0]);
        secBox    = parseInt(array[2]);
      }
    }

    if(symbol === '+') {
      secBox = firstBox + secBox;
    } else if (symbol === '-') {
      secBox = firstBox - secBox;
    } else if (symbol === '*') {
      secBox = firstBox * secBox;
    } else if (symbol === '/') {
      secBox = firstBox / secBox;
    }

    totalCount = true;

    repository = [];
    this.setState({
      text: secBox
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
