System.register(['react', 'react-dom'], function(exports_1) {
    var React, ReactDOM;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            }],
        execute: function() {
            ReactDOM.render(React.createElement("h1", null, "Hello, world!"), document.getElementById('render-app'));
        }
    }
});
