import React, { PropTypes } from 'react'; 

const AddTodoForm = ({ onSubmit }) => {
	let input;

	return (
		<div>
			<form onSubmit={e => {
        		e.preventDefault()
        		if (!input.value.trim()) {
          			return
        		}
        		onSubmit(input.value)
        		input.value = ''
      		}}>
        		<input ref={node => { input = node }} placeholder="Plz input some todos"/>
        		<button type="submit"> Add Todo </button>
      </form>
		</div>
	)
}

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddTodoForm;