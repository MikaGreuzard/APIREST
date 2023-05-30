import React from "react";
import dayjs from "dayjs";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'



export default function VisitsTableData(props) {
  return (
    <>
      <tbody>
          <tr key={props.visitor.id}>
          <td className="text-center px-4 py-2">{props.visitor.firstname}</td>
          <td className="text-center px-4 py-2">{props.visitor.lastname}</td>
          <td className="text-center px-4 py-2">{props.visitor.reason.reasonName}</td>
          <td className="text-center px-4 py-2">{props.visitor.encouteredPerson.firstname} {props.visitor.encouteredPerson.lastname}</td>
          <td className="text-center px-4 py-2">{props.visitor.encouteredPerson.firstname} {props.visitor.encouteredPerson.lastname}</td>
          <td className="text-center px-4 py-2">{props.visitor.encouteredPerson.firstname} {props.visitor.encouteredPerson.lastname}</td>
          <td className="text-center px-4 py-2">{dayjs(props.visitor.entranceDate).format('DD/MM/YY HH:mm')}</td>
          <td className="text-center px-4 py-2">
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </td>
        </tr>  
      </tbody>
    </>
  );

  function handleClick(e) {
    e.preventDefault();
    console.log(props.visitor);
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const leavingDate = {
      leavingDate: dayjs(),
    };
    console.log(leavingDate);
    axios
      .put(`http://127.0.0.1:8000/api/visits/${props.visitor.id}`, leavingDate, config)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
  }
}

