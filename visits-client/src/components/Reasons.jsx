import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "components/Navbar";
import jwtDecode from "jwt-decode";

export default function Reasons() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  if (!jwtDecode(token).roles.includes("ROLE_ADMIN")) {
    window.location.href = "/visits";
  }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reasons, setReasons] = useState([]);
  const [newReason, setNewEmployee] = useState({
    reasonName: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
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
        <Navbar current="reasons" />
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
        <Navbar current="reasons" />
        <form className="max-w-6xl rounded-lg mx-auto px-6 py-12 shadow-xl mt-8">
        <div className="bg-white rounded-lg p-10 shadow-inner ">          
            <h1 className="text-3xl font-bold pb-6">
              Saisie d'un nouveau motif
            </h1>
  
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Motif
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="reasonName"
                    id="reasonName"
                    value={newReason.reasonName}
                    autoComplete="given-name"
                    className="block w-full pr-10 form-input sm:text-sm sm:leading-5"
                    placeholder="Entrez le motif"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex justify-end">
                <a href="/visits">
                <button
                type="button"
                className="px-4 py-2 mr-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-blue-500"
              >
                Annuler
              </button>
            </a>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-500"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </form>
    <div className="max-w-6xl mx-auto px-6 py-4 overflow-y-scroll" style={{ maxHeight: "calc(85vh - 400px)" }}>
  <table className="table-auto w-full rounded-lg">
    <thead className="sticky top-0 bg-gray-600 text-gray-50 rounded-lg">
        <tr className="bg-gray-600 text-gray-50 rounded-lg">
          <th className="px-4 py-2">Motif</th>
        </tr>
      </thead>
      <tbody>
        {reasons?.map((reasons, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{reasons.reasonName}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </>
  );
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(newReason);
    const token = localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post("http://127.0.0.1:8000/api/reasons", newReason, config)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
  }
  function handleChange(event) {
    event.persist();
    setNewEmployee((newReason) => ({
      ...newReason,
      [event.target.name]: event.target.value,
    }));
  }
}
