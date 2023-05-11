import React from 'react';
import VisitsTableData from './VisitsTableData.jsx';

export default function VisitTable(props) {
        return (
            <table className="table-auto w-full">
            <thead>
            <tr className="bg-gray-600 text-gray-50">
                <th className="text-center px-4 py-2">Prénom</th>
                <th className="text-center px-4 py-2">Nom</th>
                <th className="text-center px-4 py-2">Motif</th>
                <th className="text-center px-4 py-2">Personne rencontrée</th>
                <th className="text-center px-4 py-2">Date entrée</th>
                <th className="text-center px-4 py-2">Sortie</th>
            </tr>
            </thead>

                {props.visitors?.filter(v => v.leavingDate === undefined).map((visitor, index) => (
                               <VisitsTableData visitor={ visitor } />
                ))}
            </table>
        );
}