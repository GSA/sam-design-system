import { DatePipe } from '@angular/common';
import { SdsDatePipe } from './sds-date.pipe';

describe('SdsDatePipe', () => {
  it('create an instance', () => {
    const pipe = new SdsDatePipe(new DatePipe('en-us'));
    expect(pipe).toBeTruthy();
  });
  it('should display the time when date displayed is today (milliseconds)', () => {
    const pipe = new SdsDatePipe(new DatePipe('en-us'));
    const today = Date.now();
    const todayDate = new Date(today);
    const hours = todayDate.getHours();
    const min = todayDate.getMinutes();
    expect(pipe.transform(today)).toBe(
      `${hours > 12 ? hours - 12 : hours}:${min < 10 ? `0${min}` : min} ${hours >= 12 ? 'PM' : 'AM'}`
    );
  });
  it('should display the time when date displayed is today (date string)', () => {
    const pipe = new SdsDatePipe(new DatePipe('en-us'));
    const todayDate = new Date();
    const today = todayDate.toISOString();
    const hours = todayDate.getHours();
    const min = todayDate.getMinutes();
    expect(pipe.transform(today)).toBe(
      `${hours > 12 ? hours - 12 : hours}:${min < 10 ? `0${min}` : min} ${hours >= 12 ? 'PM' : 'AM'}`
    );
  });

  it('should display the date without the year when date displayed is this calendar year (milliseconds)', () => {
    const pipe = new SdsDatePipe(new DatePipe('en-us'));
    const todayDate = new Date(Date.now());
    if (todayDate.getDate() === 1) {
      todayDate.setDate(todayDate.getDate() + 1);
    } else {
      todayDate.setDate(todayDate.getDate() - 1);
    }
    const today = todayDate.getTime();
    expect(pipe.transform(today)).toBe(
      new Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric' }).format(todayDate)
    );
  });
  it('should display the date without the year when date displayed is this calendar year (date time)', () => {
    const pipe = new SdsDatePipe(new DatePipe('en-us'));
    const todayDate = new Date(Date.now());
    if (todayDate.getDate() === 1) {
      todayDate.setDate(todayDate.getDate() + 1);
    } else {
      todayDate.setDate(todayDate.getDate() - 1);
    }
    const today = todayDate.toISOString();
    expect(pipe.transform(today)).toBe(
      new Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric' }).format(todayDate)
    );
  });

  it('should display the date with the year when date displayed is not this calendar year (milliseconds)', () => {
    const pipe = new SdsDatePipe(new DatePipe('en-us'));
    const todayDate = new Date(Date.now());
    todayDate.setFullYear(todayDate.getFullYear() - 1);
    const today = todayDate.getTime();
    expect(pipe.transform(today)).toBe(
      new Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric', year: 'numeric' }).format(todayDate)
    );
  });
  it('should display the date without the year when date displayed is this calendar year (date time)', () => {
    const pipe = new SdsDatePipe(new DatePipe('en-us'));
    const todayDate = new Date(Date.now());
    todayDate.setFullYear(todayDate.getFullYear() - 1);
    const today = todayDate.toISOString();
    expect(pipe.transform(today)).toBe(
      new Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric', year: 'numeric' }).format(todayDate)
    );
  });
});
