import React from 'react';
import {View, Text, Image, Button, WebView, StyleSheet, TouchableOpacity, Linking} from 'react-native';

class AlbumDetail extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render(){
		return(
			<View style={styles.cardStyle}>
				<View style={styles.cardItemStyle}>
					<View  style={styles.thumbnailContainerStyle}>
						<Image source={{uri: this.props.record.thumbnail_image}} style={{width: 50, height: 50}}/>
					</View>
					<View flexDirection='column' justifyContent='space-around'  >
						<Text style={styles.titleStyle}>{this.props.record.title}</Text>
						<Text>{this.props.record.artist}</Text>
					</View>
				</View>
					
				<View style={styles.cardItemStyle}>
					<Image source={{uri: this.props.record.image}} style={styles.imageStyle}/>
				</View>

				<View>
					{/*<Button onPress={}  title="Learn More"  color="#841584"  accessibilityLabel="Learn more about this purple button">{this.props.record.url}</Button>*/}
					<TouchableOpacity style={styles.buttonBodyStyle}>
						<Text onPress={() => Linking.openURL(this.props.record.url)} style={styles.buttonTextStyle}>Buy on Amazon</Text>
					</TouchableOpacity>
				</View>
				
			</View>
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

export default AlbumDetail;