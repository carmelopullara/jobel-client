import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Flex, Container, AuthBlock, Card, Logo,
} from '@jobel/ui';
import ForgotForm from './ForgotForm';
import Layout from 'components/Layout';

const Forgot = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('password.forgot.index')}>
      <Container>
        <Flex alignItems="center" justifyContent="center" fullHeight>
          <AuthBlock>
            <Logo />
            <Card>
              <Card.Header>
                <h5>{t('password.forgot.title')}</h5>
              </Card.Header>
              <Card.Body>
                <ForgotForm />
              </Card.Body>
              <Card.Footer>
                <p>
                  <Link to="/candidate/login">
                    <strong>{t('password.forgot.return')}</strong>
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

export default Forgot;
