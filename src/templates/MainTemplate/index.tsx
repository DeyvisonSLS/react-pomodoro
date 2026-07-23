import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
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

      {children}

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

export default MainTemplate;
