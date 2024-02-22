import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import ToDoList from './components/ToDoList';
import Container from './components/Container';
import PersonalRoutine from './components/PersonalRoutine';
import SpecialEvents from './components/SpecialEvents';
import GoalList from './components/GoalList';
import RoutineList from './components/RoutineList';
import EventList from './components/EventList';
import { BrowserRouter as Main, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import CreateTeam from './components/CreateTeam';
import TeamList from './components/TeamList';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
    <Main>
    <Navbar/>
    {/* <Leftbar/>
    <Rightbar/> */}
    <Routes>
      <Route exact path='/' element = {<Container/>}/>
      <Route exact path='/about' element = {<About/>}/>
      <Route exact path='/contact' element = {<Contact/>}/>
      <Route exact path='/toDoList' element = {<ToDoList/>}/>
      <Route exact path='/personalRoutine' element = {<PersonalRoutine/>}/>
      <Route exact path='/specialEvents' element = {<SpecialEvents/>}/>
      <Route exact path='/goalList' element = {<GoalList/>}/>
      <Route exact path='/routineList' element = {<RoutineList/>}/>
      <Route exact path='/eventList' element = {<EventList/>}/>
      <Route exact path='/createTeam' element = {<CreateTeam/>}/>
      <Route exact path='/teamList' element = {<TeamList/>}/>
      <Route exact path='/taskList' element = {<TaskList/>}/>
    </Routes>
    </Main>
    </>
  );
}

export default App;
