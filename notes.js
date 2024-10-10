export class Note {
  constructor(date, text, timeStart, timeEnd) {
    this.date = date,
    this.name = text,
    this.timeStart = timeStart,
    this.timeEnd = timeEnd,
    this.type = 'note'
  }
}

export const notes = []