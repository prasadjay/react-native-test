import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, LayoutAnimation, UIManager, Platform } from 'react-native';
import * as actions from '../../actions'
import {connect} from 'react-redux';

class ListItem extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};

		if (Platform.OS === 'android') {
      		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    	}
	}

	componentWillUpdate(){
		LayoutAnimation.spring();
	}
	
	renderDescription(){
		/*if (this.props.library.id === this.props.selectedLibraryId){
			return(
				<Text>{this.props.library.description}</Text>
			);
		}*/ //redundent.. working code

		if (this.props.expanded){
			return(
				<View style={styles.cardItemStyle}>
					<Text style={{flex:1}}>{this.props.library.description}</Text>
				</View>
			); 
		}
	}

	render(){
	
		return(
			<TouchableWithoutFeedback
			onPress={()=> this.props.selectLibrary(this.props.library.id)}
			>
				<View>
					<View style={styles.cardItemStyle}>
						<Text>{this.props.library.title}</Text>
					</View>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	cardStyle : {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	},
	cardItemStyle :{
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		borderColor: '#ddd',
		position: 'relative'
	},
	thumbnailContainerStyle :{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	titleStyle:{
		fontSize: 20,
		fontWeight: 'bold'
	},
	imageStyle:{
		height: 300,
		width: null,
		flex:1
	},
	buttonBodyStyle:{
		flex:1,
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

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
	//return {selectedLibraryId: state.selectedLibraryId}; //redundent.. working code
};

export default connect(mapStateToProps, actions) (ListItem); //null is for bcs we dont have maptoprops mapping.. second param to actions