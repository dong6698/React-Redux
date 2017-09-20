import React from 'react';
import ReactDOM from 'react-dom';

/* Rendering Multiple Components
const number = [1,2,3,4,5];
const listItem = number.map((number)=>
	<li>{number}</li>
	);

ReactDOM.render(
	<ul>{listItem}</ul>,
	document.getElementById('root')
	);
*/

/* Basic List Component
function NumberList(props){
	const numbers = props.numberlist;
	const listNumbers = numbers.map((number)=>
		<li key={number.toString()}>
			{number}
		</li>
	);

	return (
		<ul>{listNumbers}</ul>
	);
}
const numbers = [1,2,3,4,5,6];
ReactDOM.render(
	<NumberList numberlist={numbers} />,
	document.getElementById('root')
);
*/

/* Keys
The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. 
Most often you would use IDs from your data as keys

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
); 
*/

/* Extracting Components with Keys
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/






