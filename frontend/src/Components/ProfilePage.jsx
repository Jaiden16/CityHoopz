import React, { Component } from 'react'
import axios from 'axios'
import "../Css/ProfilePage.css"

class profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            imageUrl: "",
            imageFile: null,
            playerData: [],
            stats: [1, 2, 3, 4, 5],

            //stats that are displayed on user profile
            Shoot: null, //shooting stat
            Handle: null, // Handle stat
            Interior_Defence: null, //Int_D stat
            Perimiter_defence: null, //Per_D stat
            Rebounding: null, // Rebounding stat
            Blocks: null, // Blocks stat
            Steals: null, // steals stat 
            Leadership: null, //leadership stat
            Int: null,  // Intelligence stat

            //stats that are changed when user updates their stats
            o_sht: "", //shot
            o_hndl: "", //handle
            o_int_d: "", //interior d
            o_per_d: "", //perimiter d
            o_reb: "", // rebounding 
            o_blk: "", //blocks
            o_stl: "", //steals
            o_ldr: "", //leadership
            o_IQ: "" //iq

        }
    }

    handleFileInput = (e) => {
        console.log("file Change")
        console.dir(e.target.files)
        this.setState({
            imageFile: e.target.files[0]
        })
    }

    handleFileSumbit = async (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('image', this.state.imageFile)
        const url = "http://localhost:3001/upload"
        try {
            const res = await axios.post(url, data)
            console.log("data", res.data)
            this.setState({
                imageUrl: res.data.imageUrl
            })


        } catch (err) {
            console.log(err)
        }
    }

    getUser = () => {
        let { id } = this.state
        let url = `http://localhost:3001/skills/${id}`
        axios.get(url)
            .then((res) => {
                // console.log(res.data.user)
                let data = res.data.user
                this.setState({
                    playerData: data,
                    Shoot: data.shooting,
                    Handle: data.handle,
                    Interior_Defence: data.interior_defence,
                    Perimiter_defence: data.perimiter_defence,
                    Rebounding: data.rebounding,
                    Blocks: data.blocks,
                    Steals: data.steals,
                    Leadership: data.leadership,
                    Int: data.iq,
                    o_sht: data.shooting, //shot
                    o_hndl: data.handle, //handle
                    o_int_d: data.interior_defence, //interior d
                    o_per_d: data.perimiter_defence, //perimiter d
                    o_reb: data.rebounding, // rebounding 
                    o_blk: data.blocks, //blocks
                    o_stl: data.steals, //steals
                    o_ldr: data.leadership, //leadership
                    o_IQ: data.iq //iq
                })
            })
    }

    getUserPic = () => {
        let { id, imageUrl } = this.state
        let url = `/users/picture/${id}`
        axios.get(url).then((res) => {
            console.log(res.data.payload.picture)
            let picture = res.data.payload.picture
            this.setState({
                imageUrl: picture
            })
        }).catch((err) => {
            console.log(err)
        })



    }

    handleChange = (e) => {
        console.log(`${e.target.name}`, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSumbit = (e) => {
        e.preventDefault()
        console.log(`form submitter`)
        let { id, Shoot, Handle, Interior_Defence, Perimiter_defence,
            Rebounding, Blocks, Steals, Leadership, Int,
            //stats that are changed when user updates their stats
            o_sht, o_hndl, o_int_d, o_per_d, o_reb, o_blk, o_stl,
            o_ldr, o_IQ
        } = this.state

        let newStats = {}
        let url = `/skills/${id}`

        if (Shoot !== o_sht) {
            newStats.shooting = o_sht;
        }

        if (Handle !== o_hndl) {
            newStats.handle = o_hndl
        }

        if (Interior_Defence !== o_int_d) {
            newStats.interior_defence = o_int_d
        }

        if (Perimiter_defence !== o_per_d) {
            newStats.perimiter_defence = o_per_d
        }

        if (Rebounding !== o_reb) {
            newStats.rebounding = o_reb
        }

        if (Steals !== o_stl) {
            newStats.steals = o_stl
        }

        if (Blocks !== o_blk) {
            newStats.Blocks = o_blk
        }

        if (Leadership !== o_ldr) {
            newStats.leadership = o_ldr
        }

        if (Int !== o_IQ) {
            newStats.iq = o_IQ
        }




        axios.patch(url, newStats).then((res) => console.log(res.config.data))
            .catch((err) => console.log(err))
        this.setState({
            Shoot: o_sht,
            Handle: o_hndl,
            Interior_Defence: o_int_d,
            Perimiter_defence: o_per_d,
            Rebounding: o_reb,
            Blocks: o_blk,
            Steals: o_stl,
            Leadership: o_ldr,
            Int: o_IQ
        })

    }

    componentDidMount() {
        // console.log(`profile component`, this.state.id)
        this.getUser();
        this.getUserPic()

    }

    componentDidUpdate() {

    }

    render() {
        //sht, hndl, per_d, int_d, rbd, blk, stl, IQ, ldr
        let { playerData, stats, Shoot, Handle, Perimiter_defence,
            Interior_Defence, Rebounding, Steals, Blocks, Int, Leadership,
            o_sht, o_hndl, o_per_d, o_int_d, o_rbd, o_blk,
            o_stl, o_IQ, o_ldr } = this.state

        // console.log('player data', playerData)
        // console.log("state", this.state)
        return (
            <div className="ProfilePage">
                <div id="profile_username">
                    <h1 >{playerData.username}</h1>
                </div>

                <div id="Information">
                    <h2 id= "stats">STATS</h2>
                    <div id="UserStats">
                        <ul id="ListedStats">
                            <li id = "stat-item">Shooting: {Shoot}</li>
                            <li id = "stat-item">Handle: {Handle}</li>
                            <li id = "stat-item">Perimiter D: {Perimiter_defence}</li >
                            <li id = "stat-item">Interior D: {Interior_Defence}</li >
                            <li id = "stat-item">Rebounding: {Rebounding}</li >
                            <li id = "stat-item">Steals: {Steals}</li >
                            <li id = "stat-item">Blocks: {Blocks}</li >
                            <li id = "stat-item">BasketBall IQ: {Int}</li>
                            <li id = "stat-item">Leadership: {Leadership}</li>
                        </ul>
                    </div>
                </div>

                <div id="UserPic">
                    <img src={this.state.imageUrl} style={{ width: 400, height: 400 }} alt="" />
                </div>




                <form onSubmit={this.handleFormSumbit}>
                    {/* shooting, handle, perimiter d, interior d, rebounding, steals
                    blocks, iq, leadership */}
                    <label htmlFor="shooting">Shooting</label>
                    <select id="shooting" name="o_sht" onChange={this.handleChange} value={o_sht}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="handle">Handle</label>
                    <select id="handle" name="o_hndl" onChange={this.handleChange} value={o_hndl}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="perimiter_d">Perimiter d</label>
                    <select id="perimiter_d" name="o_per_d" onChange={this.handleChange} value={o_per_d}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="interior_d">Interior d</label>
                    <select id="interior_d" name="o_int_d" onChange={this.handleChange} value={o_int_d}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="rebounding">Rebounding</label>
                    <select id="rebounding" name="o_rbd" onChange={this.handleChange} value={o_rbd}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="steals">Steals</label>
                    <select id="steals" name="o_stl" onChange={this.handleChange} value={o_stl}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="blocks">Blocks</label>
                    <select id="blocks" name="o_blk" onChange={this.handleChange} value={o_hndl}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="IQ">BasketBall IQ</label>
                    <select id="IQ" name='o_IQ' onChange={this.handleChange} value={o_IQ}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="leadership">Leadership</label>
                    <select id="leadership" name="o_ldr" onChange={this.handleChange} value={o_ldr}>
                        <option disabled>Select Rating</option>
                        {stats.map((el, index) => {
                            return (
                                <option key={index} value={el}>{el}</option>
                            )
                        })}
                    </select>
                    <button>Update</button>
                </form>

                <form onSubmit={this.handleFileSumbit}>
                    <label htmlFor="picture-upload">Upload Picture</label>
                    <input id="picture-upload" type="file" onChange={this.handleFileInput} />
                    <input type="submit" value="Upload" />
                </form>
            </div>
        )
    }
}






export default profile