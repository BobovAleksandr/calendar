import { days } from './database.js'
import { Note, notes } from './notes.js'

const subjectTemplate = document.querySelector('#subjectTemplate').content
const thingTemplate = document.querySelector('#thingTemplate').content

const addNoteButton = document.querySelector('.button-add-note')
const addNoteDialog = document.querySelector('.dialog-add-note')
const addNoteDialogCloseButton = document.querySelector('.button-close')
const addNoteForm = document.forms['form-add-note']
const addNoteInputDate = addNoteForm.elements['input-add-note__date']
const addNoteInputTimeStart = addNoteForm.elements['input-add-note__time-start']
const addNoteInputTimeEnd = addNoteForm.elements['input-add-note__time-end']
const addNoteInputText = addNoteForm.elements['input-add-note__text']

const daysElementsArray = [...document.querySelectorAll('.day-card__date')]

function createSubjectElement(subject) {
  const newSubjectElement = subjectTemplate.querySelector('.subject').cloneNode(true)
  const subjectName = newSubjectElement.querySelector('.subject-name')
  const timeStart = newSubjectElement.querySelector('.time-start')
  const timeEnd = newSubjectElement.querySelector('.time-end')
  subjectName.classList.add(`subject-name__${subject.type}`)
  subjectName.textContent = subject.name
  subject.timeStart ? timeStart.textContent = subject.timeStart : timeStart.remove()
  subject.timeEnd ? timeEnd.textContent = subject.timeEnd : timeEnd.remove()
  return newSubjectElement
}

function createThingElement(thing) {
  const newThingElement = thingTemplate.querySelector('.day-card__thing').cloneNode(true)
  newThingElement.textContent = thing
  return newThingElement
}


function renderNote(noteObject, dayElementList) {
  dayElementList.append(createSubjectElement(noteObject))
}

function saveData() {
  localStorage.setItem('notes', JSON.stringify(notes))
  console.log('data saved')
}

function loadData() {
  const loadedNotes = JSON.parse(localStorage.getItem(('notes')))
  console.log(loadedNotes)
  loadedNotes.forEach(note => {
    const currentDayObject = days.find(day => String(day.dateNumeric) == String(note.date))
    const currentDayElement = daysElementsArray.find(day => day.textContent === currentDayObject.dateFull)
    renderNote(note, currentDayElement.closest('.day-card').querySelector('.day-card__list-note'))
  })
  console.log('data loaded')
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
  const newNote = new Note(
    addNoteInputDate.value, 
    addNoteInputText.value, 
    addNoteInputTimeStart.value,
    addNoteInputTimeEnd.value)
    notes.push(newNote)
    const currentDayObject = days.find(day => String(day.dateNumeric) == String(newNote.date))
    const currentDayElement = daysElementsArray.find(day => day.textContent === currentDayObject.dateFull)
    addNoteForm.reset()
    saveData()
    renderNote(newNote, currentDayElement.closest('.day-card').querySelector('.day-card__list-note'))
})

// Рендер элементов уроков в карточки дней
days.forEach(day => {
  const currentDayList = document.querySelector(`.${day.engName}-card`).querySelector('.day-card__content')
  const currentDaySchoolList = currentDayList.querySelector('.day-card__list-school')
  const currentDayNoteList = currentDayList.querySelector('.day-card__list-note')
  const currentDayTrainList = currentDayList.querySelector('.day-card__list-train')
  const currentDayThingsList = currentDayList.querySelector('.day-card__things')

  day.subjects.forEach(subject => {
    subject.type.startsWith('school') ? currentDaySchoolList.append(createSubjectElement(subject)) : false
    subject.type.startsWith('train') ? currentDayTrainList.append(createSubjectElement(subject)) : false
    subject.things.forEach(thing => {
      currentDayThingsList.append(createThingElement(thing))
    })
  })
  const todayNotes = notes.filter(note => note.date === day.date)
  todayNotes.forEach(note => {
    renderNote(note, currentDayNoteList)
  })
})

// Заполнить даты в заголовки дней
daysElementsArray.forEach((dayElement, index) => {
  dayElement.textContent = days[index].dateFull
})

loadData()