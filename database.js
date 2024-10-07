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
    engName: 'monday',
    rusName: 'Понедельник',
    date: '',
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
    engName: 'tuesday',
    rusName: 'Вторник',
    date: '',
    isWeekday: true,
    isHoliday: false,
    subjects: [
      new World(1, false),
      new Sport(2, false),
      new Math(3, false),
      new Reading(4, false),
      new ReadIt(5, false),
      new Cheer(8, false),
    ]
  },
  {
    id: 3,
    engName: 'wednesday',
    rusName: 'Среда',
    date: '',
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
    engName: 'thursday',
    rusName: 'Четверг',
    date: '',
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
    engName: 'friday',
    rusName: 'Пятница',
    date: '',
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
    engName: 'saturday',
    rusName: 'Суббота',
    date: '',
    isWeekday: false,
    isHoliday: false,
    subjects: [
    ]
  },
  {
    id: 7,
    engName: 'sunday',
    rusName: 'Воскресенье',
    date: '',
    isWeekday: false,
    isHoliday: false,
    subjects: [
      new Cheer(8, false),
    ]
  }
]

