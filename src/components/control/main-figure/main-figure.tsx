import * as React from 'react';
import * as Styled from './main-figure.styled';

export function MainFigure(props: React.PropsWithChildren<{}>): React.ReactElement {
    const { children } = props;

    return (
        <Styled.Root>
            <Styled.MainFigure>{children}</Styled.MainFigure>
            <Styled.Description>
                Reported hate crimes{' '}
                <Styled.AdditionalDescription to="/about">(?)</Styled.AdditionalDescription>
            </Styled.Description>
        </Styled.Root>
    );
}
