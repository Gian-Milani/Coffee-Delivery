import styled from 'styled-components'

export const Menu = styled.div`
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 3.375rem;
  }

  .coffee-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 2.5rem;
  }
`

export const Card = styled.div`
  width: 16rem;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px 6px 36px;

  padding: 0 1.25rem;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
  .types {
    display: flex;

    label {
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};

      font-size: 0.625rem;
      font-weight: 800;

      border-radius: 50px;
      padding: 0.2rem 0.5rem;
      margin: 0 0.25rem;
    }
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-subtitle']};

    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;

    margin-top: 0.5rem;
  }

  .coffee-buy {
    margin-top: 2.0625rem;
    margin-bottom: 1.25rem;

    display: flex;

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.75rem;

      strong {
        font-family: 'Baloo 2', cursive;
        font-size: 1.375rem;
        font-weight: 800;
      }
    }

    .coffee-actions {
      width: 7.375rem;

      margin-left: 1.5625rem;

      display: flex;
    }
  }
`
