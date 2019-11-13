import React, {useState} from 'react';

const PersonForm = props => {
    const [person, setPerson] = useState({
        name: "",
        email: '',
        role: ''
    });

    const handleChanges = event => {
        setPerson({...person, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewPerson(person);
        setPerson({
            name: '',
            email: '',
            role: ''
        });
    };

    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'> Name: </label>
            <input
                id='name'
                type='text'
                name="name"
                value={person.name}
                onChange={handleChanges}
            />
            <label htmlFor='email'> Email: </label>
            <input
                id='email'
                type='email'
                name="email"
                value={person.email}
                onChange={handleChanges}
            />
            <label htmlFor='role'> Role: </label>
            <input
                id='role'
                type='text'
                name="role"
                value={person.role}
                onChange={handleChanges}
            />
            <button type='submit'>Submit</button>
        </form>
    )
};

export default PersonForm;
