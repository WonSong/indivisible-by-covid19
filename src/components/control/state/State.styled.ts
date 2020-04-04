import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Back = styled(Link)`
    display: block;
    color: #36a2eb;
    font-size: 14px;
    margin-bottom: 24px;
    font-weight: 600;
    text-decoration: none;
`;

export const Incidents = styled.div`
    overflow: auto;
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 28px;
    padding-right: 28px;
    padding-top: 10px;
    padding-bottom: 10px;

    @media (min-width: 1200px) {
        height: calc(100% - 370px);
    }
`;
