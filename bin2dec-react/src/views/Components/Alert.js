import Alert from 'react-bootstrap/Alert';

function CallAlertBox(props) {

  const key = "warning"; 
  const type = "warning";
  const notify = "This function is under development.";

  return (
    <>
        <Alert key={key} variant={type}>{notify}</Alert>
    </>
  );
}

export default CallAlertBox;