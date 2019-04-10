import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Flex, Container, AuthBlock, Card, Logo,
} from '@jobel/ui';
import Layout from 'components/Layout';
import SignupForm from 'components/signup/SignupForm';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('signup.index')}>
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
    </Layout>
  );
};

export default Signup;
