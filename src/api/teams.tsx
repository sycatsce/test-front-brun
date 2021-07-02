import { baseURI } from './constants';
import axios from 'axios';

interface Team {
    id: string,
    name: string,
    description: string,
    iconURL: string,
}

//List every teams
export async function getTeams(): Promise<Array<Team>>{
    let res = await axios.get(baseURI + '/api/v1/teams', {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res.data;
}

//Get a team's infos given it's id
export async function getTeam(id: string): Promise<Team>{
    let res = await axios.post(baseURI + '/api/v1/team', { id }, { headers: { "Content-Type": "application/json" }});
    return res.data[0];
}
