import React from  'react';
import s from './Calendar.module.css';


export default class Calendar extends React.Component {
    static defaultProps = {
        years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
        monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень']
    };
    render(){
        return (
           <div className={s.Calendar}>
               <div className={s.calendarHeader}>
                   <div className={s.calendarHeaderTitle}>November 2020</div>
               </div>
               <div className={s.calendarButton}>
               <div className={s.calendarHeaderButton1}>
                   {"<"}
               </div>
               <div className={s.calendarHeaderButton2}>
                   {">"}
               </div>
               </div>
           </div>
        );
    }
}