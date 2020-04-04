import styled from 'styled-components';

export const Root = styled.button`
    display: block;
    width: calc(100% - 32px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    padding: 8px 12px;
    border-radius: 3px;
    font-size: 13px;
    margin-bottom: 6px;
    color: #555;
    cursor: pointer;
    text-decoration: none;
    background-color: #f2f2f2;
    margin-left: 16px;

    &:hover {
        border: 2px solid #36a2eb;
        padding: 7px 11px;
    }

    &:after {
        clear: both;
    }
`;

export const Text = styled.div`
    float: left;
    font-weight: 600;
`;

export const Count = styled.div`
    float: right;
    color: #666;
    margin-left: 12px;
`;
