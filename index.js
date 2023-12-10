const d = document 

const html = document.querySelector('html')
const head = d.querySelector('head')
const body = d.querySelector('body')
const newHeader = document.createElement('header')
// html.append(newHeader)


const createAndAppendNewHeader = () => {
    const newHeader = document.createElement('header')
    const header = document.querySelector('header')
    document.documentElement.prepend(newHeader)
    newHeader.innerText = "🤯"
    newHeader.style.textAlign = 'center';
    newHeader.style.fontSize = '500px';
}

createAndAppendNewHeader()

// const header = document.querySelector('header')
// const headerStyleObject = window.getComputedStyle(header)


const huntr = d.getElementById("huntr-react-container-2")

huntr.remove()

head.innerText = ""
body.innerText = ""


body.style.backgroundColor = 'skyblue';


// Steps: 
// 1. createElement
// 2. append newly created element 
// 3. Use css selector to attach new dom node to js variable 

const newSection = d.createElement('section')
body.append(newSection)
const section = d.querySelector('section')


// Creates and appends <fieldset></fieldset>
const newFieldset = d.createElement('fieldset')
section.append(newFieldset)
const fieldset = d.querySelector('fieldset')


// Creates and appends <legend></legend> and gives innerText. 
const newLegend = d.createElement('legend')
fieldset.append(newLegend)
const legend = d.querySelector('legend')
legend.innerText = 'Form with Form Inputs'


// Creates and appends <form></form>
const newForm = d.createElement('form')
legend.append(newForm)
const form = d.querySelector('form')

// Creates and appends <div></div>
const newDiv = d.createElement('div')
form.append(newDiv)
const div = d.querySelector('div')
div.classList.add("inputs")

const numLabels = 8;


for (let i = 1; i <= numLabels; i++) {
    const newLabel = document.createElement('label') 
    const label = document.querySelector('label')
    const newInput = document.createElement('input')
    const input = document.querySelector('input')
    const newBreakElement = document.createElement('br')
    const breakElement = document.querySelector('br')
    if (i === 1) {
        newLabel.innerText = 'First Name:'
        newLabel.setAttribute('for', 'first-name')
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('id', 'first-name')
        newInput.setAttribute('name', 'first-name')
        newInput.setAttribute('placeholder', 'First Name')
    } else if (i === 2) {
        newLabel.innerText = 'Last Name:'
        newLabel.setAttribute('for', 'last-name')
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('id', 'last-name')
        newInput.setAttribute('name', 'last-name')
        newInput.setAttribute('placeholder', 'Last Name')
    } else if (i === 3) {
        newLabel.innerText = 'Password:'
        newLabel.setAttribute('for', 'password')
        newInput.setAttribute('type', 'password')
        newInput.setAttribute('id', 'password')
        newInput.setAttribute('name', 'password')
        newInput.setAttribute('placeholder', 'Password')
    } else if (i === 4) {
        newLabel.innerText = 'Email:'
        newInput.setAttribute('type', 'email')
        newInput.setAttribute('id', 'email')
        newInput.setAttribute('name', 'email')
        newInput.setAttribute('placeholder', 'Email')
    } else if (i === 5) {
        newLabel.innerText = 'Date:'
        newLabel.setAttribute('for', 'date')
        newInput.setAttribute('type', 'date')
        newInput.setAttribute('id', 'date')
        newInput.setAttribute('name', 'date')
        newInput.setAttribute('placeholder', 'date')
    } else if (i === 6) {
        newLabel.innterText = 'Profile Pic:'
        newLabel.setAttribute('for', 'profile-pic')
        newInput.setAttribute('type', 'file')
        newInput.setAttribute('name', 'profile-pic')
        newInput.setAttribute('id', 'profile-pic')
    } else if (i === 7) {
        newInput.setAttribute('type', 'submit')
        newInput.setAttribute('value', 'submit')
    } else if  (i === 8) {
        newInput.setAttribute('type', 'reset')
        newInput.setAttribute('value', 'reset')
    }
    div.append(newLabel)
    div.append(newInput)
    div.append(newBreakElement)
}


section.style.marginTop = '100px';
section.style.marginLeft = 'auto';
section.style.marginRight = 'auto';
section.style.width = '50%';


fieldset.style.margin = 'auto';


// input.style.display = 'flex';
const input = document.querySelector('input')

const inputCollection = document.querySelectorAll('input')

const inputArray = Array.from(inputCollection)

inputArray.forEach((input) => {
    input.style.display = 'flex';
    input.flexDirection = 'column';
    input.height = '50%';
    input.width = '75%';
})

const userInfo = d.getElementById("user-info")



// Append <input> to <div> 5 times. type, id,name, & ploceholder HMTL attributes.
// <input> is an HTML element. type="text" is an HTML attribute of an element. 


// input.setAttribute('type', 'text')
// input.setAttribute('id', 'first-name')
// input.setAttribute('name', 'first-name')
// input.setAttribute('placeholder', 'First Name')
