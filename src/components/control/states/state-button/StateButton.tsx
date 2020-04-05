import * as React from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './StateButton.styled';
import { IStateButtonProps } from './StateButton.types';
import { slugify } from '../../../../utils/slugify';

export function StateButton(props: IStateButtonProps): React.ReactElement {
    const { name, count } = props;
    const { push } = useHistory();

    const handleClicked = (): void => {
        push(`/states/${slugify(name)}`);
    };

    return (
        <Styled.Root onClick={handleClicked}>
            <Styled.Text>{name}</Styled.Text>
            <Styled.Count>{count}</Styled.Count>
        </Styled.Root>
    );
}
