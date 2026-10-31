import { useState, useEffect } from 'react';

export interface DigitalClockState {
  timeStr: string;
  time12Str: string;
  dateStr: string;
}

export function useDigitalClock(): DigitalClockState {
  const [clock, setClock] = useState<DigitalClockState>({
    timeStr: '',
    time12Str: '',
    dateStr: '',
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      
      // 24-hour time: HH:MM:SS
      const hours24 = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const timeStr = `${hours24}:${minutes}:${seconds}`;

      // 12-hour time: HH:MM:SS AM/PM
      const time12Str = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      // Date: DD MMM YYYY (e.g. 31 OCT 2026)
      const day = String(now.getDate()).padStart(2, '0');
      const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();
      const dateStr = `${day} ${month} ${year}`;

      setClock({ timeStr, time12Str, dateStr });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return clock;
}

