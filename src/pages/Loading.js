import React from "react";
import {Container, Progress, Spinner} from "reactstrap";

function Loading() {
  return (
    <Container className="loading d-flex justify-content-center align-items-center h-100">
      <div className="container w-50 text-center">
        <h1 className="text-primary">
          <Spinner color="primary" type="grow" className="me-1"/>
          Loading
          <Spinner color="primary" type="grow" className="ms-1"/>
        </h1>
        <Progress striped animated value={70}/>
      </div>
    </Container>
  );
}

export default Loading;
