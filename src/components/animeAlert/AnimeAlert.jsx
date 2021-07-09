import { FiAlertCircle } from 'react-icons/fi';
import { Container, Message } from './styles';

const AnimeAlert = () => (
  <Container>
    <FiAlertCircle size='2rem' />
    <Message>Busca tu anime favorito!</Message>
  </Container>
);

export default AnimeAlert;
