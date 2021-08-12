import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #111;
    color: #fff;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    select {
    background-color: transparent !important;
    color: gray;
    padding: 0.5rem;
    border-radius: 4px;
    outline: none;
    font-size: 1rem;


    option{
        font-size: 1rem;
        padding: 10px;
        outline: none;
        background-color: black;
        border:none;
    }
}
`