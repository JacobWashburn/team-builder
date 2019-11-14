import React, {useState} from 'react';
import styled from 'styled-components';

import './App.css';
import PersonForm from './Components/PersonForm';
import Person from './Components/Person';

const AppContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;
const JoinH1 = styled.h1`

`;

function App () {
    const [people, setPeople] = useState([{
        name: 'Jacob Washburn',
        email: 'jacobisawesome@sauce.com',
        role: 'tinkerer'
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
