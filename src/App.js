import React, { useRef } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() { 

  // hook to reset the transcript
  const { transcript, resetTranscript } = useSpeechRecognition();

  // hook to start the listening
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true , language: 'en-IN'});


    // copy to clipboard 
  const divRef = useRef();

  const CopyToClipboard = () => {
    const textToCopy = divRef.current.innerText;

    navigator.clipboard.writeText(textToCopy);
  };

  // check browserSupportsSpeechRecognition
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="main-container">
      <div className="container">
        <h2>Speech to Text Convertor</h2>
        <br />
        <p>
          Transform Spoken Words into Text Effortlessly and Simplify Your
          Workflow. Your Voice, Our Typing!
        </p>
      </div>

      <div className="main-content">
        <i
          className="fa-sharp fa-solid fa-arrow-rotate-right"
          onClick={resetTranscript}
        ></i>
        <div className="content" ref={divRef}>
          {transcript}
        </div>
      </div>

      <div className="btn-style">
        <button onClick={CopyToClipboard}>Copy to Clipboard</button>
        <button onClick={startListening}>Start Listening</button>
        <button className="stop-btn" onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </button>
      </div>
    </div>
  );
}

export default App;
