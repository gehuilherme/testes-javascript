import {Container, Row, Tab, Tabs} from 'react-bootstrap/';
import Bin2Dec from './Bin2Dec';

function App() {
  return (
    <Container>
      <Row>
        <center>
          <p></p>
        </center>
      </Row>
      
      <Tabs
      defaultActiveKey="bin2dec"
      id="uncontrolled-tab-example"
      className="mb-3"
      >
        <Tab eventKey="bin2dec" title="Bin2Dec">
          <Container>
            <Bin2Dec />
          </Container>
        </Tab>

        <Tab eventKey="dec2bin" title="Dec2Bin">
          <Container>
            <center><h1>Em breve!</h1></center>
          </Container>
        </Tab>
        
      </Tabs>
      
    </Container>
  );
}

export default App;
