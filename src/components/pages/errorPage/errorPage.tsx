import React, {Fragment} from 'react';
import { Container } from '@material-ui/core';

const ErrorPage = () => {
  return (
    <Fragment>
      <Container>
        Api Failure. Please retry by refreshing
      </Container>
    </Fragment>
  );
}

export default ErrorPage;