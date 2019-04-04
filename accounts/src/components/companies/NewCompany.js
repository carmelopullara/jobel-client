import React, { useContext } from 'react';
import { UserContext } from 'context';
import { Flex, Container } from '@jobel/ui/layout';
import { AuthBlock, Alert } from '@jobel/ui/common';
import Card from '@jobel/ui/card';
import Logo from 'components/shared/Logo';
import NewCompanyForm from './NewCompanyForm';

const NewCompany = () => {
  const { state: { currentUser } } = useContext(UserContext);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" fullHeight>
        <AuthBlock>
          <Logo />
          <Card>
            <Card.Header>
              <>
                <h5>
                  {currentUser.firstName}
                  {' '}
                  {currentUser.lastName}
                </h5>
                <p>{currentUser.email}</p>
              </>
            </Card.Header>
            <Card.Body>
              <Alert warning center>Awesome! Now tell us about your company.</Alert>
              <NewCompanyForm />
            </Card.Body>
          </Card>
        </AuthBlock>
      </Flex>
    </Container>
  );
};

export default NewCompany;
