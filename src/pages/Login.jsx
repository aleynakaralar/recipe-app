import React from 'react'
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledForm,
  StyledInput,
  StyledButton,
} from './Login.style';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <LoginContainer>
    <FormContainer>
      <Header>Recipe</Header>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder="username" required />
        <StyledInput type="password" placeholder="password" required />
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </FormContainer>
  </LoginContainer>
  )
}

export default Login