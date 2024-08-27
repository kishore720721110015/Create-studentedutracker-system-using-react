
// import React, { useReducer } from "react";
// import ReactDOM from "react-dom";
// import './todolist.css';
// const initialState = { ans: "Choose the answer" };

// function Welcome(state, action) {
//     switch (action.category) {
//         case 'Correct':
//             return { ans: "Correct answer" };
//         case 'Wrong':
//             return { ans: "Incorrect Answer" };
//         default:
//             throw new Error('Invalid action type');
//     }
// }

// function Hello() {
//     const [state, dispatch] = useReducer(Welcome, initialState);

//     return (
        
//         <div className="head">
           
//             <h2>1.What is HTML?</h2>
//             <label>
//                 <input type="radio" name="click" onChange={() => dispatch({ category: 'Correct' })} />
//                  Hypertext Markup Language
//             </label>
//             <label>
//                 <input type="radio" name="click" onChange={() => dispatch({ category: 'Wrong' })} />
//                  Hypertext Markup Loan
//             </label>
//             <label>
//                 <input type="radio" name="click" onChange={() => dispatch({ category: 'Wrong' })} />
//                     Hypertext Mark Languege
//             </label>
//             <label>
//                 <input type="radio" name="click" onChange={() => dispatch({ category: 'Wrong' })} />
//                     Hyper Markup Languege
//             </label>
//             <div>
//                 <h5>{state.ans}</h5>
//             </div>
//         </div>
//     );
// }

// export default Hello;



