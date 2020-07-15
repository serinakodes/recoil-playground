import React from 'react'
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'

const answerReducer = (state, action) => {
  switch (action.type) {
  case 'SHOW_ANSWER':
    return action.payload
  default:
    return state
  }
}

const store = createStore(answerReducer, 'What goes up, but never comes down?')

const mapStateToProps = (state) => {
  return {
    question: state
  }

}
const mapDispatchToProps = (dispatch) => ({
  showAnswer: (value) => dispatch({ type: "SHOW_ANSWER", payload: value })
})

function AppWithRedux(props) {
  return (
    <div>
      <h1>Redux app: {props.question}</h1>
      <button onClick={() => props.showAnswer('Your age 😨')}>View Answer</button>
    </div>
  )
}

const ConnectAppWithRedux = connect(mapStateToProps, mapDispatchToProps)(AppWithRedux)

export default function () {
  return (
    <Provider store={store}>
      <ConnectAppWithRedux />
    </Provider>
  )
}
