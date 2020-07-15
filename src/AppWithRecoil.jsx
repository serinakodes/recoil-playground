import React from 'react';
import { atom, RecoilRoot, useRecoilState } from 'recoil';

export const Qna = atom({
  key: 'QNA',
  default: 'When is the next public holiday in Victoria?'
})

function AppWithRecoil() {

  const [qnaState, setQnaState] = useRecoilState(Qna)
  return (
    <div>
      <h1>Recoil app: {qnaState}</h1>
      <button onClick={() => setQnaState('Friday before the AFL Grand Final 🤔')}>View Answer</button>
    </div>
  );
}

export default function AppWithRecoilRoot() {
  return (
    <RecoilRoot>
      <AppWithRecoil />
    </RecoilRoot>
  )
}
