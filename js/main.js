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
// 合計の計算が行われたかの判別
// true: -> 計算した。 false: -> 計算してない
var isSum = false;

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
    var _length = _tmpValue.length;

    // save the data which pressed the button
    if (value == '='){
      // first-click
      if(_length <= 0) {
        return;
      } else {
        // 何かしらtmpValueに数字が入ってる
        // ex: 4/2をしたいけど 4/＝とかを押された場合何もしないようにする。
        if(_tmpValue[_length - 1] === '+' || _tmpValue[_length - 1] === '-' || _tmpValue[_length - 1] === '*' || _tmpValue[_length - 1] === '/') {
          return;
        }
      }
      //console.log('whats value ' + value);
      this.calculate(); //計算してるところを呼ぶ

    } else if (value == 'C') { // reset the array, cause pressed equa;l or 'C'

      ecalculate = []; //空にする
      _tmpValue = []; //表示されてる部分も空にする
      isSum = false;// 合計してないことにする
      sum = 0;

      this.setState({
        text: '' //記号の場合そのままtextに追加
      });

    } else {
      // 数字か +, -, * or /が入ってくる。
      // なので、もし値が何も入ってない時（最初の時）に数字以外なら何もしない処理が必要:)
      console.log('click', _tmpValue);

      // first-click
      if(_length <= 0) {
        // ここは+, -, * or /がクリックされたとき
        if(value === '+' || value == '-' || value === '*' || value == '/') {
            
          // ここではまだ合計が実行されてないので
          if(!isSum) {
            // なにもこれ以上させないわ。no-more...;) 
            return;
          } else {
            // ここは合計の計算が実行されてるので
            // tampValueにsum（合計の結果）を代入しておく
            _tmpValue = [sum];
          }
        }
      } else if(_length >= 1) {
        // 値がすでに入ってる時でかつ、00と'0'が連続こないように
        if(value === 0) {
          return;
        }

        // 今現押されたのが記号でかつ一個前に押されたのが記号かの判別
        // 該当する場合は何もしない
        
        // 今現在押された値が記号なら
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          // 一個前の値が記号なら
          if(_tmpValue[_length - 1] === '+' || _tmpValue[_length - 1] === '-' || _tmpValue[_length - 1] === '*' || _tmpValue[_length - 1] === '/') {
            return;
          }
        }
        
        isSum = false;// 合計してないことにする
      } 

      _tmpValue.push(value); //inputの中にクリックされた値を送る

      this.setState({
        text: _tmpValue.join('') //記号の場合そのままtextに追加
      });

      //console.log('push ' + value);
    }
    //console.log(this.state.text);
    //console.log(event.target);
  },
  // =押されたときに計算させる
  calculate() { //計算するところ↓
  
    var flag;

    var str = _tmpValue.join("");//_tmpValue文字列化した値が入ってる（str）
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
    } else if(flag == '-') {
      sum = num - sum;
    } else if(flag == '*') {
      sum = num * sum;
    } else if(flag == '/') {
      sum = num / sum;
    }
    // 計算が実行されたのでtrueに。
    isSum = true;

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






