import styled from 'styled-components';
import { Color } from '../../../resources/constants';
import { Link } from '../../link';

export const Root = styled.div`
    margin-bottom: 24px;
    padding: 0 12px;
`;

export const MainFigure = styled.div`
    font-size: 42px;
    line-height: 46px;
    color: ${Color.PrimaryColor};
`;

export const Description = styled.div`
    font-size: 12px;
    color: #666;
    font-weight: 600;
`;
export const AdditionalDescription = styled(Link)`
    font-size: 12px;
`;
