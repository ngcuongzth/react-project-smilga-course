import React from 'react';
import styled from 'styled-components'

import { Info, Repos, User, Search, Navbar } from '../components';


import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context'

const Dashboard = () => {
  const { loading, showError } = React.useContext(GithubContext);
  if (showError) {
    return (
      <main>
        <Navbar />
        <Search />
        <Wrapper>
          <h1 className="showError">
            No response to the request
          </h1>
        </Wrapper>
      </main>
    )
  }
  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};
const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 16px
  }
`


export default Dashboard;
