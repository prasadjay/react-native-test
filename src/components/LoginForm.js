import React from 'react';
import {View, Button, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class LoginForm extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = { inputText: '', passwordText: '' };
	}

	render(){
		return(
			<View>
				<Text>Sample input form</Text>
				<View style={styles.inputStyle}>
					<TextInput
					placeholder={"prasad@gmail.com"}
					autoFocus={false}
					underlineColorAndroid='transparent'
					value={this.state.inputText}
					onChangeText={ txt => this.setState({inputText: txt}) } 
					style={{height: 30, width: 200}}
					/>
				</View>
				<View style={styles.inputStyle}>
					<TextInput
					secureTextEntry={true}
					autoCorrect={false}
					autoFocus={false}
					underlineColorAndroid='transparent'
					value={this.state.passwordText}
					onChangeText={ txt => this.setState({passwordText: txt}) } 
					style={{height: 30, width: 200}}
					/>
				</View>
				<View>
					<TouchableOpacity style={styles.buttonBodyStyle}>
						<Text onPress={() => {console.log(this.state.inputText); console.log(this.state.passwordText);}} style={styles.buttonTextStyle}>Print on CMD</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputStyle:{
		marginTop: 5,
		borderWidth: 2,
		borderColor: '#083a8c',
		borderRadius: 6
	},
	buttonBodyStyle:{
		marginTop: 10,
		alignSelf: 'stretch',
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	buttonTextStyle:{
		alignSelf: 'center' ,
		color : '#007aff',
		fontSize: 16,
		fontWeight: 'bold',
		paddingTop: 10,
		paddingBottom: 10 
	}
});

export default LoginForm;