import React, { Fragment } from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';

const SocialButtons = () => {
  return (
    <Fragment>
      <a href="#!" className="fb-ic mr-3">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="#!" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </a>     
      <a href="#!" className="vk-ic mr-3">
        <MDBIcon fab icon="vk" />
      </a>
    </Fragment>
  );
}

export default SocialButtons;