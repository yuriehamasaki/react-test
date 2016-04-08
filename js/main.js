var React = require('react');
var ReactDom = require('react-dom');

// initialized the varriable
// array
// 命名規則を第三者がわかるもの
// 変数名を宣言するのはStateの中
var _tmpValue = []; //溜め込んでる場所という意味にする（_tmpValue）
// initialized the varriable
// this is number of sum. :]
var sum = 0;
var num = 0;

var KeySample = React.createClass({
  getInitialState() {
    return {
      buttons: [1, 2, 3, "+",4, 5, 6,"-", 7, 8, 9, "*", 0, "C",  "/", "="],
      text: [].join('')
    };
  },
  onClick(value) {
    //console.log(this.state);
    //console.log('value is ' + value);

    // save the data which pressed the button
    if (value == '='){

      //console.log('whats value ' + value);
      this.calculate(); //計算してるところを呼ぶ

    } else if (value == 'C') { // reset the array, cause pressed equa;l or 'C'

      ecalculate = []; //空にする
      _tmpValue = []; //表示されてる部分も空にする

    } else {

      _tmpValue.push(value); //inputの中にクリックされた値を送る

      this.setState({
        text: _tmpValue.join('') //記号の場合そのままtextに追加
      });

      //console.log('push ' + value);
    }
    //console.log(this.state.text);
    //console.log(event.target);
  },
  calculate() { //計算するところ↓
  
    var flag;

    var str = _tmpValue.join("");//_tmpValue文字列かした値が入ってる（str）
    //配列＋メソット＋引数

    var array = str.split(/(\+|\-|\*|\/)/); //

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

        num = array[0] * 1;
        sum = array[2] * 1;

        // num = parseInt(array[0]);
        // sum = parseInt(array[2]);

        // console.log('whats else num ' + num);
        // console.log('whats else sum ' + sum);

      }
    }// end of for!!!!

    //console.log('whats else num ' + num);
    //console.log('whats else sum ' + sum);

    // let's sum
    // 3+6=9 -> this is wrong!!!!!!!!
    // this displayed just 9

    // sum =  入力された値 + 入力された値 
    // currently, sum is 0, also num is 0. OMG

    //var aclear;

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

    /*else {
      aclear(_tmpValue);// <- this is ERROR!!!!!!!!
      console.log('whats else ' + sum);
    }*/

    console.log('sum', sum);

    // if sum is 8
    // _tmpValue = [8]
    _tmpValue = []; //数字を押されたら空にする
    this.setState({
      text: sum // 計算結果を表示　
    });


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






