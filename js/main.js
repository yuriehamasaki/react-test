var React = require('react');
var ReactDom = require('react-dom');

// initialized the varriable
// array
// ����Ҏ�t������ߤ��狼����
// �����������Ԥ���Τ�State����
var _tmpValue = []; //����z��Ǥ�����Ȥ�����ζ�ˤ��루_tmpValue��
// initialized the varriable
// this is number of sum. :]
var sum = 0;
var num = 0;
// ��Ӌ��Ӌ�㤬�Ф�줿�����Єe
// true: -> Ӌ�㤷���� false: -> Ӌ�㤷�Ƥʤ�
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
        // �Τ�����tmpValue�����֤���äƤ�
        // ex: 4/2�򤷤������� 4/���Ȥ���Ѻ���줿���ϺΤ⤷�ʤ��褦�ˤ��롣
        if(_tmpValue[_length - 1] === '+' || _tmpValue[_length - 1] === '-' || _tmpValue[_length - 1] === '*' || _tmpValue[_length - 1] === '/') {
          return;
        }
      }
      //console.log('whats value ' + value);
      this.calculate(); //Ӌ�㤷�Ƥ�Ȥ�������

    } else if (value == 'C') { // reset the array, cause pressed equa;l or 'C'

      ecalculate = []; //�դˤ���
      _tmpValue = []; //��ʾ����Ƥ벿�֤�դˤ���
      isSum = false;// ��Ӌ���Ƥʤ����Ȥˤ���
      sum = 0;

      this.setState({
        text: '' //ӛ�ŤΈ��Ϥ��Τޤ�text��׷��
      });

    } else {
      // ���֤� +, -, * or /����äƤ��롣
      // �ʤΤǡ��⤷�����Τ���äƤʤ��r������Εr������������ʤ�Τ⤷�ʤ��I����Ҫ:)
      console.log('click', _tmpValue);

      // first-click
      if(_length <= 0) {
        // ������+, -, * or /������å����줿�Ȥ�
        if(value === '+' || value == '-' || value === '*' || value == '/') {
            
          // �����ǤϤޤ���Ӌ���g�Ф���Ƥʤ��Τ�
          if(!isSum) {
            // �ʤˤ⤳�����Ϥ����ʤ��no-more...;) 
            return;
          } else {
            // �����Ϻ�Ӌ��Ӌ�㤬�g�Ф���Ƥ�Τ�
            // tampValue��sum����Ӌ�νY��������뤷�Ƥ���
            _tmpValue = [sum];
          }
        }
      } else if(_length >= 1) {
        // �������Ǥ���äƤ�r�Ǥ��ġ�00��'0'���B�A���ʤ��褦��
        if(value === 0) {
          return;
        }

        // ��FѺ���줿�Τ�ӛ�ŤǤ���һ��ǰ��Ѻ���줿�Τ�ӛ�Ť����Єe
        // ԓ��������ϤϺΤ⤷�ʤ�
        
        // ��F��Ѻ���줿����ӛ�Ťʤ�
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          // һ��ǰ�΂���ӛ�Ťʤ�
          if(_tmpValue[_length - 1] === '+' || _tmpValue[_length - 1] === '-' || _tmpValue[_length - 1] === '*' || _tmpValue[_length - 1] === '/') {
            return;
          }
        }
        
        isSum = false;// ��Ӌ���Ƥʤ����Ȥˤ���
      } 

      _tmpValue.push(value); //input���Ф˥���å����줿�����ͤ�

      this.setState({
        text: _tmpValue.join('') //ӛ�ŤΈ��Ϥ��Τޤ�text��׷��
      });

      //console.log('push ' + value);
    }
    //console.log(this.state.text);
    //console.log(event.target);
  },
  // =Ѻ���줿�Ȥ���Ӌ�㤵����
  calculate() { //Ӌ�㤹��Ȥ����
  
    var flag;

    var str = _tmpValue.join("");//_tmpValue�����л�����������äƤ루str��
    //���У��᥽�åȣ�����

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

    // sum =  �������줿�� + �������줿�� 
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
    // Ӌ�㤬�g�Ф��줿�Τ�true�ˡ�
    isSum = true;

    /*else {
      aclear(_tmpValue);// <- this is ERROR!!!!!!!!
      console.log('whats else ' + sum);
    }*/

    console.log('sum', sum);

    // if sum is 8
    // _tmpValue = [8]
    _tmpValue = []; //���֤�Ѻ���줿��դˤ���
    
    this.setState({
      text: sum // Ӌ��Y�����ʾ��
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






