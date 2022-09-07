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
          <BootstrapCard.Text>{props.productCategory}</BootstrapCard.Text>
          <BootstrapCard.Text>{props.regions}</BootstrapCard.Text>
          <BootstrapCard.Text>
            {props.currencyCode} {props.retailPrice}
          </BootstrapCard.Text>
          <BootstrapCard.Text>{props.isAvailable}</BootstrapCard.Text>
          {/* <BootstrapCard.Text>{props}</BootstrapCard.Text>
           */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </BootstrapCard.Body>
      </BootstrapCard>
    </div>
  );
}

export default Card;
