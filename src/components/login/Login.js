import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flex } from 'styled/layout';
import {
  AuthBlock, AuthHeader, AuthFooter,
} from 'styled/common';
import LoginForm from './LoginForm';
import Logo from 'components/shared/Logo';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <AuthBlock>
        <AuthHeader>
          <Logo />
          <h3>{t('login.title')}</h3>
        </AuthHeader>
        <LoginForm />
        <AuthFooter>
          <Link to="/password/forgot">{t('login.forgot')}</Link>
          <p>
            {t('login.noAccount')}
            {' '}
            <Link to="/signup">
              <strong>{t('signup.index')}</strong>
            </Link>
          </p>
        </AuthFooter>
      </AuthBlock>
    </Flex>
  );
};

export default Login;
