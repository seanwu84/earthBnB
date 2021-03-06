import React, {useState} from 'react';
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useHistory } from "react-router-dom";
import './searchbar.css';


function DateRange() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='date_range'>
            <DateRangePicker popperPlacement="bottom" ranges={[selectionRange]} onChange={handleSelect} />
        </div>
    )
}

export default DateRange;