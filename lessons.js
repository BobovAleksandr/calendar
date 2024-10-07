const lessonsMonday = [
  [],
  ['08:00', '08:30'], // 1 урок
  ['08:35', '09:15'], // 2 урок
  ['09:25', '10:05'], // 3 урок
  ['10:20', '11:00'], // 4 урок
  ['11:10', '11:50'], // 5 урок
  ['12:00', '12:40'], // 6 урок
  ['12:45', '13:25'], // 7 урок
  ['19:00', '21:00'], // Чирлидинг
]

const lessonsWeek = [
  [],
  ['08:00', '08:40'], // 1 урок
  ['08:50', '09:30'], // 2 урок
  ['09:45', '10:25'], // 3 урок
  ['10:40', '11:20'], // 4 урок
  ['11:35', '12:15'], // 5 урок
  ['12:25', '13:05'], // 6 урок
  ['13:10', '14:10'], // 7 урок
  ['19:00', '21:00'], // Чирлидинг
]

class Russian {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Русский язык';
  type = 'school'
  things = [
    'Азбука',
    'Прописи по руссскому'
  ]
}

class Reading {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Чтение';
  type = 'school'
  things = [
    'Тетрадка голубая'
  ]
}

class Talking {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Разговор о важном';
  type = 'school'
  things = [
  ]
}

class Technology {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Труд';
  type = 'school'
  things = [
    'Пластилин',
    'Доска',
    'Салфетки'
  ]
}

class Math {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Математика';
  type = 'school'
  things = [
    'Учебник по математике',
    'Прописи по математике',
    'Тетрадь по математике'
  ]
}

class Rhytmic {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Ритмика';
  type = 'school-section'
  things = [
    'Форма на ритмику',
    'Вода'
  ]
}

class Cheer {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Чирлидинг';
  type = 'train'
  things = [
    'Форма на чирлидинг',
    'Вода'
  ]
}

class World {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Окружающий мир';
  type = 'school'
  things = [
    'Учебник по окр. миру',
    'Тетрадь по окр. миру'
  ]
}

class Sport {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Физкультура';
  type = 'school'
  things = [
    'Форма на физ-ру',
    'Вода'
  ]
}

class ReadIt {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Читай-ка';
  type = 'school-section'
  things = [
  ]
}

class Music {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Музыка';
  type = 'school'
  things = [
    'Нотная тетрадь'
  ]
}

class Vitamins {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'Витаминки';
  type = 'school-section'
  things = [
  ]
}

class Art {
  constructor(id, isMonday) {
    this.id = id,
    this.timeStart = isMonday ? lessonsMonday[id][0] : lessonsWeek[id][0],
    this.timeEnd = isMonday ? lessonsMonday[id][1] : lessonsWeek[id][1]
  }
  name = 'ИЗО';
  type = 'school'
  things = [
    'Краски',
    'Альбом',
    'Стаканчик'
  ]
}

export { 
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
}