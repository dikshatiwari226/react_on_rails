import react from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from './Routes';

export default class App extends React.Component{
	render(){
		 console.log('app being mounted');
		return(
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/"></Link>
						</li>
						<li>
							<Link to="/hello_world">Hello World</Link>
						</li>
						<li>
							<Link to="/bye_world">Bye World</Link>
						</li>
					</ul>
				</div>
				
				<Routes/>
			</Router>
		);
	}
}