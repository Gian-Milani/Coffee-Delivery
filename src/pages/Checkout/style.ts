import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 4.5rem;

  display: flex;
  /* justify-content: space-between; */

  h4 {
    font-size: 1.125;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .containerCompleteOrder {
    width: 53%;
  }

  .containerSelectedCoffees {
    width: 47%;
  }
`
export const CompleteOrder = styled.div`
  .formContainer {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    margin: 0 2rem 0.75rem 0;
    padding: 2.5rem;

    max-width: 40rem;

    .addressTitle {
      display: flex;

      .titleText {
        margin-left: 0.5rem;

        span {
          color: ${(props) => props.theme['base-subtitle']};
        }

        p {
          color: ${(props) => props.theme['base-text']};
          font-size: 0.875rem;
        }
      }
    }

    form {
      margin-top: 2rem;
      max-width: 35rem;
      padding: 0.1rem;

      .row {
        display: flex;
      }

      .cep {
        display: block;
        width: 35.7%;
      }
      .street {
        width: 100%;
      }
      .number,
      .neighborhood {
        width: 35.7%;
        margin-right: 0.75rem;
      }
      .complement {
        width: 62.14%;
      }
      .city {
        width: 49.5%;
        margin-right: 0.75em;
      }
      .state {
        width: 10.71%;
      }

      input {
        width: 100%;

        margin-bottom: 1rem;
        padding: 0.75rem;
        font-size: 0.875rem;

        border: none;

        color: ${(props) => props.theme['base-title']};
        background-color: ${(props) => props.theme['base-input']};

        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 4px;
      }

      p {
        font-size: 0.75rem;
        color: ${(props) => props.theme['yellow-dark']};
        margin: -0.8rem 0 0.8rem;
      }
    }
  }

  .payment {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    margin: 0 2rem 0.75rem 0;
    padding: 2.5rem;

    max-width: 40rem;

    .paymentTitle {
      display: flex;
      margin-bottom: 2rem;

      .paymentText {
        margin-left: 0.5rem;

        span {
          color: ${(props) => props.theme['base-subtitle']};
        }

        p {
          color: ${(props) => props.theme['base-text']};
          font-size: 0.875rem;
        }
      }
    }

    .paymentTypes {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .typeSelected {
    box-shadow: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.purple};
    background-color: ${(propos) => propos.theme['purple-light']};
    cursor: pointer;
  }
`
export const PaymentType = styled.div`
  width: 11.166rem;

  border: none;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;

  padding: 1rem;

  display: flex;
  align-items: center;

  span {
    margin-left: 0.75rem;
  }

  outline: 0;
  box-shadow: none;

  transition: background-color 400ms;

  &:not(:focus):hover {
    box-shadow: none;
    border-radius: 6px;
    background-color: ${(propos) => propos.theme['base-hover']};
    color: ${(props) => props.theme['base-title']};
    cursor: pointer;
  }
`
export const SelectedCoffees = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  padding: 1.5rem 2.5rem;
  border-radius: 6px 44px 6px 44px;

  .coffeeCard {
    display: flex;

    padding: 1.5rem 0;

    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    img {
      width: 4rem;

      margin-right: 1.25rem;
    }

    .actions {
      color: ${(props) => props.theme['base-subtitle']};

      .buttons {
        display: flex;

        margin-top: 0.5rem;

        .remove {
          margin-left: 0.5rem;
          padding: 0.5rem;

          font-size: 0.75rem;

          border: none;
          border-radius: 6px;

          background-color: ${(props) => props.theme['base-button']};
          color: ${(props) => props.theme['base-text']};

          display: flex;
          align-items: center;

          cursor: pointer;

          span {
            margin-left: 0.25rem;
          }

          transition: background-color 400ms, color 400ms;

          &:hover {
            background-color: ${(props) => props.theme['base-hover']};
            color: ${(props) => props.theme['base-title']};
          }
        }
      }
    }

    strong {
      margin-left: auto;
    }
  }

  .totalizer {
    margin-top: 1.5rem;

    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;

      small {
        font-size: 0.875rem;
      }

      strong {
        font-size: 1.25rem;
      }
    }

    button {
      margin-top: 1.5rem;
      width: 100%;

      padding: 0.75rem 0;

      border: none;
      border-radius: 6px;

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.yellow};

      font-size: 0.875rem;

      transition: 200ms;

      &:not(:disabled):hover {
        cursor: pointer;
        background-color: ${(props) => props.theme['yellow-dark']};
      }

      &:disabled {
        opacity: 0.9;
        cursor: not-allowed;
      }

      &:focus {
        animation-name: confirmedOrder;
        animation-duration: 0.8s;
        box-shadow: none;
      }

      @keyframes confirmedOrder {
        0% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 0%,
            rgba(196, 127, 23, 1) 0%
          );
        }

        5% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 3%,
            rgba(196, 127, 23, 1) 5%
          );
        }

        10% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 8%,
            rgba(196, 127, 23, 1) 10%
          );
        }

        15% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 13%,
            rgba(196, 127, 23, 1) 15%
          );
        }

        20% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 18%,
            rgba(196, 127, 23, 1) 20%
          );
        }

        25% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 23%,
            rgba(196, 127, 23, 1) 25%
          );
        }

        30% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 28%,
            rgba(196, 127, 23, 1) 30%
          );
        }

        35% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 33%,
            rgba(196, 127, 23, 1) 35%
          );
        }

        40% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 38%,
            rgba(196, 127, 23, 1) 40%
          );
        }

        45% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 43%,
            rgba(196, 127, 23, 1) 45%
          );
        }

        50% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 48%,
            rgba(196, 127, 23, 1) 50%
          );
        }

        55% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 53%,
            rgba(196, 127, 23, 1) 55%
          );
        }
        60% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 58%,
            rgba(196, 127, 23, 1) 60%
          );
        }
        65% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 63%,
            rgba(196, 127, 23, 1) 65%
          );
        }

        70% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 68%,
            rgba(196, 127, 23, 1) 70%
          );
        }

        75% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 73%,
            rgba(196, 127, 23, 1) 75%
          );
        }

        80% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 78%,
            rgba(196, 127, 23, 1) 80%
          );
        }

        85% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 83%,
            rgba(196, 127, 23, 1) 85%
          );
        }

        90% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 88%,
            rgba(196, 127, 23, 1) 90%
          );
        }

        95% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 93%,
            rgba(196, 127, 23, 1) 95%
          );
        }

        100% {
          background: rgb(219, 172, 44);
          background: linear-gradient(
            90deg,
            rgba(219, 172, 44, 1) 100%,
            rgba(196, 127, 23, 1) 100%
          );
        }
      }
    }
  }
`
