import styled, { keyframes } from "styled-components";

const appearWithScale = keyframes`
  0% {
    transform: scale(0.5);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const appearWithFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const appearFromBottomWithOpacity = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 14.5rem;
  border-radius: 50%;
  margin-bottom: 1.6rem;

  animation: ${appearWithScale} 0.5s ease backwards;
`;

export const Name = styled.h3`
  font-size: 2.6rem;
  line-height: 4rem;
  color: #fff;
  animation: ${appearWithFade} 1s ease backwards;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: rgb(117, 116, 116);
  animation: ${appearWithFade} 1s ease backwards;
`;

export const ButtonsContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4rem;

  @media (max-width: 540px) {
    margin-top: 3.2rem;
    grid-template-columns: 1fr;
    grid-gap: 2.4rem;
  }
`;

export const Button = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  border-radius: 5px;
  height: auto;
  width: 100%;
  color: #fff;
  cursor: pointer;

  &.instagram {
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  }

  &.github {
    background: linear-gradient(58deg, #722cd8 8%, #9a56fd 98%);
  }

  &.linkedin {
    background: linear-gradient(45deg, #005aa7 0%, #1a84ca 25%);
  }

  &.email {
    background: linear-gradient(58deg, rgb(32, 31, 33) 8%, rgb(50, 48, 53) 98%);
  }

  svg {
    font-size: 3.2rem;
    max-width: 3.2rem;
    max-height: 3.2rem;
    margin: 0.4rem 0;
    color: #fff;

    path {
      fill: #fff;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 500;
  }

  &:hover,
  &:active {
    opacity: 0.7;
  }

  @media (max-width: 540px) {
    animation: ${appearFromBottomWithOpacity} 1s ease backwards;
  }
`;
