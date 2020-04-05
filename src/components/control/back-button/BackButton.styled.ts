import { Color } from '../../../resources/constants';
import { Link } from '../../link';

export const Root = styled(Link)`
    display: block;
    font-size: 14px;
    margin-bottom: 24px;
    transition: color 0.1s linear;

    &:hover {
        color: ${Color.LinkColorEvenDarker};
    }
`;
