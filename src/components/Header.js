import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Header extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {headerText: props.headerText};
	}

	render(){
		return(
			<View>
				<View style={styles.viewStyle}>
					<Text style={styles.textStyle}>{this.state.headerText}</Text>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  textStyle :{
    fontSize: 20
  },
  viewStyle :{
  	backgroundColor: '#F8F8F8',
  	justifyContent: 'center',
  	alignItems: 'center',
  	paddingTop: 15,
  	height: 60,
  	shadowColor: '#000000',
  	shadowOffset: {
  		width: 0,
  		height: 2
  	},
  	shadowOpacity: 0.2,
  	elevation: 2,
  	position: 'relative' 
  }
});

export default Header;