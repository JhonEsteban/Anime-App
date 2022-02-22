import { LoadingContainer, LoadingText } from './styles';

const Loading = ({ name = '' }) => {
  return (
    <LoadingContainer>
      <LoadingText>Cargando {name}...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
