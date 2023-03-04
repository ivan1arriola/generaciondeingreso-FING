import React from 'react';
import styled from 'styled-components';
import { Form, FormControl } from 'react-bootstrap';
import Button from '../Buttom';

const StyledForm = styled(Form)`
  margin-left: auto;
`;

function NavBarForm() {
  return (
    <StyledForm className="d-flex">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
      <Button variant="outline-success">Search</Button>
    </StyledForm>
  );
}

export default NavBarForm;
