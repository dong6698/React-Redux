import { SHOW_DETAIL } from '../constant/ActionTypes';

export default function users(state = null, action) {
	switch(action.type){
		case SHOW_DETAIL: 
			return action.payload
		default:
			return state
	}
}