import * as React from 'react';
import * as Styled from './Control.styled';
import { Route } from 'react-router-dom';
import { UnitedStates } from './united-states';
import { State } from './state';
import { ReportButton } from './report-button';
import { Section } from '../section';
import { About } from './about';
import { ExternalLink, Link } from '../link';

export function Control(): React.ReactElement {
    return (
        <Styled.Root>
            <Styled.UpIcon src="/static/chevron-up.svg" />

            <Section>
                <Styled.TagLine>#STOPAAPIHATE</Styled.TagLine>
                <Styled.Brand>
                    INDIVISIBLE <Styled.BrandSub>by COVID-19</Styled.BrandSub>
                </Styled.Brand>

                <ReportButton />
            </Section>

            <Route path="/" exact component={UnitedStates} />
            <Route path="/about" exact component={About} />
            <Route path="/states/:state" exact component={State} />

            <Styled.PulledDown>
                <Styled.SiteInfo>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
                    <ExternalLink
                        href="https://www.buymeacoffee.com/w0ns0ng"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Buy me a coffee
                    </ExternalLink>
                    <br />
                    Made with ❤️by{' '}
                    <ExternalLink
                        href="https://github.com/wonsong"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Won
                    </ExternalLink>
                </Styled.SiteInfo>
            </Styled.PulledDown>
        </Styled.Root>
    );
}
