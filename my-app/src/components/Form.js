import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
function Form() {
 return (
  <div>
   <InputGroup>
    <InputGroup.Text>With textarea</InputGroup.Text>
    <FormControl as='textarea' aria-label='With textarea' />
   </InputGroup>
   <Button className='btn'>Submit</Button>
  </div>
 );
}

export default Form;
