import {Container, Row, Tab, Tabs,Form, Button} from 'react-bootstrap/';
//import Bin2Dec from './Bin2Dec';

function Bin2Dec() {
  return (
    <Container>
      <Row>
        <center>
          <p></p>
        </center>
      </Row>
      <Form>
        <Form.Group className='mb-3' controlId='formBin2Dec'>
          <Form.Label>Write a binary number:</Form.Label>
          <Form.Control size="lg" type='text' id='inputBinaryNuber'/>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button size="lg" variant='dark'>Convert</Button>
        </div>
      </Form>
      
    </Container>
  );
}

export default Bin2Dec;
