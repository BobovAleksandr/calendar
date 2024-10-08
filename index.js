import { days } from './database.js'
// import { notes } from './notes.js'

const subjectTemplate = document.querySelector('#subjectTemplate').content
const thingTemplate = document.querySelector('#thingTemplate').content

const addNoteButton = document.querySelector('.button-add-note')
const addNoteDialog = document.querySelector('.dialog-add-note')
const addNoteDialogCloseButton = document.querySelector('.button-close')
const addNoteForm = document.forms['form-add-note']
const addNoteInputDate = addNoteForm.elements['input-add-note__date']
const addNoteInputText = addNoteForm.elements['input-add-note__text']

function createSubjectElement(subject) {
  const newSubjectElement = subjectTemplate.querySelector('.subject').cloneNode(true)
  const subjectName = newSubjectElement.querySelector('.subject-name')
  const timeStart = newSubjectElement.querySelector('.time-start')
  const timeEnd = newSubjectElement.querySelector('.time-end')
  subjectName.classList.add(`subject-name__${subject.type}`)
  subjectName.textContent = subject.name
  timeStart.textContent = subject.timeStart
  timeEnd.textContent = subject.timeEnd
  return newSubjectElement
}

function createThingElement(thing) {
  const newThingElement = thingTemplate.querySelector('.day-card__thing').cloneNode(true)
  newThingElement.textContent = thing
  return newThingElement
}

addNoteButton.addEventListener('click', () => { addNoteDialog.showModal() })

addNoteDialog.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
    addNoteDialog.close()
  }
})

addNoteDialogCloseButton.addEventListener('click', () => {
  addNoteDialog.close()
})

addNoteForm.addEventListener('submit', () => {
  notes.push(new Note(addNoteInputDate.value, addNoteInputText.value))
  console.log(notes)
})







days.forEach(day => {
  const currentDayList = document.querySelector(`.${day.engName}-card`).querySelector('.day-card__content')
  const currentDaySchoolList = currentDayList.querySelector('.day-card__list-school')
  const currentDayNoteList = currentDayList.querySelector('.day-card__list-note')
  const currentDayTrainList = currentDayList.querySelector('.day-card__list-train')
  const currentDayThingsList = currentDayList.querySelector('.day-card__things')
  day.subjects.forEach(subject => {
    subject.type.startsWith('school') ? currentDaySchoolList.append(createSubjectElement(subject)) : false
    subject.type.startsWith('note') ? currentDayNoteList.append(createSubjectElement(subject)) : false
    subject.type.startsWith('train') ? currentDayTrainList.append(createSubjectElement(subject)) : false
    subject.things.forEach(thing => {
      currentDayThingsList.append(createThingElement(thing))
    })
  })
})




class Note {
  constructor(date, text, timeStart, timeEnd) {
    this.date = date,
    this.name = text,
    this.timeStart = timeStart,
    this.timeEnd = timeEnd
  }
}

export const notes = [
  
]

