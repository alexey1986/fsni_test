import React from 'react';
import { Nav } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

const SocialButtons = () => {
  return (
    <Nav className="mr-auto" >
      <Nav.Link href="#!" className="fb-ic mr-3">
        <MDBIcon fab icon="facebook-f" />
      </Nav.Link>
      <Nav.Link href="#!" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </Nav.Link>
      <Nav.Link href="#!" className="vk-ic mr-3">
        <MDBIcon fab icon="vk" />
      </Nav.Link>
    </Nav>
  );
}

export default SocialButtons;