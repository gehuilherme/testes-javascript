import {Container, Form, Button} from 'react-bootstrap';
import AlertBox from '../Components/Alert';

function Dec2Bin() {
  return (
    <Container>
      <AlertBox />
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label><b>Write a decimal number:</b></Form.Label>
          <Form.Control size="lg" type='text' id='inputDecimalNumber' disabled/>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button size="lg" variant='dark' disabled>Convert</Button>
        </div>
      </Form>
      
    </Container>
  );
}

export default Dec2Bin;
