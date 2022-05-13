import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import ResponseCards from "./components/ResponseCards";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
 const [facts, setFacts] = useState({});
 const onSubmit = (e) => {
  e.preventdefault();
 };
 //fetch the facts from https://catfact.ninja/fact
 useEffect(() => {
  axios
   .get("https://catfact.ninja/fact")
   .then((resp) => {
    setFacts(resp.data);
   })
   .catch((err) => {
    console.log(err);
   });
 }, []);
 return (
  <>
   <h1>Fun with AI</h1>
   <Form />

   <div className='responses'>
    <ResponseCards />
   </div>
  </>
 );
}

export default App;
