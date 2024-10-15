import dayjs from 'dayjs';
import { getRandomEvent, generateTimeRange, getRandomNumber, date } from '../util.js';
const DATE_FORMAT = 'MMM DD';

export const tasks = {
  eventDate: date(),
  eventDay: dayjs(date()).format(DATE_FORMAT),
  eventType: () => getRandomEvent(),
  eventName: () => getRandomEvent(),
  eventTimeStart: () => generateTimeRange(`${getRandomNumber(0, 24)}:${getRandomNumber(0, 60)}`).startTime,
  eventTimeEnd: () => generateTimeRange(`${getRandomNumber(0, 24)}:${getRandomNumber(0, 60)}`).endTime,

  eventDiff: function() {
    const [startHour, startMinute] = this.eventTimeStart().split(':').map(Number);
    const [endHour, endMinute] = this.eventTimeEnd().split(':').map(Number);

    // Преобразуем время в минуты
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    // Рассчитываем разницу в минутах
    let durationMinutes = endTotalMinutes - startTotalMinutes;

    // Если разница отрицательная, значит событие закончилось на следующий день
    if (durationMinutes < 0) {
      durationMinutes += 24 * 60; // Добавляем 24 часа
    }

    const days = Math.floor(durationMinutes / (24 * 60));
    durationMinutes %= (24 * 60);
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    // Форматируем результат в нужный формат
    if (days > 0) {
      return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
    } else if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}H ${minutes > 0 ? `${minutes.toString().padStart(2, '0')}M` : '00M'}`;
    } else {
      return `${minutes}M`;
    }
  }
};

