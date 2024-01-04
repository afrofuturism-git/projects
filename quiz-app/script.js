document.addEventListener('DOMContentLoaded', ()=>{
let questionList = []
const buttonList = document.getElementById('buttonlist');
let quizData ={"response_code":0,
"results":[{"type":"multiple","difficulty":"easy","category":"Entertainment: Video Games","question":"Which of 2 Valve Games are set in the same universe?","correct_answer":"Half-life and Portal","incorrect_answers":["Portal and Left 4 Dead","Half-life and Left 4 Dead","Half-life and Counter Strike"]},
{"type":"multiple","difficulty":"medium","category":"Geography","question":"What&#039;s the first National Park designated in the United States?","correct_answer":"Yellowstone","incorrect_answers":["Sequoia ","Yosemite","Rocky Mountain"]},
{"type":"multiple","difficulty":"easy","category":"Entertainment: Video Games","question":"Which of these characters is the mascot of the video game company SEGA?","correct_answer":"Sonic the Hedgehog","incorrect_answers":["Dynamite Headdy","Alex Kidd","Opa-Opa"]},
{"type":"multiple","difficulty":"hard","category":"Entertainment: Video Games","question":"Which of these characters in &quot;Undertale&quot; can the player NOT go on a date with?","correct_answer":"Toriel","incorrect_answers":["Papyrus","Undyne","Alphys"]},
{"type":"multiple","difficulty":"easy","category":"Entertainment: Television","question":"On the show &quot;Rick and Morty&quot;, in episode &quot;Total Rickall&quot;, who was a parasite?","correct_answer":"Pencilvester","incorrect_answers":["Beth Smith","Summer Smith","Mr. Poopy Butthole"]},
{"type":"multiple","difficulty":"hard","category":"Geography","question":"Which of these island countries is located in the Caribbean?","correct_answer":"Barbados","incorrect_answers":["Fiji","Maldives","Seychelles"]},
{"type":"multiple","difficulty":"medium","category":"Science: Mathematics","question":"How many zeros are there in a googol?","correct_answer":"100","incorrect_answers":["10","1,000","1,000,000"]},
{"type":"multiple","difficulty":"easy","category":"General Knowledge","question":"According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;","correct_answer":"Truth","incorrect_answers":["Answer","Cause","Source"]},
{"type":"multiple","difficulty":"medium","category":"General Knowledge","question":"Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?","correct_answer":"Yale University","incorrect_answers":["Princeton University","Harvard University","Columbia University"]},
{"type":"multiple","difficulty":"easy","category":"Entertainment: Music","question":"Who was &quot;Kung Fu Fighting&quot; in 1974?","correct_answer":"Carl Douglas","incorrect_answers":["The Bee Gees","Heatwave","Kool &amp; the Gang"]}]}


for (let i = 0; i < 10; i++) {
  questionList.push({
    question: quizData['results'][i]['question'],
    answers: [quizData['results'][i]['correct_answer'], ...quizData['results'][i]['incorrect_answers']]
  });
}

function randomIndex(maxIndex){
  return Math.floor(Math.random()*maxIndex)
}
let buttons = buttonList.querySelectorAll('button')
console.log(buttons[randomIndex(4)])




});

