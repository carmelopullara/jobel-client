import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flex } from 'styled/layout';
import { AuthBlock, AuthHeader, AuthFooter, Card } from 'styled/common';
import SignupForm from 'components/signup/SignupForm';
import Logo from 'components/shared/Logo';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <AuthBlock>
        <Logo />
        <Card>
          <AuthHeader>
            <h3>{t('signup.title')}</h3>
          </AuthHeader>
          <SignupForm />
        </Card>
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
    </Flex>
  );
};

export default Signup;
