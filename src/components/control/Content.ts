import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export const Content = styled.div<{ margin?: number }>`
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    overflow: auto;

    @media (min-width: 1200px) {
        ${({ margin }): FlattenSimpleInterpolation => css`
            height: calc(100% - 360px - ${margin || 0}px);
        `}
    }
`;
