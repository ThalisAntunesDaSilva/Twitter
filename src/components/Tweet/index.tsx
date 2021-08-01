import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
      <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Thalis Antunes</strong>
            <span>@thalisantunes_</span>

            <Dot />    
            <time>30 de jul</time>
          </Header>

          <Description>Pai ta on 👨🏻‍💻</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              25
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
