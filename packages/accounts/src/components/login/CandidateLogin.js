/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import {
  Flex, Box, AuthBlock, Title, Pattern, Logo,
} from '@jobel/ui';
import LoginForm from './LoginForm';
import Layout from 'components/Layout';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('login.index')}>
      <Flex>
        <Box lg="6">
          <Pattern />
        </Box>
        <Box lg="6">
          <Flex alignItems="center" justifyContent="center" fullHeight bg="#fff">
            <AuthBlock small>
              <Logo left />
              <Title align="left">
                <h5>{t('jobSeeker.login.title')}</h5>
              </Title>
              <LoginForm mode="JobSeeker" align="left" />
              <p
                css={`
                  margin-top: 2rem;
                `}
              >
                {t('login.noAccount')}
                {' '}
                <Link to="/candidate/signup">
                  <strong>{t('signup.index')}</strong>
                </Link>
              </p>
            </AuthBlock>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Login;
