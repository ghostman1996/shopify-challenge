import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 const [facts, setFacts] = useState({});
 const onSubmit = (e) => {
  e.preventdefault();
 };
//fetch the facts from https://catfact.ninja/fact
 return (
  <>
   <h1>Fun with AI</h1>
   <InputGroup>
    <InputGroup.Text>With textarea</InputGroup.Text>
    <FormControl as='textarea' aria-label='With textarea' />
   </InputGroup>
   <Button onSubmit={onSubmit}>Submit</Button>
   <h2>Responses</h2>
   <div className='responses'>
    <h5>Prompt:</h5>
    <h5>Response: </h5>
    {facts.map((fact) => {
     return <pre>{JSON.stringify(fact)}</pre>;
    })}
   </div>
  </>
 );
}

export default App;
