/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import { Flex, Box } from '@jobel/ui';
import { AuthBlock, Title } from '@jobel/ui';
import { Pattern } from '@jobel/ui';
import LoginForm from './LoginForm';
import Logo from 'components/shared/Logo';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Flex>
      <Box lg="7">
        <Pattern />
      </Box>
      <Box lg="5">
        <Flex alignItems="center" justifyContent="center" fullHeight>
          <AuthBlock small>
            <Logo />
            <Title>
              <h5>{t('jobSeeker.login.title')}</h5>
            </Title>
            <LoginForm mode="JobSeeker" />
            <p
              css={`
                text-align: center;
                margin-top: 1rem;
              `}
            >
              {t('login.noAccount')}{' '}
              <Link to="/candidate/signup">
                <strong>{t('signup.index')}</strong>
              </Link>
            </p>
          </AuthBlock>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;
