import React from 'react';
import styled from 'styled-components';
import { login } from '../actions';
import { connect } from 'react-redux';

const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 3.0rem;
    font-family: "Ubuntu Condensed", sans-serif;
`;

const ErrorMessage = styled.p`
    background-color: red;
    width: 100%;
    color: white;
    font-size: 2.0rem;
    text-align: center;
`;

const LoginLogo = styled.img`
    margin: 10px 0;
`;

const LoginForm = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

const LoginInput = styled.input`
    font-size: 3.0rem;
    text-align: start;
    margin-bottom: 50px;
    width: 60%;
    height: 80px;
    padding: 0px 100px;
`;

const LoginBtn = styled.button`
    cursor: pointer;
    width: 45%;
    border-radius: 10px;
    font-family: "Ubuntu Condensed", sans-serif;
    font-size: 3.0rem;
    opacity: 0.70;
    color: white;
    background-color: blue;
    height: 80px;
    padding: 0px 100px;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    inputHandler = e => {
        this.setState({ [e.target.name] : e.target.value});
    }

    loginHelper = e => {
        e.preventDefault();
        this.props.login({username : this.state.username, password : this.state.password})
            .then(() => { this.props.history.push('/friendslist')})
        this.setState({username:'', password:''});
    }



    render() {
        return (
            <LoginPage>
                <LoginLogo src={process.env.PUBLIC_URL + 'Naught-logo.png'} />
                <ErrorMessage>
                    {this.props.errMsg ? 
                    `${this.props.errMsg} error has occured, please try again.` :
                    null 
                    }
                </ErrorMessage>
                <LoginForm onSubmit={this.loginHelper}>
                    <LoginInput
                        className="login-input"
                        type="username"
                        name="username"
                        placeholder="Username..."
                        value={this.state.username}
                        onChange={this.inputHandler}
                    /> 
                    <LoginInput
                        className="login-input"
                        type="password"
                        name="password"
                        placeholder="Password..."
                        value={this.state.password}
                        onChange={this.inputHandler}
                    />
                    <LoginBtn className="login-button">Login</LoginBtn>
                </LoginForm>
            </LoginPage>
        );
    }
}

const mapStateToProps = state => {
    return {
        errMsg : state.errMsg
    };
}

export default connect(mapStateToProps, { login })(Login);