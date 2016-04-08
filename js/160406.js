var React = require('react');
var ReactDom = require('react-dom');

// initialized the varriable
// array　空の箱（配列を作る）

// initialized the varriable
// this is number of sum. :]　(sumとnumを定義する-1にする人もいるが、基本0でいいらしい)
var sum = 0;
var num = 0;

var KeySample = React.createClass({
  // stateに
  getInitialState() {
    return {
      buttons: [1, 2, 3, "+",4, 5, 6,"-", 7, 8, 9, "*", 0, "C",  "/", "="],
      text: ['1', '+', '1'].join('')
    };
  },
  // ボタンを押した時の処理↓↓
  onClick(value) {
    console.log(this.state);
    console.log('value is ' + value);
    

    // save the data which pressed the button (押したボタンをpushで配列に入れる)
    _tmpValue.push(value);

    
    console.log(_tmpValue);
    //for分を使って_tmpValueに入っているものを一つずつとってみる
    //さらに記号の部分はflagにする
    ffor (var v of _tmpValue) {
      console.log('v is ' + v);

      if(v == '+'){
        flag = v;
        console.log(flag);
      } else if(v == '-'){
        flag = v;
        console.log(flag);
      } else if(v == '*'){
        flag = v;
        console.log(flag);
      } else if(v == '/'){
        flag = v;
        console.log(flag);
      } else {
        // this could be number :) yeah!!! 
        // wanna Magic Number!!!! :)
        console.log('could be number ? ' + v);
      }

    }








    // reset the array, cause pressed equal or 'C' (Cを押した時は配列に入っているものを空にする)
    if(value == 'C') {
      _tmpValue = [];
    } else if(value === '=') {
      // let's sum (ここでトータルを出そう)
      // 3+6=9 -> this is wrong!!!!!!!! (3+6=9と表示されたらダメ！)
      // this displayed just 9 (トータルsum=を押されたら9と表示されるようにしよう)


      

    }

    this.setState({
      text: _tmpValue.join('')
    });
    console.log(this.state.text);
    //console.log(event.target);
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
        <input type="text" name="" value={this.state.text} ></input>
        <div id="keyboard">{buttonElements}</div>
      </div>
    );
  }
});


ReactDom.render(<KeySample />, document.getElementById("calculator_wrap"));