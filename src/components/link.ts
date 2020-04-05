import styled, { css } from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import { Color } from '../resources/constants';

const linkStyles = css`
    font-weight: 600;
    color: ${Color.LinkColor};
    text-decoration: none;
    transition: color 0.1s linear;
    cursor: pointer;

    &:hover {
        color: ${Color.LinkColorEvenDarker};
    }
`;

export const Link = styled(ReactLink)`
    ${linkStyles};
`;

export const ExternalLink = styled.a`
    ${linkStyles};
`;
