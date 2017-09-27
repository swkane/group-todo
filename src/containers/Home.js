import React from 'react';
import { connect } from 'react-redux';
import { addTodoList }  from '../actions';
import { bindActionCreators } from 'redux';
//make sure action created flows through all reducers
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Home extends React.Component {



  render(){
    return (
      <div>
        <h1 style={{textAlign:'center', fontFamily:'cursive'}}>Todo List Manager</h1>
        <div style={{display:'flex', justifyContent:'center'}}>
            <Form inline>
             {' '}
             <FormGroup>
               <Input type="text" name="todo" placeholder="Create a todo list" />
             </FormGroup>
             {' '}
             <Button style={{margin:'10px'}} color="danger">Add List</Button>
             <Button color="primary">Filter By Title</Button>
           </Form>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTodoList: addTodoList }, dispatch)
}

export default connect(mapDispatchToProps)(Home);
