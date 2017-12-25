export default (state = null, action) => { //init to null cus will throw error since undefined at start for position.
	//console.log(action);
	
	switch(action.type){
		case "select_library":
			return action.payload;
			break;
		default:
			return state;
			break;
	}
}