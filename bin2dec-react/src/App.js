import {Container, Form, Button, Row} from 'react-bootstrap/';

function App() {
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

export default App;
