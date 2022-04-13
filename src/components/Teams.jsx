import React from "react";
import { Component } from "react";
import axios from "axios";
import { linkContext } from "../util/context";

class Teams extends Component {
  static contextType = linkContext;
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      search: "",
      comp: "",
    };
  }

  async componentDidUpdate() {
    const { link, setLink } = this.context;

    console.log(link);
    let url = `http://site.api.espn.com/apis/site/v2/sports/${link}/teams?limit=100`;
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
    const { link, setLink, leagueName } = this.context;

    
    console.log(this.state.teams);
    let mapArray = this.state.teams
      .filter((team) => {
        return Object.values(team.team)
          .join("")
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      })
      .map((team) => {
        return (
          <div className="team">
            <img src={team.team.logos[0].href} width="100px" height="100px" />
            <div className="content">
              <h2>{team.team.name}</h2>
              <p>{team.team.record.items[0].summary}</p>
            </div>
          </div>
        );
      });
    if (mapArray == '') {
     
      return <h1>Welcome to AllSports</h1>
    } else {

      return (
        <div>
          <h1>{leagueName} Teams</h1>
          <div className="inp">
            <input
              type="text"
              placeholder="Search for teams"
              className="search"
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
            />
          </div>
          <div className="teams">{mapArray}</div>
        </div>
      );
    }
  }
}

Teams.contextType = linkContext;
export default Teams;
