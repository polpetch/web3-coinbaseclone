import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Main from '../components/Main';
import Sidebar from '../components/Sildbar';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`

const MainContainer = styled.div`
  flex: 1; 
`

const Dashboard = () => {
  return (
  <Wrapper>
    <Sidebar/>
    <MainContainer>
      <Header/>
      <Main/>
    </MainContainer>
  </Wrapper>
  )
}



export default Dashboard