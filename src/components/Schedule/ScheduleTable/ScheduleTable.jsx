import React from "react";
import s from "./ScheduleTable.module.css";
import ScheduleColumn from "./ScheduleColumn/ScheduleColumn";
import {generateSchedule} from "../../../scheduleGenerator/scheduleGenerator";

function ScheduleTable() {
    const scheduleArray = generateSchedule();

    return (
        <div className={s.scheduleTable}>
            {scheduleArray.map(e =>
                <ScheduleColumn dayInfo={e} key={scheduleArray.indexOf(e)}/>
            )}
        </div>
    )
}

export default ScheduleTable;