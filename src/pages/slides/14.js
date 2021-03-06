import React from 'react';
import slide from '../../slide-hoc';

export default slide(() => (
    <section>
        <h1>Assignment: Querying GraphQL</h1>
        <code><pre>
        {`
        query Profiles {
            profiles {
                firstName
                lastName
                description
            }
        }
        `}
        </pre></code>
        <p>Use GraphQL to retrieve a list of profiles</p>
        <p><a href="/assignments/04/">Assignment</a></p>
    </section>
));