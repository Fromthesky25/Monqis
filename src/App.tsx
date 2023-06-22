import Container from '@mui/material/Container';

import { Header } from './modules/Header';
import { Content } from './modules/Content';
import { Footer } from './modules/Footer';

const App = () => {
  return (
    <Container
      disableGutters={true}
      maxWidth='lg'>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
