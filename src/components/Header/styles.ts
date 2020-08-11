import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 10px 15px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: hsla(0,0%,100%,.125);
    outline: 0;
    border-radius: 5px;
    padding: 10px 12px;
    width: 100%;

    &:focus {
      width: 318px;
    }

    transition: width 0.3s ease-out, color 0.3s ease-out;
  }
`;