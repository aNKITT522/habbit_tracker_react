import React from "react";
import { useSelector , useDispatch } from "react-redux";
import styles from '../../styles/weekly.module.css' ; 
import WeeklyList from "./WeeklyList";

const Weekly = () => {
  const habits = useSelector((state) => state.habitsReducer);
  console.log(habits);
  
  return (
    <div className={styles.container}>
     { habits.list.map((habit , index)=>(
          <WeeklyList habit={habit} key={index}   />
        ))
     }
    </div>
  );
};

export default Weekly;
