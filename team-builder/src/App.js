import React, {useState} from 'react';
import styled from 'styled-components';

import './App.css';
import PersonForm from './Components/PersonForm';
import Person from './Components/Person';

const AppContainer = styled.div`

`;
const JoinH1 = styled.h1`

`;

function App () {
    const [people, setPeople] = useState([{
        name: '',
        email: '',
        role: ''
    }]);

    const addNewPerson = person => {
        const newPerson = {
            id: Date.now(),
            name: person.name,
            email: person.email,
            role: person.role
        };
        setPeople([...people, newPerson]);
    };

    return (
        <AppContainer className="App">
            <JoinH1>Join Our Team!</JoinH1>
            <PersonForm addNewPerson={addNewPerson}/>
            <Person people={people}/>
        </AppContainer>
    );
}

export default App;
