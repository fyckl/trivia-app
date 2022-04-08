import React, { useState, useEffect, useContext } from "react";
import Start from "./Components/Start";
import Questions from "./Components/Questions";
import Answers from "./Components/Answer";
import { Context } from "./Components/Context"
function App() {
  const {quizStart, startQuiz} = useContext(Context)

  return (
    <div className="main-container">
      {startQuiz ? <Questions /> : <Start start={quizStart}/>}
    </div>
  );

}

export default App;
