import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.scss';
import 'react-calendar/dist/Calendar.scss';
import 'react-clock/dist/Clock.scss';

const Datepicker = () => {

    const [value, setValue] = useState(new Date());

    return (
        <div className="p-5">
            <DateTimePicker onChange={setValue} value={value} />
        </div>
    );
};

export default Datepicker;