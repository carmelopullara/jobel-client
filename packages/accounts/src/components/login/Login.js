import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Flex, Container, AuthBlock, Card, Logo,
} from '@jobel/ui';
import LoginForm from './LoginForm';
import Layout from 'components/Layout';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('login.index')}>
      <Container>
        <Flex alignItems="center" justifyContent="center" fullHeight>
          <AuthBlock>
            <Logo />
            <Card>
              <Card.Header>
                <h5>{t('login.title')}</h5>
              </Card.Header>
              <Card.Body>
                <LoginForm mode="Customer" />
              </Card.Body>
              <Card.Footer>
                <p>
                  {t('login.noAccount')}
                  {' '}
                  <Link to="/signup">
                    <strong>{t('signup.index')}</strong>
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

export default Login;
