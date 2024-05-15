import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addHobby, setActiveHobby } from "./actions/hobbyActions";

const randomNumber = (_) => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function App() {
  const hobbiesList = useSelector((state) => state.hobby.hobbiesList);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleAddHobby = () => {
    const newHooby = {
      id: randomNumber(),
      title: "Hobby" + randomNumber(),
    };
    const action = addHobby(newHooby);
    dispatch(action);
  };

  const handlerHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby.id);
    dispatch(action);
  };

  return (
    <div className="App">
      <button onClick={handleAddHobby}>Add new hobby</button>
      <p>Hobby List: </p>
      <ul>
        {hobbiesList.map((e) => {
          return (
            <li
              onClick={() => handlerHobbyClick(e)}
              key={e.id}
              className={e.id === activeId ? "active" : ""}
            >
              {e.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
