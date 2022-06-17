import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(0, 107, 149);
  
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  

  @media screen and (max-width: 540px) {
    background-color: black;
    position: absolute;
    top: 325px;
    left: ${({ open }) => (open ? "0" : "-110%")};
    width: 100%;
    height: 72%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.8s all ease;
    z-index: 100;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 540px) {
    width: 100%;
    height: 100px;
    margin-left: -100px;
  }
`;

export const MenuItemLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  padding: 0.5rem 2.5rem;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

 /*  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #23394d;
      }
    }
  } */

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 540px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }


  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;
export const DivIcon = styled.div`
    color: white;
    font-family: sans-serif;
    font-size: 1.8rem;
    
`


export const MobileIcon = styled.div`
  display: none;


  @media screen and (max-width: 540px) {
    display: flex;
    align-items: center;
    cursor: pointer;
   

    svg {
      fill: white;
      margin-right: 0.5rem;
    }
  }
`;