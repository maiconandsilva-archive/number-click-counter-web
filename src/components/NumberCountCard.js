import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  InputGroup,
  InputGroupText
} from "reactstrap";
import React from "react";

const NumberCountCard = (props) => {
  const URL = "https://ui-avatars.com/api/";
  const PARAMS = "background=0D8ABC&color=fff&bold=true&font-size=1&&size=512";

  return (
    <Card className="align-items-center">
      <CardImg alt="Number" src={`${URL}?${PARAMS}&name=${props.number}`}
               top width="100%"/>
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.subtitle}
        </CardSubtitle>
        <CardText>{props.text}</CardText>
        <InputGroup>
          <InputGroupText className="text-primary col-md">{props.count}</InputGroupText>
          <Button onClick={props.onClick} color="primary text-uppercase" outline>
            {props.buttonTitle || "click"}
          </Button>
        </InputGroup>
      </CardBody>
    </Card>
  );
};

export default NumberCountCard;
