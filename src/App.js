// import './App.css';
// import Header from './MyComponents/Header';
// import Footer from './MyComponents/Footer';
// import Todos from './MyComponents/Todos';
// import AddTodo from './MyComponents/AddTodo';
// import About from './MyComponents/About';
// import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// function App() {
//   let initTodo = []
//   if (localStorage.getItem("todos") === null) {
//     initTodo = []
//   }
//   else {
//     initTodo = JSON.parse(localStorage.getItem("todos"));
//   }

//   const onDelete = (todo) => {
//     console.log("I am onDelete of ", todo);
//     setTodos(todos.filter((e) => {
//       console.log(e, todo)
//       return e !== todo;
//     }));
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }

//   const addTodo = (title, desc) => {
//     console.log("I am adding this to do", title, desc);
//     let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     }
//     setTodos([...todos, myTodo])
//     console.log(myTodo);
//   }

//   const [todos, setTodos] = useState(initTodo);
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);
//   return (
//     <>
//       <Router>
//         <Header title="My todos list" searchBar={false} />
//         <switch>
//           <Route exact path="/" render={() => {
//             return (
//               <>
//                 <AddTodo addTodo={addTodo} />
//                 <Todos todos={todos} onDelete={onDelete} />
//               </>
//             )
//           }}>
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//         </switch>
//         <Footer />
//       </Router>
//     </>
//   );
// }



// export default App;


import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
  Routes // Add this line
} from "react-router-dom";

function App() {
  let initTodo = []
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of ", todo);
    setTodos(todos.filter((e) => {
      console.log(e, todo)
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this to do", title, desc);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="My todos list" searchBar={false} />
        <Routes> {/* Replace <switch> with <Routes> */}
          <Route exact path="/" element={ // replace 'render' with 'element'
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }>
          </Route>
          <Route exact path="/about" element={ <About /> }> {/* replace </Route> with /> */}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;

