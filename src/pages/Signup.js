import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FullScreenSection } from 'styled/layout';
import {
  AuthBlock, AuthHeader, AuthFooter,
} from 'styled/common';
import SignupForm from 'components/SignupForm';
import Logo from 'components/Logo';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <FullScreenSection>
      <AuthBlock>
        <AuthHeader>
          <Logo />
          <h2>{t('signup.title')}</h2>
        </AuthHeader>
        <SignupForm />
        <AuthFooter>
          <p>
            {t('signup.alreadyDone')}
            {' '}
            <Link to="/login">
              <strong>{t('login.index')}</strong>
            </Link>
          </p>
        </AuthFooter>
      </AuthBlock>
    </FullScreenSection>
  );
};

export default Signup;
