var React = require('react');
var ReactDom = require('react-dom');

// initialized the varriable
// array
//命名規則を第三者がわかるもの
var _tmpValue = []; //溜め込んでる場所という意味にする（_tmpValue）
// initialized the varriable
// this is number of sum. :]
var sum = 0;
var num = 0;

var KeySample = React.createClass({
  getInitialState() {
    return {
      buttons: [1, 2, 3, "+",4, 5, 6,"-", 7, 8, 9, "*", 0, "C",  "/", "="],
      text: ['1', '+', '1'].join('')
    };
  },
  onClick(value) {
    //console.log(this.state);
    //console.log('value is ' + value);

    // save the data which pressed the button
    if (value == '='){
      //console.log('whats value ' + value);
      this.calculate();
    } else if (value == 'C') { // reset the array, cause pressed equa;l or 'C'
      ecalculate = []; //空にする

    } else {
      _tmpValue.push(value);
      console.log('push ' + value);
    }

    this.setState({
      text: _tmpValue.join('')
    });
    //console.log(this.state.text);
    //console.log(event.target);
  },
  calculate() { //計算するところ
  
    var flag;

    var str = _tmpValue.join("");//_tmpValue文字列かした値が入ってる（str）
    //配列＋メソット＋引数

    var array = str.split(/(\+|\-|\*|\/)/);

    for (var v of array) {
      //console.log('v is ' + v);

      if(v == '+'){
        flag = v;
        //console.log('+ ' + flag);
      } else if(v == '-'){
        flag = v;
        //console.log('- ' + flag);
      } else if(v == '*'){
        flag = v;
        //console.log('* ' + flag);
      }  else if(v == '/'){
        flag = v;
        //console.log('/ ' + flag);
      } else if(v == '='){
        flag = v;
        //console.log('+ ' + flag);
      } else { 
        // this could be number :) yeah!!! 
        // wanna Magic Number!!!! :)
        // console.log('Magic Number is ' + v);
        datas = v;

        num = array[0] * 1;
        sum = array[2] * 1;
        // num = parseInt(array[0]);
        // sum = parseInt(array[2]);
      }
    }

    //parseInt(num);


    // let's sum
    // 3+6=9 -> this is wrong!!!!!!!!
    // this displayed just 9

    // sum =  入力された値 + 入力された値 
    // currently, sum is 0, also num is 0. OMG

    //console.log(flag);

    if(flag == '+') {
      sum = num + sum;
    }
    else if(flag == '-') {
      sum = num - sum;
    }
    else if(flag == '*') {
      sum = num * sum;
    }
    else if(flag == '/') {
      sum = num / sum;
    }
    else {
      aclear(_tmpValue);
      console.log('whats else ' + sum);　//sumがでない
    }





  },
  render() {
    var _this = this;

    var buttonElements = this.state.buttons.map(function(button, i) {
      return (
        <button key={i} onClick={function() {
          _this.onClick(button);
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


ReactDom.render(<KeySample />, document.getElementById("calculator_wrap"));




//component.setProps({ name: "foo" });      // <div>1:foo</div>
//component.replaceProps({ name: "hoge" }); // <div>:hoge</div>

//ReactDom.render(React.createFactory(Counter)({count: "1"}), document.body);
//ReactDom.render(<Counter {count} />, document.getElementById("app"));

