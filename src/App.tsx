import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';

import './styles/global.css';
import './styles/theme.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
// import AboutPomodoro from './pages/AboutPomodoro';

function App() {
  return (
    <TaskContextProvider>
      <MainTemplate>
        <Home />
        {/* <AboutPomodoro /> */}
      </MainTemplate>
    </TaskContextProvider>
  );
}

export default App;
