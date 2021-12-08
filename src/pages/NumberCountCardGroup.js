import React, {useContext} from "react";

import {CardGroup, Col} from "reactstrap";
import NumberCountCard from "../components/NumberCountCard";
import {NumbersCountContext} from "../contexts";

function NumberCountCardGroup() {
  const ctx = useContext(NumbersCountContext);

  return (
    <CardGroup>
      { ctx.numbersCount.list.map((numberCount, index) =>
        <Col md={2} sm={4} key={numberCount.number}>
          <NumberCountCard
            number={numberCount.number} count={numberCount.count}
            buttonTitle={<i className="bi bi-plus-lg"/>}
            onClick={() => ctx.incrementNumberCountAt(index)}
          />
        </Col>
      ) }
    </CardGroup>
  );
}

export default NumberCountCardGroup;
