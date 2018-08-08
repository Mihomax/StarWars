import React,{Component} from 'react';
import  "./css/mycss.css";
import axios from 'axios';


class App extends Component {
	constructor(props) {
    super(props);

this.state = {
	data:[],
	people:'people',
	planets:'planets',
	starships:'starships',
	search:null
}

this.postCommand = this.postCommand.bind(this)
	};

	postCommand = (command) => {
		
		axios.post('http://127.0.0.1/php_test/api.php', command, {
			headers : {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			}
	})
		.then((res) => {
			console.log(res.data.results);
			this.setState({data:res.data.results});
		})
		.catch((err) => {
			console.log("AXIOS ERROR: ", err);
		});

	}

  

// componentWillMount () {
		
// axios.post('http://127.0.0.1/php_test/api.php', this.state.people, {
// 			headers : {
// 					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
// 			}
// 	})
// 		.then((res) => {
// 			console.log(res.data.results);
// 			this.setState({data:res.data.results});
// 		})
// 		.catch((err) => {
// 			console.log("AXIOS ERROR: ", err);
// 		})

// 	}
    render() {
		
		let result = this.state.data.map((each,index) => <li key={index}> {each.name}</li>
		);
		
			
        return (
              <div>
				  <ul>
				{result}
				  </ul>
				  <button onClick={(e) => this.postCommand(this.state.people)}>Click to see SW guys!</button>
				  <button onClick={(e) => this.postCommand(this.state.planets)}>Click to see all the planets</button>
				  <button onClick={(e) => this.postCommand(this.state.starships)}>Click to see starships</button>
              </div>      
        )
}
}
  



export default App;


// componentWillMount () {
  //   fetch('http://127.0.0.1/php_test/api.php')
  //     .then(response => response.json())
  //     .then((responseJSON) =>  this.setState({data:responseJSON.data}))
	// 	};
		
		// componentWillMount () {
		// 	const formData = new FormData();
 		// 	formData.append('name', "Sam")
		// 	axios.post('http://127.0.0.1/php_test/api.php', formData)
		// 	.then((response) => {
		// 		this.setState({data:response.data});
		// 	});
		// };

		// 	componentWillMount () {
// 	fetch('http://127.0.0.1/php_test/api.php', {
//   method: 'POST',
//   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//   body: JSON.stringify({text: "blablabla", id_product: "12"})
// }).then((response) => response.text())
// .then((responseData) => { console.log("response: " + responseData); })
// .catch((err) => { console.log(err); });