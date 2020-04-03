import * as React from 'react';
import * as Styled from './Control.styled';
import { Route } from 'react-router-dom';
import { UnitedStates } from './united-states';
import { State } from './state';

export function Control(): React.ReactElement {
    return (
        <Styled.Root>
            <Styled.Brand>
                INDIVISIBLE <Styled.BrandSub>by COVID-19</Styled.BrandSub>
            </Styled.Brand>

            <Route path="/" exact component={UnitedStates} />
            <Route path="/about" exact component={UnitedStates} />
            <Route path="/states/:state" exact component={State} />

            <Styled.PulledDown>
                <Styled.ReportButton>Report hate crime</Styled.ReportButton>
                <Styled.SiteInfo>
                    <Styled.InlineLink to="/about">About</Styled.InlineLink> |{' '}
                    <Styled.InlineExternalLink
                        href="https://www.buymeacoffee.com/w0ns0ng"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Buy me a coffee
                    </Styled.InlineExternalLink>
                    <br />
                    Made with ❤️by{' '}
                    <Styled.InlineExternalLink
                        href="https://github.com/wonsong"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Won
                    </Styled.InlineExternalLink>
                </Styled.SiteInfo>
            </Styled.PulledDown>
        </Styled.Root>
    );
}
