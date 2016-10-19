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

// Rendering sub tasks 
var subTasks = React.createClass({
	render:function(){
		console.log(this.props);
		return(
		<ListGroup>
				{this.props.tasks.map((task,i) => {
					return( 
						<div>
							<ControlLabel> Task {i+1}</ControlLabel>
							<ListGroupItem>{task.title}</ListGroupItem>
							<ListGroupItem>{task.location}</ListGroupItem>
							<ListGroupItem>{task.additionalInfo}</ListGroupItem>
						</div>
					)	
				})
			}
		</ListGroup>
		)
	}
});

export default  subTasks;