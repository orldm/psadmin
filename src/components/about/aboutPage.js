"use strict";
var React = require('react');
var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This app uses following tchnologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gilp</li>
                        <li>Browserify</li>
                    </ul>
                </p>
            </div>
        );
    }
});
module.exports = About;