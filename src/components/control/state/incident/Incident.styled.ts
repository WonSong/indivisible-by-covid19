import styled from 'styled-components';

export const Root = styled.a`
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    padding: 16px 12px;
    border-radius: 3px;
    font-size: 13px;
    margin-bottom: 12px;
    color: #555;
    cursor: pointer;
    text-decoration: none;
    background-color: #f2f2f2;

    &:hover {
        border: 2px solid #36a2eb;
        padding: 15px 11px;
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 10px;
    border-radius: 5px;
`;

export const Title = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;

    &:after {
        clear: both;
    }
`;

export const Info = styled.p`
    font-size: 12px;
    color: #999;
`;
