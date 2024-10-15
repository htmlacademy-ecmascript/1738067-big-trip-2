import dayjs from 'dayjs';
import { EVENT_TYPES } from './constants';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = (array) => Math.floor(Math.random() * array.length);

const getRandomEvent = () => EVENT_TYPES[getRandomArrayElement(EVENT_TYPES)];

function date() {
  return `${dayjs().year()}-${dayjs().month()}-${dayjs().day()}`;
}

function generateTimeRange(startTime) {

  const [hours, minutes] = startTime.split(':').map(Number);
  startTime = new Date();
  startTime.setHours(hours, minutes, 0, 0);

  const randomMinutes = Math.floor(Math.random() * 30) + 1;

  const endTime = new Date(startTime.getTime() + randomMinutes * 60000);

  const formatTime = (formatedDate) => formatedDate.toTimeString().slice(0, 5);

  const startTimeFormatted = formatTime(startTime);
  const endTimeFormatted = formatTime(endTime);

  return { startTime: startTimeFormatted, endTime: endTimeFormatted };
}

export {getRandomArrayElement, getRandomEvent, date, generateTimeRange, getRandomNumber};

