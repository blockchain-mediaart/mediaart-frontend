import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const ToggleButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
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