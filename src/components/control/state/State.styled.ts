import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Color } from '../../../resources/constants';

export const Back = styled(Link)`
    display: block;
    color: #36a2eb;
    font-size: 14px;
    margin-bottom: 24px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.1s linear;

    &:hover {
        color: ${Color.LinkColorEvenDarker};
    }
`;

export const Incidents = styled.div`
    padding-left: 12px;
    padding-right: 12px;
`;

export const LoadMoreButton = styled.button`
    width: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 16px;
    cursor: pointer;
    color: ${Color.LinkColor};
    font-size: 14px;
    font-weight: 600;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 18px;
    transition: color 0.1s linear, box-shadow 0.1s linear;

    &:hover {
        color: ${Color.LinkColorEvenDarker};
        box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08), 0 1px 3px 1px rgba(60, 64, 67, 0.16);
    }
`;
