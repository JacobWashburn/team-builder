import React, {useState} from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 45%;
  border: 1px solid red;
  
`;
const Name = styled.h1`

`;
const Email = styled.h2`

`;
const Role = styled.h2`

`;
const Person = props => {
    return (
        <CardWrapper>
            {props.people.map(person => {
                return (
                    <Card key={person.id}>
                        <Name>{person.name}</Name>
                        <Email>{person.email}</Email>
                        <Role>{person.role}</Role>
                    </Card>
                );
            })}
        </CardWrapper>
    );
};

export default Person;
