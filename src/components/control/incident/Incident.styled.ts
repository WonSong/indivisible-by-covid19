import { Color } from '../../../resources/constants';

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
    transition: box-shadow 0.1s linear, color 0.1s linear;

    &:hover {
        box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08), 0 1px 3px 1px rgba(60, 64, 67, 0.16);
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 10px;
    border-radius: 5px;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
    min-height: 50px;

    &:after {
        clear: both;
    }
`;

export const Info = styled.div`
    font-size: 12px;
    color: #777;
    margin-bottom: 12px;
`;

export const SourceRoot = styled.div`
    font-size: 13px;
    color: #777;
    font-weight: 600;
`;

export const Source = styled.a`
    color: ${Color.LinkColor};
    cursor: pointer;
    text-decoration: none;
    transition: color 0.1s linear;

    &:hover {
        color: ${Color.LinkColorEvenDarker};
    }
`;
