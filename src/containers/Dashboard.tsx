import { useState, useEffect } from "react";
import { useAuth } from "../hooks/auth";
import WoodImg from "../assets/wood2.jpg";
import QuestP from "../assets/questp.png";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { token } = useAuth();
  const [questList, setQusetList] = useState([]);
  useEffect(() => {
    setQusetList([
      {
        name: "hoge",
        clientName: "unchi",
        reward: 10000,
        rewardUnit: "yen",
        limitDate: "2022/10/10 23:00",
      },
      {
        name: "test",
        clientName: "unchi",
        reward: 10000,
        rewardUnit: "yen",
        limitDate: "2022/10/10 23:00",
      },
      {
        name: "foo",
        clientName: "unchi",
        reward: 10000,
        rewardUnit: "yen",
        limitDate: "2022/10/10 23:00",
      },
      {
        name: "foo",
        clientName: "unchi",
        reward: 10000,
        rewardUnit: "yen",
        limitDate: "2022/10/10 23:00",
      },
      {
        name: "foo",
        clientName: "unchi",
        reward: 10000,
        rewardUnit: "yen",
        limitDate: "2022/10/10 23:00",
      },
      {
        name: "foo",
        clientName: "unchi",
        reward: 10000,
        rewardUnit: "yen",
        limitDate: "2022/10/10 23:00",
      },
    ]);
  }, []);
  return (
    <>
      <h2>Dashboard</h2>
      <div className="questboard">
        <img className="img" src={WoodImg} alt="wood" />
        <div className="quest-list">
          {questList.map((q, i) => (
            <div className="quest" key={i}>
              <img className="img paper" src={QuestP} alt="paper" />
              <div className="contents">
                <h3>{q.name}</h3>
                <p>
                  <FontAwesomeIcon icon={faUser} />
                  {q.clientName}
                </p>
                <p>
                  <FontAwesomeIcon icon={faCalendar} />
                  {q.limitDate}
                </p>
                <p>
                  <FontAwesomeIcon icon={faMoneyBill1} />
                  {q.reward}: {q.rewardUnit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
