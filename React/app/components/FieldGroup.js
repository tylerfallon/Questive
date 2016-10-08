var React = require('react');
var Router = require('react-router');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var helpers = require('../utils/helpers');
var ReactDOM = require('react-dom');

var FieldGroup = function({id, label, help, propers}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      {help && <HelpBlock>{help}</HelpBlock>}
      <FormControl>{propers}</FormControl>
    </FormGroup>
  );
}


module.exports = FieldGroup;