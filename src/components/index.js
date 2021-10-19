import styled from 'styled-components';

export const colors = {
    purple: {
        xlight: '#eee6ff',
        light: '#d6c1ff',
        normal: '#a477ff',
        dark: '#8c52ff'
    },
    gray: {
        light: '#ececec'
    }
}

export const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.purple.xlight};
`;

export const H1 = styled.h1`
`;

export const H2 = styled.h2`
    margin: 10px 0;
    color: ${colors.purple.dark};
`;

export const P = styled.p`
    padding: 0 10px;
    color: ${colors.purple.normal};
`;

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    border-radius: 25px;
    background-color: #ffffff;
    padding: 10px;
`;

export const Button = styled.button`
    color: ${({ active }) => active ? '#ffffff' : colors.purple.normal};
    background-color: ${({ active }) => active ? colors.purple.normal : '#ffffff'};
    border: ${({ active }) => active ? `1px solid transparent` : `1px solid ${colors.purple.normal}`};
    min-width: 100px;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 25px;
    margin: 10px;
    &:hover {
        box-shadow: 0 5px 12px 0 rgb(9, 17, 167);
    }
    &:active {
        background-color: ${({ active }) => active ? '#ffffff' : colors.purple.normal};
        color: ${({ active }) => active ? colors.purple.normal : '#ffffff'};
        border: ${({ active }) => active ? `1px solid ${colors.purple.normal}` : '1px solid transparent'} ;
    }
`;

export const SquareButton = styled.button`
    background-color: ${({active}) => active ? colors.purple.normal : '#ffffff' };
    border-radius: 0;
    padding: 5px 70px;
    min-width: 100px;
    max-width: 150px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    font-size: 12px;
    white-space: nowrap;

    &:hover {
        box-shadow: ${({active}) => active ? '0 5px 12px 0 rgb(164, 119, 255)' : '0 5px 12px 0 rgb(19, 50, 99) '};
    }
    &:active {
        background-color: ${({ active }) => active ? '#ffffff' : colors.purple.normal};
        color: ${({ active }) => active ? colors.purple.normal : '#ffffff'};
        border: ${({ active }) => active ? `1px solid ${colors.purple.normal}` : '1px solid transparent'} ;
    }
`

export const FloatingButton = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    @media (min-width: 720px) {
        position: static;
    }

`;