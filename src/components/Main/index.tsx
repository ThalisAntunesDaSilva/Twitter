import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Thalis Antunes</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      {/*
<ProfilePage />
*/}
      {/*
<BottomMenu>
  <HomeIcon/>
  <SearchIcon />
  <BellIcon />
  <BellIcon />

</BottomMenu>
*/}
    </Container>
  );
};

export default Main;
