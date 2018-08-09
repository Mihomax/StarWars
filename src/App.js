import React,{Component} from 'react';
import  "./css/mycss.css";
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';
//import Content from './components/Content/Content';


class App extends Component {
	constructor(props) {
    super(props);

this.state = {
	server: 'http://127.0.0.1/api.php',
	data:[],
	peopleData: [],
	planetsData: [],
	starshipsData: [],

	people:'people',
	planets:'planets',
	starships:'starships',
	search:'',
	current:'people'
}
this.handleChange = this.handleChange.bind(this);
this.dataChanger = this.dataChanger.bind(this);
this.searchQuery = this.searchQuery.bind(this);
	};

	componentWillMount = () => {
		
		axios.post(this.state.server, this.state.people, {
			headers : {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			}
	})
		.then((res) => {
			this.setState({dataPeople:res.data.results});
			//console.log(this.state.dataPeople);
		})
		.catch((err) => {
			console.log("AXIOS ERROR: ", err);
		});
		
		axios.post(this.state.server, this.state.planets, {
			headers : {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			}
	})
		.then((res) => {
			this.setState({dataPlanets:res.data.results});
			//console.log(this.state.dataPlanets);
		})
		.catch((err) => {
			console.log("AXIOS ERROR: ", err);
		});

		axios.post(this.state.server, this.state.starships, {
			headers : {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			}
	})
		.then((res) => {
			this.setState({dataStarships:res.data.results});
			//console.log(this.state.dataStarships);
		})
		.catch((err) => {
			console.log("AXIOS ERROR: ", err);
		});

	}

	dataChanger = (command) => {
		this.setState({data:command});
	}
	searchQuery = (command) => {
		axios.post(this.state.server, command, {
			headers : {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			}
	})
		.then((res) => {
			//console.log(res.data.results);
			this.setState({data:res.data.results});
			
		})
		.catch((err) => {
			console.log("AXIOS ERROR: ", err);
		});
	}

handleChange = (event) => {
	this.setState({search:event.target.value});

	}

render() {
	const style = {color:"white"};
	let result = this.state.data.map((each,index) => <li key={index} style={style}> {each.name}</li>
		);
			
    return (
		<Router>
            <div>
				<Link  className="w3-btn" onClick={(e) => this.dataChanger(this.state.dataPeople)} to="/people">Click to see SW guys</Link>
				<Link  className="w3-btn" onClick={(e) => this.dataChanger(this.state.dataPlanets)} to="/planets">Click to see all planets</Link>
				<Link  className="w3-btn" onClick={(e) => this.dataChanger(this.state.dataStarships)} to="/starships">Click to see starships</Link><br/>
				<input  onChange={this.handleChange} value={this.state.search} placeholder="Person's name here ..."/><br/>
				<Link  className="w3-btn" onClick={(e) => this.searchQuery("/?search="+this.state.search)} to="/search">Search for persons</Link>

				<p>May the force be with you . . .</p>
				{/* <Content content = {result} option = {this.state.current}/> */}
		 			<ul> {result} </ul> 
				 
			</div>    
		</Router>
			  )
}
}

export default App;

