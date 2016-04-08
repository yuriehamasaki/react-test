var React = require('react');
var ReactDom = require('react-dom');

var repository = [];
var firstBox = 0;
var secBox = 0;

var Calculator = React.creareClass({
	getInitialState(){
		return{
			buttons: 1, 2, 3, "+",4, 5, 6,"-", 7, 8, 9, "*", 0, "C",  "/", "="],
			text: [].join('')
		};
	},
	onClick(value){
		if (value == '=') {
			this.calculate();
		} else if (value == 'C') {
			ecalculate = []; //空にする
      		repository = [];
		} else {
			repository.push(value);
		}
		this.setState({
			text: repository.join('');
		});
	},
	calculate() {
		var symbol;
		var repoStr = repository.join();
		var array = repoStr.split(/(\+|\-|\*|\/)/);

		for (var character of arrey) {
			if(character == '+'){
				symbol = character;
			} else if (character = '-'){
				symbol = character;
			} else if (character = '*'){
			  	symbol = character;
			} else if (character = '/'){
			  	symbol = character;
			} else if (character = '='){
			  	symbol = character;
			} else{
				firstBox = array[0] * 1;
        		secBox   = array[2] * 1;
			}
		}

		if(flag == '+') {
      		firstBox = secBox + firstBox;
    	}
    	else if(flag == '-') {
      		firstBox = secBox - firstBox;
    	}
    	else if(flag == '*') {
      		firstBox = secBox * firstBox;
    	}
    	else if(flag == '/') {
      		firstBox = secBox / firstBox;
    	}

    	repository = [firstBox];
    	this.setState({
     		text: repository.join('')
    	});
	},
	render(){
		var kore = this;
    	var buttonElements = this.state.buttons.map(function(button, i) {
      		return (
        		<button key={i} onClick={function() {
          			kore.onClick(button);
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

















