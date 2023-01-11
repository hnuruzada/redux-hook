import { useSelector,useDispatch } from 'react-redux/es/exports';
import {setInputValueAction,incrementByUserAction,incrementAction,decrementAction} from "./redux/action/counter.action.js"

import './App.css';

function App() {
  const count=useSelector(state=>state.counterReducer.count)
  const inputValue=useSelector(state=>state.counterReducer.inputValue)

  const dispatch=useDispatch()
  return (
    <div>
     <h1>{count}</h1>
     <input type="number" value={inputValue} 
     onChange={(e)=>dispatch(setInputValueAction(e.target.value))}
     />
     <button onClick={()=>dispatch(incrementByUserAction(inputValue))}>Add</button>
    <button onClick={()=>dispatch(incrementAction())}>increment</button>
    <button onClick={()=>dispatch(decrementAction())}>decrement</button>
    </div>
  );
}

export default App;
