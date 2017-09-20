let nextTodoId = 0;

// 1. Takes the text from AddTodo field and returns proper “Action” JSON to send to other components.
export const addTodo = (text) => {
	return ({
		type: 'ADD_TODO',
		id: nextTodoId++,
		text: text,
		completed: false
	});
}

// 2. Takes filter string and returns proper “Action” JSON object to send to other components.
export const setVisibilityFilter = (filter) => {
	return ({
		type: 'SET_VISIBILITY_FILTER',
		filter: filter
	});
}

//3. Takes Todo item’s id and returns proper “Action” JSON object to send to other components.
export const toggleTodo = (id) => {
 	return ({
 		type: 'TOGGLE_TODO',
 		id: id
 	});
}