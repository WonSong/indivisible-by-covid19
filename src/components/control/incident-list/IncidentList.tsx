import * as React from 'react';
import * as Styled from './IncidentList.styled';
import { SectionContent } from '../../section';
import { IIncidentListProps } from './IncidentList.types';
import { IIncidentDetail } from '../../../models/IDataContext';
import { Incident } from '../incident';

export function IncidentList(props: IIncidentListProps): React.ReactElement {
    const { pageSize, incidents } = props;
    const [contentCount, setContentCount] = React.useState<number>(pageSize);

    const incidentsForView =
        incidents.length <= contentCount ? [...incidents] : incidents.slice(0, contentCount);

    const handleLoadMoreButtonPressed = (): void => {
        setContentCount((p) => p + pageSize);
    };

    return (
        <SectionContent>
            {incidentsForView.map((incident: IIncidentDetail, index: number) => (
                <Incident key={index} incident={incident} />
            ))}

            {contentCount < incidents.length && (
                <Styled.LoadMoreButton onClick={handleLoadMoreButtonPressed}>
                    Load more
                </Styled.LoadMoreButton>
            )}
        </SectionContent>
    );
}
