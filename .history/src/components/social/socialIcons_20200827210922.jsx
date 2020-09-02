import React from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <a href="#!" className="fb-ic mr-3">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="#!" className="tw-ic mr-3">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="#!" className="gplus-ic mr-3">
        <MDBIcon fab icon="google-plus-g" />
      </a>
      <a href="#!" className="li-ic mr-3">
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="#!" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="#!" className="pin-ic mr-3">
        <MDBIcon fab icon="pinterest" />
      </a>
      <a href="#!" className="yt-ic mr-3">
        <MDBIcon fab icon="youtube" />
      </a>
      <a href="#!" className="vk-ic mr-3">
        <MDBIcon fab icon="vk" />
      </a>
      <a href="#!" className="so-ic mr-3">
        <MDBIcon fab icon="stack-overflow" />
      </a>
      <a href="#!" className="slack-ic mr-3">
        <MDBIcon fab icon="slack" />
      </a>
      <a href="#!" className="git-ic mr-3">
        <MDBIcon fab icon="github" />
      </a>
      <a href="#!" className="comm-ic mr-3">
        <MDBIcon icon="comments" />
      </a>
      <a href="#!" className="email-ic mr-3">
        <MDBIcon icon="envelope" />
      </a>
      <a href="#!" className="dribbble-ic mr-3">
        <MDBIcon fab icon="dribbble" />
      </a>
    </MDBContainer>
  );
}

export default SocialButtonsPage;