import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
} from 'date-fns';
import { useState } from 'react';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const getHeader = () => {
    return (
      <div className="flex items-center">
        <div
          className="border border-gray-300 rounded px-4 py-2 cursor-pointer"
          onClick={() => {
            setSelectedDate(new Date());
            setActiveDate(new Date());
          }}
        >
          Today
        </div>
        <h2 className="ml-4 text-2xl">{format(activeDate, 'MMMM yyyy')}</h2>
        <AiOutlineLeft
          className="w-8 h-8 cursor-pointer"
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        />
        <AiOutlineRight
          className="w-8 h-8 cursor-pointer"
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        />
      </div>
    );
  };

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div className="text-center font-bold" key={day}>
          {format(addDays(weekStartDate, day), 'E')}
        </div>
      );
    }
    return (
      <div className="grid grid-cols-7 gap-2 border p-2 mt-2">{weekDays}</div>
    );
  };

  const generateDatesForCurrentWeek = (
    date: Date,
    selectedDate: number | Date,
    activeDate: number | Date
  ) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          className={`border-gray-300 border-l ${
            isSameMonth(currentDate, activeDate) ? '' : 'text-gray-400'
          } ${
            isSameDay(currentDate, selectedDate) ? 'bg-blue-500 text-white' : ''
          } ${
            isSameDay(currentDate, new Date()) ? 'bg-gray-200' : ''
          } p-2 cursor-pointer`}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
          key={currentDate.toISOString()}
        >
          {format(currentDate, 'd')}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      const weekDates = generateDatesForCurrentWeek(
        currentDate,
        selectedDate,
        activeDate
      );
      allWeeks.push(
        <div
          className="grid grid-cols-7  border border-gray-300"
          key={currentDate.toISOString()}
        >
          {weekDates}
        </div>
      );
      currentDate = addDays(currentDate, 7);
    }

    return <div className="">{allWeeks}</div>;
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="bg-gray-150 p-8 border border-gray-250 shadow-lg rounded-lg w-4/6 mb-10">
        {getHeader()}
        {getWeekDaysNames()}
        {getDates()}
      </div>
    </div>
  );
};

export default Calendar;
