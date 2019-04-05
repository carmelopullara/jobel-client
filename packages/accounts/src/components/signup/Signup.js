import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flex, Container } from '@jobel/ui';
import { AuthBlock } from '@jobel/ui';
import { Card } from '@jobel/ui';
import SignupForm from 'components/signup/SignupForm';
import { Logo } from '@jobel/ui';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" fullHeight>
        <AuthBlock>
          <Logo />
          <Card>
            <Card.Header>
              <h5>{t('signup.title')}</h5>
            </Card.Header>
            <Card.Body>
              <SignupForm />
            </Card.Body>
            <Card.Footer>
              <p>
                {t('signup.alreadyDone')}{' '}
                <Link to="/login">
                  <strong>{t('login.index')}</strong>.
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
