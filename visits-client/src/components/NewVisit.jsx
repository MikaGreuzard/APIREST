import React, { useState, useEffect } from "react";
import Navbar from "components/Navbar";
import axios from "axios";


export default function NewVisits() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [newVisit, setNewVisit] = useState({
    firstname: "",
    lastname: "",
    company: "",
    entranceDate: "2023-04-26T13:10:09.151Z",
    encouteredPerson: "",
    reason: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get("http://127.0.0.1:8000/api/employees", config).then(
      (response) => {
        setIsLoaded(true);
        const employees = response.data["hydra:member"];
        console.log(employees);
        setEmployees(employees);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
    axios.get("http://127.0.0.1:8000/api/reasons", config).then(
      (response) => {
        setIsLoaded(true);
        const reasons = response.data["hydra:member"];
        console.log(reasons);
        setReasons(reasons);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return (
      <>
        <Navbar current="visits" />
        <div className="m-10">
          <div>Error: {error.message}</div>
        </div>
      </>
    );
  } else if (!isLoaded) {
    return (
      <>
        <Navbar current="visits" />
        <div className="m-10 flex justify-center items-center h-screen">
          <div className="text-gray-500 text-xl font-medium animate-pulse">
            Loading...
          </div>
        </div>
      </>
    );
  } else {
    return (
    <>
      <Navbar current="newvisit" />
      <form className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-w<hite shadow rounded-lg p-10">
          <h1 className="text-3xl font-bold pb-6">
            Saisie d'une nouvelle visite
          </h1>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Prénom
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={newVisit.firstname}
                  autoComplete="givenname"
                  className="block w-full pr-10 form-input sm:text-sm sm:leading-5"
                  placeholder="Entrez le prénom"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Nom
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={newVisit.lasttname}
                  autoComplete="familyname"
                  className="block w-full pr-10 form-input sm:text-sm sm:leading-5"
                  placeholder="Entrez le nom"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="encouteredPerson"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Personne rencontrée
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <select
                  id="encouteredPerson"
                  name="encouteredPerson"
                  value={newVisit.encouteredPerson}
                  autoComplete="off"
                  className="block w-full form-select sm:text-sm sm:leading-5"
                  onChange={handleChange}

                >
                <option></option>
                    {employees.map((employee) => (
                      <option key={employee.id} value={`/api/employees/${employee.id}`}>
                        {employee.firstname} {employee.lastname}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Motif de la visite
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <select
                  id="reason"
                  name="reason"
                  value={newVisit.reason}
                  autoComplete="off"
                  className="block w-full form-select sm:text-sm sm:leading-5"
                  onChange={handleChange}
                    >
                      <option></option>
                      {reasons.map((reason) => (
                        <option key={reason.id} value={`/api/reasons/${reason.id}`}>{reason.reasonName}</option>
                      ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex justify-end">
              <a href="/visits">
              <button
              type="button"
              className="px-4 py-2 mr-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Annuler
            </button>
          </a>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  </form>
</>
);
}

function  handleSubmit(event) {
  event.preventDefault();

  console.log(newVisit);
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .post("http://127.0.0.1:8000/api/visits", newVisit, config)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
}
function handleChange(event) {
  event.persist();
  setNewVisit((newVisit) => ({
    ...newVisit,
    [event.target.name]: event.target.value,
  }));
}
}