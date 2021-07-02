import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class HomeScreen extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render (){
    return (
        <div className="App">
            <p> Hivency Front-End Test </p>
            <Link to="/teams"> <Button variant="contained" color="primary"> View Teams </Button></Link>
        </div>
    );
  }
}

export default HomeScreen;
