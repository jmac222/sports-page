import React from "react";
import { Component } from "react";
import axios from "axios";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  async componentDidMount() {
    let url = `http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=40`;
    let result = null;

    try {
      result = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
    this.setState({ teams: result.data.sports[0].leagues[0].teams });
  }

  render() {
    console.log(this.state.teams);
    let mapArray = this.state.teams.map((team) => {
      return (
        <div className="team">
          <img src={team.team.logos[0].href} />
          <h1>{team.team.name}</h1>
          <p>{team.team.record.items[0].summary}</p>
        </div>
      );
    });

    return (
      <div>
        <h1>NFL Teams</h1>
        <div className="teams">{mapArray}</div>
      </div>
    );
  }
}

export default Teams;
