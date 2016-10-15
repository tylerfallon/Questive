var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom');
import { Button } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { FieldGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Radio } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup} from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Pager } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

var _counter = 0;

var Create = React.createClass({
  render: function(){
    return(
      <div class="add">
      <div className="main-container"> 
      <div className="container">
<center><PageHeader>Create A Contest</PageHeader></center>
<div></div>
<form>
      <ControlLabel>Contest Name</ControlLabel>
      <FormControl type="text" placeholder="Give your contest a title"></FormControl>
<br />
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Contest Description</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Enter a description for your contest" />
    </FormGroup>
<br />
    <FormGroup>
      <ControlLabel>Add the instructions for your contest below! Click to Expand.</ControlLabel>
    </FormGroup>

   <Panel collapsible defaultExpanded={false} header="Task 1">
    <ListGroup fill>
      <ListGroupItem>Action:  <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
      <ListGroupItem>Location:  <FormControl type="text" placeholder="Enter text"></FormControl> </ListGroupItem>
      <ListGroupItem>Additional Info: <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
    </ListGroup>
  </Panel>

  
   <Panel collapsible defaultExpanded={false} header="Task 2">
    <ListGroup fill>
      <ListGroupItem>Action:  <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
      <ListGroupItem>Location:  <FormControl type="text" placeholder="Enter text"></FormControl> </ListGroupItem>
      <ListGroupItem>Additional Info: <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
    </ListGroup>
  </Panel>

     <Panel collapsible defaultExpanded={false} header="Task 3">
    <ListGroup fill>
      <ListGroupItem>Action:  <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
      <ListGroupItem>Location:  <FormControl type="text" placeholder="Enter text"></FormControl> </ListGroupItem>
      <ListGroupItem>Additional Info: <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
    </ListGroup>
  </Panel>



<div id="placeholder">
  <div id="template">
   <Panel collapsible defaultExpanded={true} header='Additional Tasks'>
      <ListGroup fill>
      <ListGroupItem>Action:  <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
      <ListGroupItem>Location:  <FormControl type="text" placeholder="Enter text"></FormControl> </ListGroupItem>
      <ListGroupItem>Additional Info: <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
      </ListGroup>
    </Panel>
  </div>
</div>







<Pager>
    <Pager.Item onClick={this.Add} previous href="#">Add Additional Tasks &rarr;</Pager.Item>
  </Pager>


  <br />

      <div className="well">
        <Button bsSize="large" block>Submit Contest</Button>
        </div>
</form>
        </div>
      </div>
    </div>
    );
},

 createField: function() {
  $('#newField').append(<Panel collapsible defaultExpanded={false} header="Additional Item">
    <ListGroup fill>
      <ListGroupItem>Action:  <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
      <ListGroupItem>Location:  <FormControl type="text" placeholder="Enter text"></FormControl> </ListGroupItem>
      <ListGroupItem>Additional Info: <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
    </ListGroup>
  </Panel>) 
 }, 

  Add: function() {
    _counter++;
    var oClone = document.getElementById("template").cloneNode(true);
    oClone.id += (_counter + "");
    document.getElementById("placeholder").appendChild(oClone);
}

});
module.exports = Create;