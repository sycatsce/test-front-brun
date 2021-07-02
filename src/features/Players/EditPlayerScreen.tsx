import React from 'react';
import { Link } from 'react-router-dom';
import { editPlayer, getPlayer } from '../../api/players';

type state = {
    playerName: string,
    playerPosition: string,
    playerTeam: string
};

class EditPlayerScreen extends React.Component<any, state> {

  constructor(props: any) {
    super(props);
    this.state = {
        playerName: '',
        playerPosition: '',
        playerTeam: ''
    };
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    getPlayer(id).then((res) => {
      this.setState({
        playerName: res[0].name,
        playerPosition: res[0].position,
        playerTeam: res[0].teamId
      });
    })
  }
  onSubmit = (e: any) => {
    e.preventDefault();
    editPlayer(this.props.match.params.id, this.state.playerName, this.state.playerPosition, this.state.playerTeam).then((res) => {
      this.props.history.goBack();
    });
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
            <h2 style={{ margin: "5%" }}> Edit a player </h2>
            <label>
              Edit Player's name :
              <input type="text" onChange={this.handleChangePlayerName} value={this.state.playerName} placeholder="Player Name"/>
            </label><br/>

            <label>
              Edit Player's position :
              <input type="text" onChange={this.handleChangePlayerPosition} value={this.state.playerPosition} placeholder="Player Position"/>
            </label><br/>

            <label>
              Edit Player's team ID :
              <input type="text" onChange={this.handleChangePlayerTeam} value={this.state.playerTeam} placeholder="Player Team"/>
            </label><br/>


            <button type="submit">
              Edit
            </button>
        </form>
      </div>
    );
  }
}

export default (EditPlayerScreen);
