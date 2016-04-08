var React = require('react');
var Name = React.createClass({
  render: function() {
    return (
      <span>{this.props.name}</span>
    );
  }
});
var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Name name="Masato" />
      </div>
    );
  }
});
React.render(
  <HelloWorld />,
  document.getElementById('example')
);


/*
var Editor = React.createClass({
    getInitialState: function() {
        return {value: 'Type someThing here!'};
    },
    handleChange: function() {
        this.setState({value: this.refs.textarea.value});
    },
    render: function() {
        return (
            <div className="Editor">
            <h3>Input</h3>
            <textarea
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value} />
            <h3>Output</h3>
            <div
            className="content"
            dangerouslySetInnerHTML={{__html: this.state.value}}
            />
            </div>
    );
        }
});

// 0.1.13ではReact.renderだったが0.1.14からReactDOM.renderに変更になった
ReactDOM.render(<Editor />, document.getElementById('module'));
*/