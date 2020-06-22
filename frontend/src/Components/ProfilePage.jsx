import React, { Component } from 'react'
import axios from 'axios'

class profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            playerData: []

        }
    }

    getUser = () => {
        let { id } = this.state
        let url = `http://localhost:3001/skills/${id}`
        axios.get(url)
            .then((res) => {
                console.log(res.data.user)
                let data = res.data.user
                this.setState({
                    playerData: res.data.user
                })
            })
    }

    componentDidMount() {
        console.log(`profile component`, this.state.id)
        this.getUser();

    }

    // componentDidMount() {
    //     let { history } = this.state;
    //     axios.get("/matches").then((res) => {
    //       console.log(res);
    //       let matches = res.data.payload;
    //       console.log(matches);
    //       this.setState({
    //         history: res.data.payload,
    //       });
    //     });
    //   }

    render() {
        let { playerData } = this.state
        let { shooting, handle, perimiter_defence,
            interior_defence, rebounding, steals, blocks, iq, leadership } = playerData
        console.log('player data', playerData)
        return (
            <div>
                <p>{playerData.username}</p>
                <h1>STATS</h1>
                <ul className="stats">
                    <li>Shooting: {shooting}</li>
                    <li>Handle: {handle}</li>
                    <li>Perimited D: {perimiter_defence}</li>
                    <li>Interior D: {interior_defence}</li>
                    <li>Rebounding: {rebounding}</li>
                    <li>Steals: {steals}</li>
                    <li>Blocks: {blocks}</li>
                    <li>BasketBall IQ: {iq}</li>
                    <li>leadership: {leadership}</li>
                </ul>
            </div>
        )
    }
}



export default profile