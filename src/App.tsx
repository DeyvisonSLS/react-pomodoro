import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';

import './styles/global.css';
import './styles/theme.css';
import AboutPomodoro from './pages/AboutPomodoro';

function App() {
  return (
    <MainTemplate>
      <Home />
      {/* <AboutPomodoro /> */}
    </MainTemplate>
  );
}

export default App;
