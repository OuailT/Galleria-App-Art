import styled from 'styled-components';
import NavBar from './Components/Navbar/Navbar';


//styled Components

const AppContainer = styled.div`
    max-width: 1440px;
    width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <NavBar/>
    </AppContainer>
  );
}

export default App;
