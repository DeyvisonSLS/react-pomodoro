import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { TaskForm } from './components/TaskForm';
import './styles/global.css';
import './styles/theme.css';
import { Cronometer } from './components/Cronometer';
import { Cycles } from './components/Cycles';

function App() {
  return (
    <div className='appContainer'>
      <Container direction='horizontal' className='headerContainer'>
        <Header>
          <div className='logoContainer'>
            <Logo
              width={64}
              height={64}
            />
          </div>
          <h2>React Pomodoro</h2>
        </Header>

        <Menu />
      </Container>

      {/* Cronometer */}
      <Container>
        <Cronometer>00:00:00</Cronometer>
      </Container>

      {/* Cycles + Taskform component */}
      <Container>
        <Cycles />
        <TaskForm />
      </Container>

      {/* Footer */}
      <Container>
        <Footer />
      </Container>

      <svg style={{ display: 'none' }}>
        <filter id='scribble-texture'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.03'
            numOctaves='1'
            result='noise'
          />
          <feDisplacementMap
            in='SourceGraphic'
            in2='noise'
            scale='4'
            xChannelSelector='R'
            yChannelSelector='G'
          />
        </filter>
      </svg>
    </div>
  );
}

export default App;
