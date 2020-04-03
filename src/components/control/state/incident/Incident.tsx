import * as React from 'react';
import * as Styled from './Incident.styled';
import { IIncidentProps } from './Incident.types';

export function Incident(props: IIncidentProps): React.ReactElement {
    const { incident } = props;

    return (
        <Styled.Root href={incident.link} target="_blank">
            <Styled.Title>
                {incident.image && <Styled.Image src={incident.image} />}
                {incident.title}
            </Styled.Title>
            <Styled.Info>
                {incident.date} | {incident.source}
            </Styled.Info>
        </Styled.Root>
    );
}
