import { Link } from 'react-router-dom';
import { Color } from '../../resources/constants';
import { ExternalLink } from '../link';

export const Root = styled.div`
    background-color: white;
    width: calc(100% - 32px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    padding: 16px;
    margin-left: 16px;
    margin-right: 16px;
    z-index: 10000;
    position: absolute;
    top: 50vh;
    margin-bottom: 36px;

    @media (min-width: 1200px) {
        width: 360px;
        position: fixed;
        margin: 0;
        top: 32px;
        left: 32px;
        height: calc(100% - 64px);
    }
`;

export const UpIcon = styled.img`
    display: block;
    margin: auto;
    width: 16px;
    height: 16px;
    margin-bottom: 16px;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export const Brand = styled.div`
    font-size: 28px;
    letter-spacing: 2px;
    color: #333;
    font-weight: 600;
`;

export const BrandSub = styled.div`
    display: inline;
    color: rgb(153, 50, 204);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.3px;
`;

export const TagLine = styled.div`
    color: #999;
    font-size: 13px;
    /* letter-spacing: 14px; */
    letter-spacing: 2px;
`;

export const PulledDown = styled.div`
    @media (min-width: 1200px) {
        position: absolute;
        bottom: 16px;
        width: calc(100% - 32px);
    }
`;

export const SiteInfo = styled.div`
    font-size: 12px;
    display: block;
    text-align: right;
    line-height: 1.5;
`;

export const InlineLink = styled(Link)`
    font-weight: 600;
    color: ${Color.LinkColor};
    transition: color 0.1s linear;
    text-decoration: none;

    &:hover {
        color: ${Color.LinkColorEvenDarker};
    }
`;

export const InlineExternalLink = styled(ExternalLink)`
    font-weight: 600;
    color: ${Color.LinkColor};
    text-decoration: none;
    transition: color 0.1s linear;

    &:hover {
        color: ${Color.LinkColorEvenDarker};
    }
`;
