import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FullScreenSection } from 'styled/layout';
import {
  AuthBlock, AuthHeader, AuthFooter,
} from 'styled/common';
import LoginForm from 'components/LoginForm';
import Logo from 'components/Logo';

const Login = () => {
  const { t } = useTranslation();

  return (
    <FullScreenSection>
      <AuthBlock>
        <AuthHeader>
          <Logo />
          <h2>{t('login.title')}</h2>
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
    </FullScreenSection>
  );
};

export default Login;
