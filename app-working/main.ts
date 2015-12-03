/// <reference path="../typings/tsd.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const myVar ="typescript";
const templateString = `Hello ${myVar} world`;
const componet = React.createElement("div", null, templateString);

ReactDOM.render(
    componet,
    document.getElementById('renderHere-working')
);
