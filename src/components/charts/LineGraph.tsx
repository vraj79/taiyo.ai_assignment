import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { RootState } from "../../redux/store";
import { fetchCasesData, setCasesData } from "../../redux/actions";
import MapComponent from "./MapComponent";

const LineGraph: React.FC = () => {
  const { casesData } = useSelector((state: RootState) => state.case);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const casesData = await fetchCasesData(
        "https://disease.sh/v3/covid-19/all"
      );
      dispatch(setCasesData(casesData));
    };

    fetchData();
  }, [dispatch]);

  const data1 = {
    labels: ["Cases", "Recovered"],
    datasets: [
      {
        label: "Cases",
        data: [1000000, casesData?.cases],
        borderColor: "#f44336",
        fill: false,
      },
      {
        label: "Recovered",
        data: [1000000, casesData?.recovered],
        borderColor: "#4caf50",
        fill: false,
      },
    ],
  };
  const data2 = {
    labels: ["Deaths", "Active"],
    datasets: [
      {
        label: "Deaths",
        data: [100, casesData?.deaths],
        borderColor: "#9e9e9e",
        fill: false,
      },
      {
        label: "Active",
        data: [100, casesData?.active],
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div className="line-graph p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Global Cases Over Time</h2>
      <div className="border-b border-yellow-300 p-5 bg-slate-200 shadow rounded-lg mb-5">
        <Line data={data1} />
      </div>
      <div className="border-b border-blue-300 mb-6 bg-slate-200 shadow rounded-lg">
        <Line data={data2} />
      </div>
      <div className="border-b border-blue-300 mb-6 bg-slate-200 shadow rounded-lg">
        <MapComponent />
      </div>
    </div>
  );
};

export default LineGraph;
