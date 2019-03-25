import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flex, Container } from 'styled/layout';
import { AuthBlock } from 'styled/common';
import Card from 'styled/card';
import SignupForm from 'components/signup/SignupForm';
import Logo from 'components/shared/Logo';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" fullHeight>
        <AuthBlock>
          <Logo />
          <Card>
            <Card.Header>
              <h4>{t('signup.title')}</h4>
            </Card.Header>
            <Card.Body>
              <SignupForm />
            </Card.Body>
            <Card.Footer>
              <p>
                {t('signup.alreadyDone')}
                {' '}
                <Link to="/login">
                  <strong>{t('login.index')}</strong>
                  .
                </Link>
              </p>
            </Card.Footer>
          </Card>
        </AuthBlock>
      </Flex>
    </Container>
  );
};

export default Signup;
