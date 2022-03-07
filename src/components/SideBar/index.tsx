import React from 'react';

import StickBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';

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

      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Willian Santos"
                nickname="@williansantos"
                avatar="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
              />,
              <FollowSuggestion
                name="Caio Luiz"
                nickname="@caioluiz"
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhJ0u2kTQ9eD1JW3irleD5c76Yg2wT7N8UQ&usqp=CAU"
              />,
              <FollowSuggestion
                name="Rebeka Kimberly"
                nickname="@rebekakimberly"
                avatar="https://i.pinimg.com/474x/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a--stupid-stuff-stay-calm.jpg"
              />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;
