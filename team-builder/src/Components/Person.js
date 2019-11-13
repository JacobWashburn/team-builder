import React, {useState} from 'react';

const Person = props => {
    return (
        <div>
            {props.people.map(person => {
                return (
                    <div key={person.id}>
                        <h1>{person.name}</h1>
                        <h2>{person.email}</h2>
                        <h2>{person.role}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default Person;
