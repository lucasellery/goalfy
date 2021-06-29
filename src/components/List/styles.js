import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;

  flex-grow: 0; // esticar mais que o necessário
  flex-shrink: 0; // determina a possibilidade de o elemento encolher
  flex-basis: 320px; // tamanho base de largura

  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    height: 100vh;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background-color: #3b5bfd;
      border: 0;
      cursor: pointer;
      align-items: center;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
