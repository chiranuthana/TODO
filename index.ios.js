import React, {component } from 'react';
import { AppRegistry, View} from 'react-native';
import Home from './src/components/home/Home.js

class reactTutourialApp extends Component {
	render() {
		return(
			<view>
				<home />
			</view>
		);
	}
}

export default reactTutourialApp
AppRegistry.registerComponent('reactTutourialApp', () => reactTutorialApp);
