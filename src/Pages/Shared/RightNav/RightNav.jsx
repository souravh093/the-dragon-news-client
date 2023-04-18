import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png';

const RightNav = () => {
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button variant="outline-primary d-flex align-items-center gap-2 mb-2">
          <FaGoogle />
          Login with Google
        </Button>
        <Button variant="outline-secondary d-flex align-items-center gap-2">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <ListGroup className="mt-5">
        <h4 className="mb-2">Find Us On</h4>
        <ListGroup.Item className="d-flex align-items-center gap-2"><FaFacebook />Facebook</ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center gap-2"><FaInstagram />Instagram</ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center gap-2"><FaTwitter />Twitter</ListGroup.Item>
      </ListGroup>
      <QZone />
      <div className="position-relative">
        <img className="w-100" src={bg} alt="" />
        <div className="text-center position-absolute bottom-50 text-white p-2">
            <h3>Create an Amazing Newspaper</h3>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className="btn btn-danger">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
