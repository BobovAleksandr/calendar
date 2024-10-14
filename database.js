import { 
  Russian,
  Reading,
  Rhytmic,
  Math,
  World,
  Cheer,
  Sport,
  Music,
  Art,
  Vitamins,
  ReadIt,
  Talking,
  Technology,
} from './lessons.js'

export const days = [
  {
    id: 1,
    engName: 'mon',
    rusName: 'Понедельник',
    dateNumeric: getDateNumeric(1),
    dateFull: getDateText(1),
    isWeekday: true,
    isHoliday: false,
    subjects: [
      new Talking(1, true),
      new Reading(2, true),
      new Russian(3, true),
      new Technology(4, true),
      new Math(5, true),
      new Rhytmic(6, true),
      new Cheer(8, true),
    ]
  },
  {
    id: 2,
    engName: 'tue',
    rusName: 'Вторник',
    dateNumeric: getDateNumeric(2),
    dateFull: getDateText(2),
    isWeekday: true,
    isHoliday: false,
    subjects: [
      new World(1, false),
      new Sport(2, false),
      new Math(3, false),
      new Reading(4, false),
      new Russian(5, false),
      new ReadIt(6, false),
      new Cheer(8, false),
    ]
  },
  {
    id: 3,
    engName: 'wed',
    rusName: 'Среда',
    dateNumeric: getDateNumeric(3),
    dateFull: getDateText(3),
    isWeekday: true,
    isHoliday: false,
    subjects: [
      new Math(1, false),
      new Russian(2, false),
      new Reading(3, false),
      new Music(4, false),
      new Vitamins(5, false),
    ]
  },
  {
    id: 4,
    engName: 'thu',
    rusName: 'Четверг',
    dateNumeric: getDateNumeric(4),
    dateFull: getDateText(4),
    isWeekday: true,
    isHoliday: false,
    subjects: [
      new Russian(1, false),
      new Math(2, false),
      new Sport(3, false),
      new World(4, false),
      new Cheer(8, false),
    ]
  },
  {
    id: 5,
    engName: 'fri',
    rusName: 'Пятница',
    dateNumeric: getDateNumeric(5),
    dateFull: getDateText(5),
    isWeekday: true,
    isHoliday: false,
    subjects: [
      new Reading(1, false),
      new Russian(2, false),
      new Math(3, false),
      new Art(4, false),
    ]
  },
  {
    id: 6,
    engName: 'sat',
    rusName: 'Суббота',
    dateNumeric: getDateNumeric(6),
    dateFull: getDateText(6),
    isWeekday: false,
    isHoliday: false,
    subjects: [
    ]
  },
  {
    id: 7,
    engName: 'sun',
    rusName: 'Воскресенье',
    dateNumeric: getDateNumeric(7),
    dateFull: getDateText(7),
    isWeekday: false,
    isHoliday: false,
    subjects: [
      new Cheer(8, false),
    ]
  }
]

function getTodayDateNumber() {
  const date = new Date()
  const options = { day: 'numeric' }
  return date.toLocaleString('ru-RU', options)
}

function getTodayDayNumber() {
  const date = new Date()
  return date.getDay()
}

function getYear() {
  const date = new Date()
  return date.getFullYear()
}

function getMonth() {
  const date = new Date()
  return date.getMonth()
}

function getDateText(currentDayNumber) {
  const dateFull = new Date(getYear(), getMonth(), getTodayDateNumber() - getTodayDayNumber() + currentDayNumber)
  const options = { month: 'long', day: 'numeric' }
  return dateFull.toLocaleString('ru-RU', options)
}

function getDateNumeric(currentDayNumber) {
  return `${new Date().getFullYear()}-${("0" + ((new Date()).getMonth() + 1)).slice(-2)}-${("0" + (getTodayDateNumber() - getTodayDayNumber() + currentDayNumber)).slice(-2)}`
}
