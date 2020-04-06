import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import HF from "../db/HelperFunctions";

const Summary = (props) => {
  const [prevProps, setPrevProps] = useState(props);
  const [task1Avg, setTask1Avg] = useState("— ");
  const [task2Avg, setTask2Avg] = useState("— ");
  const [task3Avg, setTask3Avg] = useState("— ");
  const [task4Avg, setTask4Avg] = useState("— ");
  const [task5Avg, setTask5Avg] = useState("— ");
  const [task6Avg, setTask6Avg] = useState("— ");
  const [task7Avg, setTask7Avg] = useState("— ");
  const [task8Avg, setTask8Avg] = useState("— ");
  const [task9Avg, setTask9Avg] = useState("— ");
  const [task10Avg, setTask10Avg] = useState("— ");

  let allData = prevProps.allTaskResults;
  let task1;
  let task2;
  let task3;
  let task4;
  let task5;
  let task6;
  let task7;
  let task8;
  let task9;
  let task10;

  if (allData.length > 0) {
    task1 = allData.filter((item) => item.taskNumber === "task-1");
    task2 = allData.filter((item) => item.taskNumber === "task-2");
    task3 = allData.filter((item) => item.taskNumber === "task-3");
    task4 = allData.filter((item) => item.taskNumber === "task-4");
    task5 = allData.filter((item) => item.taskNumber === "task-5");
    task6 = allData.filter((item) => item.taskNumber === "task-6");
    task7 = allData.filter((item) => item.taskNumber === "task-7");
    task8 = allData.filter((item) => item.taskNumber === "task-8");
    task9 = allData.filter((item) => item.taskNumber === "task-9");
    task10 = allData.filter((item) => item.taskNumber === "task-10");
  }

  useEffect(() => {
    setPrevProps(props);
  }, [props]);

  useEffect(() => {
    let a = HF.calculateAverages(task1);
    setTask1Avg(a);
    let b = HF.calculateAverages(task2);
    setTask2Avg(b);
    let c = HF.calculateAverages(task3);
    setTask3Avg(c);
    let d = HF.calculateAverages(task4);
    setTask4Avg(d);
    let e = HF.calculateAverages(task5);
    setTask5Avg(e);
    let f = HF.calculateAverages(task6);
    setTask6Avg(f);
    let g = HF.calculateAverages(task7);
    setTask7Avg(g);
    let h = HF.calculateAverages(task8);
    setTask8Avg(h);
    let j = HF.calculateAverages(task9);
    setTask9Avg(j);
    let k = HF.calculateAverages(task10);
    setTask10Avg(k);
  });

  return (
    <>
      <Table size="sm" hover>
        <thead>
          <tr>
            <th>Task #</th>
            <th>Structure</th>
            <th>Avg. Time to Completion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Existing</td>
            <td>{`${task1Avg} seconds`}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Existing</td>
            <td>{`${task2Avg} seconds`}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Existing</td>
            <td>{`${task3Avg} seconds`}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Existing</td>
            <td>{`${task4Avg} seconds`}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Existing</td>
            <td>{`${task5Avg} seconds`}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>New</td>
            <td>{`${task6Avg} seconds`}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>New</td>
            <td>{`${task7Avg} seconds`}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>New</td>
            <td>{`${task8Avg} seconds`}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>New</td>
            <td>{`${task9Avg} seconds`}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>New</td>
            <td>{`${task10Avg} seconds`}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Summary;
