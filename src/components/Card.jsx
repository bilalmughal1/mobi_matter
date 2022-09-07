import React from "react";
// import Button from "react-bootstrap/Button";
import BootstrapCard from "react-bootstrap/Card";

function Card({ props }) {
  return (
    <div className="col">
      <BootstrapCard>
        <BootstrapCard.Img variant="top" src={props.providerLogo} />
        <BootstrapCard.Body>
          <BootstrapCard.Title>{props.externalProductId}</BootstrapCard.Title>
          <BootstrapCard.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </BootstrapCard.Text>

          {/* <BootstrapCard.Text>{props}</BootstrapCard.Text>
           */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </BootstrapCard.Body>
      </BootstrapCard>
    </div>
  );
}

export default Card;
