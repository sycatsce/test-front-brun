import React from 'react';
import { createPlayer } from '../../api/players';

type state = {
    playerName: string,
    playerPosition: string,
    playerTeam: string
};

class CreatePlayerScreen extends React.Component<any, state> {

  constructor(props: any) {
    super(props);
    this.state = {
        playerName: '',
        playerPosition: '',
        playerTeam: ''
    };
  }

  onSubmit = (e: any) => {
    e.preventDefault();
    createPlayer(this.state.playerName, this.state.playerPosition, this.state.playerTeam).then((res) => {
      this.props.history.goBack();
    })
  }

  handleChangePlayerName = (e: any) => {
    this.setState({ playerName: e.target.value });
  }

  handleChangePlayerPosition = (e: any) => {
    this.setState({ playerPosition: e.target.value });
  }

  handleChangePlayerTeam = (e: any) => {
    this.setState({ playerTeam: e.target.value });
  }

  render (){
    return (
      <div className="form-player">
        <form onSubmit={this.onSubmit}>
            <h2> Create a player </h2>
            <label>
              Player's name :
              <input type="text" onChange={this.handleChangePlayerName} value={this.state.playerName} placeholder="Player Name"/>
            </label><br/>

            <label>
              Player's position :
              <input type="text" onChange={this.handleChangePlayerPosition} value={this.state.playerPosition} placeholder="Player Position"/>
            </label><br/>

            <label>
              Player's team ID :
              <input type="text" onChange={this.handleChangePlayerTeam} value={this.state.playerTeam} placeholder="Player Team"/>
            </label><br/>


            <button type="submit">
              Create
            </button>
        </form>
      </div>
    );
  }
}

export default CreatePlayerScreen;
