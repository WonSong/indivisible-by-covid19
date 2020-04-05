import * as React from 'react';
import * as Styled from './BackButton.styled';

export function BackButton(): React.ReactElement {
    return <Styled.Root to="/">Back to Home</Styled.Root>;
}
