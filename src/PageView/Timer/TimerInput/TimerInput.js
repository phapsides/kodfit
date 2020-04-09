import React from 'react';

export default function TimerInput({field, name, value}) {
    return (
        <input
             type='number'
             min='0'
             max='60'
             value={value}
             onChange={field}
        />
    )
}