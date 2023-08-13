// Set dark Mood or light Mood

document.getElementById("light-mood").addEventListener("click",function(){
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
})

document.getElementById("dark-mood").addEventListener('click',function(){
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
})


//Input Section
const ageInput = document.getElementById('age-input')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const dateInput = document.getElementById('date-input')
const numberInput = document.getElementById('number-input')
const textareaInput = document.getElementById('textarea-input')
// console.log(ageInput);
// Output Section
const ageWrong = document.getElementById("age-wrong")
const nameOutput = document.getElementById('name-output')
const emailOutput = document.getElementById('email-output')
const dateOutput = document.getElementById('date-output')
const ageOutput = document.getElementById('age-output')
const numberOutput = document.getElementById('number-output')
const textareaOutput = document.getElementById('textarea-output')

document.getElementById('name-input').addEventListener("keyup",function(event){
    let put = event.target.value
    console.log(put);
})

document.getElementById('btn').addEventListener('click', function () {
    const nameShow = nameInput.value
    const emailShow = emailInput.value
    const dateShow = dateInput.value
    const numberShow = numberInput.value
    const textareaShow = textareaInput.value
    const ageShow = ageInput.value
    console.log(nameShow,emailShow,dateShow,ageShow,numberShow,textareaShow);

    //output calling
nameOutput.innerText= nameShow;
emailOutput.innerText = emailShow;
dateOutput.innerText = dateShow;
numberOutput.innerText = numberShow;
textareaOutput.innerText = textareaShow;
ageOutput.innerText = ageShow

nameInput.value= " ";
emailInput.value= " ";
dateInput.value= " ";
numberInput.value= " ";
textareaInput.value= " ";
ageInput.value= " ";


})