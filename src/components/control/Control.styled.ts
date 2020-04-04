import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Root = styled.div`
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    padding: 16px;
    margin-left: 16px;
    margin-right: 16px;
    z-index: 10000;
    position: absolute;
    top: 45vh;
    margin-bottom: 32px;

    @media (min-width: 1200px) {
        width: 320px;
        position: fixed;
        margin: 0;
        top: 32px;
        left: 32px;
        height: calc(100% - 64px);
    }
`;

export const Brand = styled.div`
    font-size: 28px;
    letter-spacing: 1px;
    color: #555;
    margin-bottom: 24px;
`;

export const BrandSub = styled.div`
    display: inline;
    color: #999;
    letter-spacing: 1;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.1px;
`;

export const PulledDown = styled.div`
    @media (min-width: 1200px) {
        position: absolute;
        bottom: 16px;
        width: calc(100% - 32px);
    }
`;

export const ReportButton = styled.a`
    display: block;
    text-align: center;
    margin-top: 24px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    padding: 16px 12px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    background-color: rgb(255, 23, 72);
`;

export const SiteInfo = styled.div`
    font-size: 12px;
    display: block;
    text-align: right;
    line-height: 1.5;
`;

export const InlineLink = styled(Link)`
    font-weight: 600;
    text-decoration: none;
    color: #36a2eb;
`;

export const InlineExternalLink = styled.a`
    font-weight: 600;
    text-decoration: none;
    color: #36a2eb;
`;
