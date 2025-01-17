import React, { Component } from 'react';
import Main from './Main';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Fade, Alert } from 'reactstrap';


class App extends Component {
    clicky = (ev) => {
        console.log('The big Jumbotron button was clicked')
    }
  render() {
    return (
      <div className="App">
         <Container className="bg-light p-5 rounded">
  <h1 className="display-3">Hello, world!</h1>
  <p className="lead">This is a simple hero unit...</p>
  <hr />
  <p>It uses utility classes...</p>
  <Button onClick={this.clicky} color="primary">Learn More</Button>
</Container>
          
          <Fade in={true} mountOnEnter={true} unmountOnExit={true} tag="h5" className="mt-3">
              <Alert color="success">
                This is a success alert — check it out!
              </Alert>
          </Fade>
        
          <Main />
      
      </div>
    );
  }
}

export default App;
