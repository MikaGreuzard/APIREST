import React from 'react';
import VisitsTitle from 'components/VisitsTitle';
import VisitsTable from 'components/VisitsTable';

export default function Visits() {
    const visitors = ['Alexis','Sacha','Titouan']
    return(
        <div>
            <VisitsTitle visitorsCount={ visitors.length } />  
            <VisitsTable visitors={ visitors } />
        </div>
    );
}
