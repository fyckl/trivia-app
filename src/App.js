import React, { useContext } from "react";
import Start from "./Components/Start";
import Questions from "./Components/Questions";
import Error from "./Components/Error"; 
import Loading from "./Components/Loading";
import { useAppContext } from "./Components/Context"

function App() {
  const { 
    startQuiz, 
    isStartQuiz, 
    arrQuestions , 
    isAPIError
  } = useAppContext()
  const renderQuestionsOrLoading = arrQuestions.length === 5 ? <Questions /> : <Loading />
  const renderQuiz = isStartQuiz ? renderQuestionsOrLoading : <Start start={startQuiz}/>
  
  return (
    <div className="main-container">
      {isAPIError ? <Error /> : renderQuiz}
    </div>
  );

}

export default App;
