import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import ManagerDashboard from './components/ManagerDashboard';
import ManagerRegistrationForm from './components/ManagerRegistrationForm.js';
import AddProjectPopup from './components/AddProjectPopup.js';
import ViewEmployees from './components/ViewEmployees';
import RegisterEmployeePopup from './components/RegisterEmployeePopup';
import ManageProjects from './components/ManageProjects';
import AddTaskPopup from './components/AddTaskPopup';
import EditTaskPopup from './components/EditTaskPopup';
import EmployeeDashboard from './components/EmployeeDashboard';
import ViewTasks from './components/ViewTasks';
import ErrorPage from './components/ErrorPage';
import EmployeeViewTasks from './components/EmployeeViewTasks';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/HomePage" element={<HomePage/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/ManagerRegistration" element={<ManagerRegistrationForm/>}></Route>
          <Route path="/ErrorPage" element={<ErrorPage/>}></Route>
          <Route path="/ManagerDashboard" element={<ManagerDashboard/>}></Route>
          <Route path="/AddProjectPopup" element={<AddProjectPopup/>}></Route>
          <Route path="/ViewEmployees" element={<ViewEmployees/>}></Route>
          <Route path="/RegisterEmployeePopup" element={<RegisterEmployeePopup/>}></Route>
          <Route path="/ManageProjects/:projectId" element={<ManageProjects/>}></Route>
          <Route path="/AddTaskPopup/:projectId" element={<AddTaskPopup/>}></Route>
          <Route path="/EditTaskPopup" element={<EditTaskPopup/>}></Route>
          <Route path="/EmployeeDashboard" element={<EmployeeDashboard/>}></Route>
          <Route path="/ViewTasks/:projectId" element={<ViewTasks/>}></Route>
          <Route path="/EmployeeViewTasks" element={<EmployeeViewTasks/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
