import React, { useState } from "react";
import Data from "./Data";

function Form(props) {
  const [fleetChoosenData, setFleetChoosenData] = useState({
    fleet_id: "Fleet id",
  });

  const handleSearch = (e) => {
    e.preventDefault();

    const input = document.getElementById("input").value;
    for (let obj of props.data) {
      if (obj.fleet_desc === input) {
        setFleetChoosenData({ ...obj, fleet_id: obj.fleet_id });
        break;
      } else {
        setFleetChoosenData({ fleet_id: "Fleet id" });
      }
    }
  };

  return (
    <>
      <form
        className=" p-[10px] flex flex-col border border-black m-auto gap-[20px]"
        id="form"
      >
        <div className="flex justify-center">
          <label>Fleet name: {fleetChoosenData.fleet_id}</label>
          <input
            className="border-black border w-max"
            type="search"
            list="datalist"
            id="input"
          />
          <datalist id="datalist">
            {props.data.map((d) => (
              <option value={d.fleet_desc} />
            ))}
          </datalist>
        </div>
        <div className="flex gap-[10px] justify-center">
          <input type="checkbox" />
          <label htmlFor="">Head fleet only</label>
          <input type="checkbox" />
          <label>Sub fleet only</label>
          <input type="checkbox" />
          <label>Head and Subfleet</label>
          <button
            className="border border-black rounded hover:bg-black hover:text-white"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-[50px] gap-y-[20px]">
          <div className="grid grid-cols-2">
            <label>ถึง :</label>
            <input
              className="border border-black"
              value={fleetChoosenData.fleet_desc || ""}
            />
          </div>
          <div className="grid grid-cols-2">
            <label>ชื่อลูกค้า :</label>
            <input
              className="border border-black"
              value={fleetChoosenData.fleet_desc || ""}
            />
          </div>
          <div className="grid grid-cols-2">
            <label>เบอร์โทร :</label>
            <input
              className="border border-black"
              value={fleetChoosenData.fleet_desc || ""}
            />
          </div>
          <div className="grid grid-cols-2">
            <label>ประเภท :</label>
            <input
              className="border border-black"
              value={fleetChoosenData.fleet_desc || ""}
            />
          </div>
          <div className="grid grid-cols-2">
            <label>เบอร์แฟกซ์ :</label>
            <input
              className="border border-black"
              value={fleetChoosenData.fleet_desc || ""}
            />
          </div>
          <div className="grid grid-cols-2">
            <label>วางบิลประจำเดือน :</label>
            <input
              className="border border-black"
              value={fleetChoosenData.fleet_desc || ""}
            />
          </div>
          <div className="grid grid-cols-2">
            <label>Email :</label>
            <input
              className="border border-black"
              value={fleetChoosenData.fleet_desc || ""}
            />
          </div>
          <div className="grid grid-cols-2">
            <label>เซลส์ผู้ดูแล :</label>
            <input
              className="border border-black"
              value={fleetChoosenData.fleet_desc || ""}
            />
          </div>
        </div>
      </form>
      <Data data={fleetChoosenData.data} />
    </>
  );
}

export default Form;
