import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { TaskForm } from './components/TaskForm';
import './styles/global.css';
import './styles/theme.css';
import { Cronometer } from './components/Cronometer';

function App() {
  return (
    <>
      <Container direction='horizontal'>
        {/* Header */}
        <Container>
          <Header>
            <Logo
              width={64}
              height={64}
            />
            <h1>React Pomodoro</h1>
          </Header>
        </Container>
        {/* Menu */}
        <Container>
          <Menu />
        </Container>
      </Container>

      {/* Cronometer */}
      <Container>
        <Cronometer>00:00:00</Cronometer>
      </Container>

      {/* Task form */}
      <Container>
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
    </>
  );
}

export default App;
