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
