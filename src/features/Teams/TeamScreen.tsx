import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { deletePlayer, getPlayersFromATeam } from '../../api/players';
import { getTeam } from '../../api/teams';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';


interface Params {
    id:string;
};

interface Team {
    id: string,
    name: string,
    description: string,
    iconURL: string,
}

interface Player {
    id: string,
    name: string,
    position: string,
    teamId: string,
}

type Players = Player[];

function TeamScreen(){
    const [team, setTeam] = useState<Team>({ id: "", name: "", description: "", iconURL: ""});
    const [players, setPlayers] = useState<Players>([]);
    let { id }: Params  = useParams();

    //API call before each render to get the team infos and the players list updated
    useEffect(() => {
        getTeam(id).then((t) => {
            setTeam(t);
        });

        getPlayersFromATeam(id).then((players) => {
            setPlayers(players);
        })
    }, [])


    return (
        <div className="team-details">
            <h1 className="team-details-name">{team.name}</h1>

            <div className="team-details-informations">
                <img className="team-details-icon" src={`${team.iconURL}`}/><br/>

                <div className="team-details-descriptions">
                    <b><u> Description </u></b>
                    <p>{team.description}</p>
                </div>
            </div>
            
            <div className="team-details-players-title">
                <b><u> List of players </u></b>
                <Link to="/player/create">
                    <Icon style={{ color: green[500] }}>add_circle</Icon>
                </Link>
                <div className="team-details-players">
                    { players.map((player) => {
                        return (
                            <div className="team-details-player">
                                <p className="player-name">{player.name}</p>
                                <p className="player-position">{player.position}</p>
                                <DeleteIcon onClick={() => { 
                                    if(!window.confirm("Delete this player ?")) return;
                                        deletePlayer(player.id).then((res) => { 
                                            getPlayersFromATeam(id).then((players) => {
                                                setPlayers(players);
                                        })
                                }) }}/>
                                <Link to={`/player/edit/${player.id}`} ><EditIcon/></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamScreen;
