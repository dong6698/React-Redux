import React from 'react';
import ReactDOM from 'react-dom';

/*
in JavaScript, 
true && expression = expression
false && expression = false.
*/

/*
    Inline If-Else with Conditional Operator
    
    {unreadMessages.length > 0 ? 
        (<h2>You have {unreadMessages.length} unread messages.</h2>)
        :
        (<h2>You have {unreadMessages.length} unread messages.</h2>)
     }
*/


function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const unread_messages = ['1', '2', '3'];
ReactDOM.render(
  <Mailbox unreadMessages={unread_messages} />,
  document.getElementById('root')
);