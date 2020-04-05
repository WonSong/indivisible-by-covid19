import { Color } from '../../../../resources/constants';

export const Root = styled.button`
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    padding: 10px 6px 10px 12px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 15px;
    margin-bottom: 8px;
    color: #555;
    cursor: pointer;
    text-decoration: none;
    background-color: #f2f2f2;
    transition: box-shadow 0.1s linear, color 0.1s linear;

    &:hover {
        box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08), 0 1px 3px 1px rgba(60, 64, 67, 0.16);
    }

    &:after {
        clear: both;
    }
`;

export const Text = styled.div`
    float: left;
    font-weight: 600;
    color: ${Color.LinkColor};
    transition: color 0.1s linear;

    &:hover {
        color: ${Color.LinkColorEvenDarker};
    }
`;

export const Count = styled.div`
    float: right;
    margin-left: 12px;
    margin-right: 6px;
    font-size: 14px;
`;
