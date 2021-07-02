import React from 'react';
import { Link } from 'react-router-dom';


import { getTeams } from '../../api/teams';
import { getPlayersFromATeam } from '../../api/players';

type state = { teams: Array<{
        id: string,
        name: string,
        description: string,
        iconURL: string,
}>|null 
};

class TeamsScreen extends React.Component<any, state> {

  constructor(props: any) {
    super(props);
    this.state = { teams: null };
  }

    //API call when the component is mounted to get the teams list
  componentDidMount(){
    getTeams().then((teams) => {
        this.setState({teams});
    })
  }

  render (){
    return (
      <div className="teams">
        <h1 className="teams-title"> Teams </h1>
        <div className="teams-container">
          { this.state.teams?.map( team => (
            <div className="team">
              <h2 className="team-title"> {team.name} </h2>
              <Link to={`/teams/${team.id}`}>
                <img className="team-icon" src={`${team.iconURL}`}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TeamsScreen;
