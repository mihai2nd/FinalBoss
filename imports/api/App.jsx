// file: /imports/api/App.jsx
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NavBar from '/imports/ui/NavBar.jsx';

const App = ({main, routeProps, user}) => {
    return (
        <div id="app">
            {user ? <NavBar user={user} /> : null}
            {React.createElement(main, routeProps)}
        </div>
    )
})

export default createContainer((props) => {
    const user = Meteor.user();
    
    return _.extend(props, {user});
}, App);