import React from 'react';
import './Curriculam.css';

const Curriculum = () => {
  const curriculumWeeks = [
    {
      week: 'Week 1',
      classroom: 'Rhymes, Story Telling, Reading, Speaking, etc.',
      activities: 'Brain Development, Team Building, Identifying Colors, Shapes.',
      event: 'Gandhi Jayanti Celebration on Oct 2nd.',
      dayTime: 'Mon - Thu (9:00 AM - 12:30 PM)',
      dailySchedule: [
        "Morning Prayers",
        "Classroom Learning - 1 hr",
        "Play Zone - 1 hr",
        "Activity Area - 1 hr",
        "Sleep Time - 1/2 hr"
      ]
    },
    {
      week: 'Week 2',
      classroom: 'Drawing, Painting, Learning Logical Thinking.',
      activities: 'Craft Time, Play Dough, Playing with Cards, Skill Development.',
      event: 'Festive Events planned for Oct 12th (Dussehra).',
      dayTime: 'Mon - Thu (9:00 AM - 12:30 PM)',
      dailySchedule: [
        "Morning Prayers",
        "Classroom Learning - 1 hr",
        "Play Zone - 1 hr",
        "Activity Area - 1 hr",
        "Sleep Time - 1/2 hr"
      ]
    },
    {
      week: 'Week 3',
      classroom: 'Alphabets and Numerical Learning, Recognizing Animals & Birds.',
      activities: 'Water Play, Sand Pit, Blocks, Jigsaws.',
      event: 'No specific event for Week 3.',
      dayTime: 'Mon - Thu (9:00 AM - 12:30 PM)',
      dailySchedule: [
        "Morning Prayers",
        "Classroom Learning - 1 hr",
        "Play Zone - 1 hr",
        "Activity Area - 1 hr",
        "Sleep Time - 1/2 hr"
      ]
    },
    {
      week: 'Week 4',
      classroom: 'Body Parts Recognition, Creative Tasks, Oral & Written Skills Development.',
      activities: 'Cooking, Character Play, Imaginative Play, Creative Thinking, Supermarket Concept.',
      event: 'Halloween Celebration & Diwali Events on Oct 31st.',
      dayTime: 'Mon - Thu (9:00 AM - 12:30 PM)',
      dailySchedule: [
        "Morning Prayers",
        "Classroom Learning - 1 hr",
        "Play Zone - 1 hr",
        "Activity Area - 1 hr",
        "Sleep Time - 1/2 hr"
      ]
    }
  ];

  return (
    <div className="curriculum-container">
      <h2>Curriculum (October 2024)</h2>
      <p><strong>Friday:</strong> Funday (Movie Time, Dancing, Singing, etc.)</p>
      <div className="holiday-list">
        <h3>Holiday List (October):</h3>
        <ul>
          <li>Wed, Oct 2nd - Gandhi Jayanti</li>
          <li>Sat, Oct 12th - Dussehra</li>
          <li>Thu, Oct 31st - Diwali / Halloween</li>
        </ul>
      </div>
      <div className="curriculum-weeks">
        {curriculumWeeks.map((week, index) => (
          <div className="curriculum-week" key={index}>
            <h3>{week.week}</h3>
            <p><strong>Classroom:</strong> {week.classroom}</p>
            <p><strong>Activities:</strong> {week.activities}</p>
            {week.event && <p><strong>Event:</strong> {week.event}</p>}
            <p><strong>Schedule:</strong> {week.dayTime}</p>
            <ul>
              {week.dailySchedule.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
