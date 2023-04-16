import styled from 'styled-components'

export const Actions = styled.div`
  display: flex;

  .buttons-count {
    width: 4.5rem;
    padding: 0 0.5rem;

    background-color: ${(props) => props.theme['base-button']};

    border-radius: 6px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme.purple};

      margin-top: 0.125rem;

      transform: scale(1);

      cursor: pointer;

      transition: color 400ms, transform 400ms;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};

        transform: scale(1.3);
      }

      &:focus {
        box-shadow: none;
      }
    }
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
    font-size: 1rem !important;
  }

  .cart {
    border: none;

    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    padding: 0.5rem;

    margin-left: 0.5rem;

    cursor: pointer;

    transition: background-color 400ms;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }

    &:focus {
      box-shadow: none;
    }
  }

  .notVisibled {
    display: none;
  }
`
