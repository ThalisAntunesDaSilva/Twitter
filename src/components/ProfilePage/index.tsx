import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Thalis Antunes</h1>
        <h2>@thalisantunes</h2>
        <p>
          Developer in
          <a href="https://unipampa.com.br"> @Unipampa</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Alegrete, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 14 de Dezembro de 1998
          </li>
        </ul>

        <Followage>
          <strong>94</strong> <span>seguindo </span>
          <strong>672 </strong> <span>seguidores</span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
