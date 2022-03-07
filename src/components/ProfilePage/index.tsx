import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditarButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4E03AQH5jxyPM7mRHQ/profile-displayphoto-shrink_200_200/0/1645489589409?e=1652313600&v=beta&t=vwyM4jLfABDRGT-VMBgw4LS0gT6ASjzYes7HcGvD9Fs"
          alt="Foto Perfil"
        />
      </Banner>

      <ProfileData>
        <EditarButton outlined>Editar perfil</EditarButton>
        <h1>Mary Stefany</h1>
        <h2>@marystefany</h2>

        <p>
          GitHub profile <a href="https://github.com">Mary Stefany</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de agosto de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>95</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
