import React from 'react';
import { useTranslation } from 'react-i18next';
import { FullScreenSection } from 'styled/layout';
import { AuthBlock } from 'styled/common';
import LoginForm from 'components/LoginForm';

const Login = () => {
  const { t } = useTranslation();
  return (
    <FullScreenSection>
      <AuthBlock>
        <h2>{ t('login.title') }</h2>
        <LoginForm />
      </AuthBlock>
    </FullScreenSection>
  );
};

export default Login;
