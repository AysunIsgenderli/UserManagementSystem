import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enUS from 'date-fns/locale/en-US'
import { useState } from "react";
import { Controller, useForm } from 'react-hook-form'
import './CalendarPage.css'


const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: enUS
})

const events = [
    {
        title: "General Meeting",
        allDay: true,
        start: new Date(2023, 7, 8), 
        end: new Date(2023, 7, 8)
    },
    {
        title: "IT: Amil Rustamli- 'Texniki tapşırıqlar və texniki şərtlər toplusu'",
        start: new Date(2023, 7, 12),
        end: new Date(2023, 7, 14)
    },
    {
        title: "İM: Semih Şentür- 'Fiyat analizleri'",
        start: new Date(2023, 8, 7),
        end: new Date(2023, 8, 10)
    },
]

export const CalendarPage = () => {
    const [allEvents, setAllEvents] = useState(events)
    const { control, register, handleSubmit } = useForm()


    const handleAddEvent = (newEvent) => {
        setAllEvents([...allEvents, newEvent])
    }
    return (
        <div className="p-5">
            <div className="text-center">
                <h1 className="font-bold text-2xl my-5 text-sky-700 underline">CALENDAR</h1>
                <h2 className="text-xl text-rose-500">Add Event</h2>
                <div >
                    <form className="flex flex-nowrap items-center justify-center" onSubmit={handleSubmit(handleAddEvent)}>
                        <input
                            {...register('title', { required: true })}
                            placeholder="Add Title"
                            className="w-1/4 p-2 my-2 outline-none cursor-pointer mx-3 rounded" />
                        <Controller
                            name="start"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <DatePicker placeholderText="Start Date"
                                    className="outline-none p-2 mx-2 cursor-pointer rounded"
                                    selected={field.value}
                                    onChange={field.onChange}
                                    dateFormat='dd.MM.yyyy'
                                />
                            )}
                        />
                        <Controller
                            name="end"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <DatePicker placeholderText="End Date"
                                    className="outline-none p-2 mx-2 cursor-pointer rounded"
                                    selected={field.value}
                                    onChange={field.onChange}
                                    dateFormat='dd.MM.yyyy'
                                />
                            )}
                        />
                        <button className="rounded bg-blue-100 p-1.5 text-green-600" type="submit">Add Event</button>
                    </form>
                </div>
            </div>

            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 500, margin: '50px', color: '#fff', background: '#329ea8' }}
            />
        </div>
    )
}



