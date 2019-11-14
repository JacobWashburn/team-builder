import React, {useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  margin: .5rem 0;
`;

const Input = styled.input`
  width: 100%;
`;

const Button = styled.button`
  font-size: 1.5rem;
  border-radius: 1rem;
`;

const Error = styled.h1`
  //display: none;
`;

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
            // props.addNewPerson(person);
            // setPerson({
            //     name: '',
            //     email: '',
            //     role: ''
            // });

            if (person.name && person.email && person.role) {
                props.addNewPerson(person);
                setPerson({
                    name: '',
                    email: '',
                    role: ''
                });
                Error.display = 'none'
            }else{
                Error.display = 'block'
            }
            ;
        };

        return (
            <Form onSubmit={submitForm}>
                <InputWrapper>
                    <label htmlFor='name'>Name: </label>
                    <Input
                        id='name'
                        type='text'
                        name="name"
                        value={person.name}
                        onChange={handleChanges}
                    />
                </InputWrapper>
                <InputWrapper>

                    <label htmlFor='email'>Email: </label>
                    <Input
                        id='email'
                        type='email'
                        name="email"
                        value={person.email}
                        onChange={handleChanges}
                    />
                </InputWrapper>
                <InputWrapper>

                    <label htmlFor='role'>Role: </label>
                    <Input
                        id='role'
                        type='text'
                        name="role"
                        value={person.role}
                        onChange={handleChanges}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Button type='submit'>Join Our Team</Button>
                </InputWrapper>
                <Error>Please fill in all areas.</Error>
            </Form>
        );
    }
;

export default PersonForm;
