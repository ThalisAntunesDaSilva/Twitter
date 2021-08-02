import React from 'react';
import StickyBox from 'react-sticky-box'

import List from '../List';
import FollowSugestion from '../FollowSuggestion';
import News from '../News';



import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
     <StickyBox>
      <Body>
      <List
            title= "Talvez você curta"
            elements={[
              <FollowSugestion 
                name="Fulano da Silva"
                nickname="@silvaFu"
              />,
              <FollowSugestion 
              name="Renato Augusto"
              nickname="@augusto_renato"
            />,
            <FollowSugestion 
            name="Silvana Silva"
            nickname="@silvana"
          />,
            ]}
      />

      <List
            title= "Talvez você curta"
            elements={[
             <News />, <News />, <News />
            ]}
      />
      </Body>
      </StickyBox>

    </Container>
  );
};

export default SideBar;
