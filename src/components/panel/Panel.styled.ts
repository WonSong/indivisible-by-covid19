export const Root = styled.div`
    position: absolute;
    top: 32px;
    left: calc(32px + 320px + 32px);
    width: calc(100% - 32px - 320px - 64px);
    height: calc(100% - 64px);
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    padding: 64px;
    z-index: 10000;
`;

export const Section = styled.div`
    margin-bottom: 36px;
`;

export const Heading = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #555;
    margin-top: 12px;
    margin-bottom: 12px;
`;

export const Text = styled.p`
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 1.5;
`;
