import { baseURI } from './constants';
import axios from 'axios';

interface Player {
    id: string,
    name: string,
    position: string,
    teamId: string,
}

//List the players of a team
export async function getPlayersFromATeam(id: string): Promise<Array<Player>>{
    let res = await axios.post(baseURI + '/api/v1/team-players', { id }, { headers: { "Content-Type": "application/json"}});
    return res.data;
}

//Get a player infos given it's id
export async function getPlayer(id:string): Promise<Array<Player>>{
    let res = await axios.post(baseURI + '/api/v1/get-player',  { id });
    return res.data;
}

//Delete az player given it's id
export async function deletePlayer(id: string): Promise<Array<Player>>{
    let res = await axios.delete(baseURI + '/api/v1/player', { data : { id : id } });
    return res.data;
}

//Create a player
export async function createPlayer(name: string, position: string, teamId: string): Promise<Array<Player>>{
    let res = await axios.post(baseURI + '/api/v1/player',  { name, position, teamId });
    return res.data;
}

//Edit a player's info
export async function editPlayer(id:string, name?: string, position?: string, teamId?: string): Promise<Array<Player>>{
    let res = await axios.put(baseURI + '/api/v1/player',  { id, name, position, teamId });
    return res.data;
}