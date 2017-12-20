"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log('Apps working succesful')

// const appRoot = document.getElementById('app')

// const app = {
//     title: 'Indecision App',
//     subtitle: 'Just another app on react',
//     options: []
// }

// const onFormSubmit = (e) =>{
//     e.preventDefault()

//     const option = e.target.elements.option.value

//     if(option){
//         app.options.push(option)
//         // listOptions()
//         e.target.elements.option.value = ''
//         renderForm()
//     }
// }
// const onMakedecision = () => {
//     const randomNum = Math.floor(Math.random()* app.options.length)
//     const option = app.options[randomNum]
//     alert(option)
// }

// const remove = ()=>{
//     app.options =[]
//     renderForm()
// }


// const renderForm = () =>{

// const template = (
// <div>
//     <h1>{app.title}</h1>
//     <h3>{app.subtitle}</h3>
//     <p>{app.options.length > 0 ? 'Here are your Options' : 'No options to show'}</p>    
//     <p>{app.options.length}</p>
//     <button disabled={app.options.length === 0} onClick={onMakedecision}>What should I do?</button>
//     <button onClick={remove}>Remove All</button>
//     <ol>
//         { app.options.map((option) => <li key={option}>{option}</li>) }
//     </ol>
//     <form onSubmit={onFormSubmit}>
//         <input type="text" name="option"/>
//         <button>Add Option</button>        
//     </form>
// </div>
// )

// ReactDOM.render(template, appRoot)
// }

// renderForm()

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Indecision App"
                ),
                React.createElement(
                    "p",
                    null,
                    "Put your life in the hands of a computer!"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ol",
                null,
                React.createElement(
                    "li",
                    null,
                    "options component goes here"
                ),
                React.createElement(
                    "li",
                    null,
                    "options component goes here"
                ),
                React.createElement(
                    "li",
                    null,
                    "options component goes here"
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                null,
                React.createElement("input", { type: "text" }),
                React.createElement(
                    "button",
                    null,
                    "Add Option"
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var jsx = React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Action, null),
    React.createElement(Options, null),
    React.createElement(AddOption, null)
);

ReactDOM.render(jsx, document.getElementById('app'));