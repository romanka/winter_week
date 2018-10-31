import React, {Component} from 'react';
import styled from 'styled-components';
import {ClickButton, Titel1_White, Titel2_White} from "../helpers/styling-texts";

const Container = styled.div`
  width: 100%
  background-color: #6f7c94
  color: white;
  padding: 2rem;
  box-sizing: border-box;
`;
const TextInput = styled.input`
    width: 100%;
    display: online-block;
    padding: 0.5rem 0.5rem
    background-color: #7e8da8
    border: 2px solid #4f596b
    border-radius: 4px;
    margin-left: 0.3rem;
    margin-top: 0.4rem;
    color: white;
    font-size: 1rem;
    @media (max-width: 700px) {
        font-size: 0.6rem;
    }
`;

const FieldLabel = styled.label`
    display: block;
    padding-top: 1rem;
`;


const SelectField = styled.select`
    border: 2px solid #4f596b
    border-radius: 4px;
    margin-left: 0.3rem;
    margin-top: 0.4rem;
    padding: 0.5rem 0.5rem
    background-color: #7e8da8
    color: white
    font-size: 1rem
    @media (max-width: 700px) {
        font-size: 0.6rem;
    }
`;


class Infos extends Component {


    constructor(props) {
        super(props);
        this.state = {
            faculty: 'ICU',
            preName: '',
            lastName: '',
            email: ''
        };

    }


    handleSubmit() {
        console.log(this.state.lastName);
        console.log(this.state.preName);
        console.log(this.state.faculty);
        console.log(this.state.email)
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value})
    }

    handleFirstNameChange(event) {
        this.setState({preName: event.target.value})
    }

    handleFacultyChange(event) {
        this.setState({faculty: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <Container>
                <Titel2_White>Registration</Titel2_White>
                <FieldLabel>Firstname: </FieldLabel>
                <TextInput onChange={e => this.handleFirstNameChange(e)}/>
                <FieldLabel>Lastname: </FieldLabel>
                <TextInput onChange={e => this.handleLastNameChange(e)}/>
                <FieldLabel>Email address: </FieldLabel>
                <TextInput onChange={e => this.handleEmailChange(e)}/>
                <FieldLabel>Fachverein Member:</FieldLabel>
                <br/>
                <SelectField value={this.faculty} onChange={e => this.handleFacultyChange(e)}>
                    <option value='ICU'>ICU</option>
                    <option value='FAPS'>FAPS</option>
                    <option value='OTHER'>OTHER</option>
                </SelectField><br/>
                <ClickButton onClick={() => this.handleSubmit()}>Submit</ClickButton>

            </Container>
        )
    }
}


export default Infos;