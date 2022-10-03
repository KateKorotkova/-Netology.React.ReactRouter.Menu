import './App.css';
import { nanoid } from 'nanoid'
import {Menu} from "./components/menu";
import {HomePage} from "./components/pages/homePage";
import {DriftPage} from "./components/pages/driftPage";
import {TimeAttackPage} from "./components/pages/timeAttackPage";
import {ForzaPage} from "./components/pages/forzaPage";
import { Routes, Route } from 'react-router-dom';


function App() {

  const routers = [
    {
      id: nanoid(),
      name: "Главная",
      path: "/",
      element: <HomePage/>
    },
    {
      id: nanoid(),
      name: "Дрифт-такси",
      path: "/drift",
      element: <DriftPage/>
    },
    {
      id: nanoid(),
      name: "Time Attack",
      path: "/timeattack",
      element: <TimeAttackPage/>
    },
    {
      id: nanoid(),
      name: "Forza Karting",
      path: "/forza",
      element: <ForzaPage/>
    }
  ];

  return (
    <>
      <Menu routes={routers}/>
      <Routes>
        {
          routers.map((x) => {
            return <Route path={x.path} element={x.element} />;
          })
        }
      </Routes>
    </>
  );
}

export default App;
