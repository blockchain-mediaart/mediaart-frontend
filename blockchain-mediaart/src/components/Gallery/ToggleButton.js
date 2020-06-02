import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const ToggleButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button className="btn btn-success" onClick={toggle} style={{ marginBottom: '1rem' }}>Info</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.text}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default ToggleButton;