import React from 'react';
import Navbar from '../components/Navbar';
import Ellipses from "../components/Ellipses";
import { useState,useEffect } from 'react'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Selectbox from "../components/Selectbox"
import styles from './product.module.css'
import Languages from '../components/Languages';

const Product = () => {
  const Datatosend={
    fromlang:"en",
    // text:"please enter some text",
    tolang:"es"
  }

  const [to,setto]=useState("nl");
  const [langfrom,setlangfrom]=useState("en");
  const [inp,setinp]=useState("");
  const [outp,setoutp]=useState("");
  const [chatoutp,setchatoutp]=useState("")
  let key = "248f6b52c8b742868475f775607af285";
  let endpoint = "https://api.cognitive.microsofttranslator.com/";
  
  const OPENAI_API_KEY = import.meta.env.VITE_API_KEY;
  const handleinpchange=(event)=>{
  setinp(event.target.value)
  console.log(inp)
}

const handleSelectChangefrom=(event)=>{
  setlangfrom(event.target.value)
}

const handleSelectChangeto=(event)=>{
  setto(event.target.value)
}
const getdata=(stringtochange)=>{
console.log(['fr']);
axios({
  baseURL: endpoint,
  url: '/translate',
  method: 'post',
  headers: {
      'Ocp-Apim-Subscription-Key': key,
       // location required if you're using a multi-service or regional (not global) resource.
       'Ocp-Apim-Subscription-Region':'centralindia',
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
  },
  params: {
      'api-version': '3.0',
      'from': `${langfrom}`,
      'to': `${to}`
  },
  data: [{
      'text': `${stringtochange}`
  }],
  responseType: 'json'
}).then((response)=>{
  
  console.log( "translator outp:" + response.data[0].translations[0].text);
  setoutp(response.data[0].translations[0].text);

   axios({
    method: 'post',
    url: 'https://api.openai.com/v1/chat/completions',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    data: {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `${inp} I translated this text from ${langfrom} to ${to} and this is the result ${outp} I got from another translation service. please modify it to make it sound more natural. if it's a poem or text which is more about the meaning try to keep the essence.don't give any extra text as this output is being displayed in the other text box.`
        }
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    }
  })
  .then(response => {
    console.log( "open ai outp:" + response.data.choices[0].message.content);
    setchatoutp(response.data.choices[0].message.content);
  })
  .catch(error => {
    console.log(error)
    console.log(outp)
    setchatoutp(outp)
    
  });
  
}).catch(function(error) {
  if (error.response) {
    setchatoutp(outp)
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    setchatoutp(outp)
    // The request was made but no response was received
    console.log(error.request);
  } else {
    setchatoutp(outp)
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
}); }
const getspeech = (stringToSpeak, language) => {
  console.log(stringToSpeak);
  console.log(language);

  setTimeout(() => {
    const voices = window.speechSynthesis.getVoices();
    console.log(voices.map(voice => voice.lang));

    // Find a voice that matches the desired language
    const voice = voices.find(voice => voice.lang.startsWith(language));

    if (voice) {
      // If a matching voice is found, use it
      const utterance = new SpeechSynthesisUtterance(stringToSpeak);
      utterance.voice = voice;
      utterance.volume = 1.0;  // Make the speech as loud as possible

      // If the SpeechSynthesis object is in a speaking state, cancel the current speech
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }

      // Speak the utterance
      window.speechSynthesis.speak(utterance);
    } else {
      // If no matching voice is found, log an error
      console.error(`No voice found for language: ${language}`);
    }
  }, 0);
};
 return(
  <div className={styles.container}>
    <Navbar>
    </Navbar>
    <Ellipses/>
  <div className={styles.flexcontainer}>
   
    <div className={styles.flexelement}>
      <div className={styles.flexcontainerlang}>
      <div className={styles.messagetofrom}>
        FROM: 
      </div>
      <Selectbox languages={Languages} handleSelectChange={handleSelectChangefrom}></Selectbox>
      </div>
    <textarea  value={inp} onChange={handleinpchange} className={styles.inputboxx} placeholder="Enter text here...">
    </textarea>
  </div>
  <div className={styles.flexelement}>
    <div className={styles.flexcontainerlang} >
      <div className={styles.messagetofrom}>
        TO: 
      </div>
      <Selectbox languages={Languages} handleSelectChange={handleSelectChangeto}></Selectbox>
      </div>
      <textarea  value={chatoutp || outp} className={styles.inputboxx}>
      </textarea>
      </div>
  </div>

    <div className={styles.submitplacement}>
      <button onClick={() => getdata(inp)} className={styles.submitbutton}>Submit</button>
      <button onClick={()=>getspeech(chatoutp,to)} className={styles.submitbutton}>Listen</button>
    </div>
</div>
 )
}

export default Product;