import React, { useState } from 'react';

const QnaContext = React.createContext();

export default function AppWithContext() {
  const [qna, setQna] = useState('What’s the easiest way to double your money?')
  return (
    <QnaContext.Provider value={[qna, setQna]}>
      <Qna />
    </QnaContext.Provider>
  )
}

const Qna = () => {
  return (
    <QnaContext.Consumer>
      {([qna, setQna]) => (
        <div>
          <h1>Context app: {qna}</h1>
          <button onClick={() => setQna("Put it in front of a mirror 💵")}>View Answer
          </button>
        </div>
      )}
    </QnaContext.Consumer>
  )
}
