import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 300px;
  display: flex;
  /* border: 1px solid gray; */
  justify-content: center;

  button {
    justify-content: center;
    width: 60px;
    margin: 0 auto;
    margin-bottom: 30px;

    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    border: 0;
    border-radius: 5px;
  }
  button:hover {
    box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 2px 5px 0px rgba(32, 161, 49, 0.75);
    background-color: rgba(32, 161, 49, 0.5);
    border: 0;
    color: rgb(0, 0, 100);
  }
`;

export default ButtonWrapper;
