const quizData = [
    {
        question : "Which language is a Platform independent?",
        a: "Java",
        b: "JS",
        c: "React",
        d:"Python",
        correct:"a",
    },
    {
        question : "Which language is a Platform independent?",
        a: "Java",
        b: "JS",
        c: "React",
        d:"Python",
        correct:"a",
    },
    {
        question : "Which language is a Platform independent?",
        a: "Java",
        b: "JS",
        c: "React",
        d:"Python",
        correct:"a",
    },
    {
        question : "Which language is a Platform independent?",
        a: "Java",
        b: "JS",
        c: "React",
        d:"Python",
        correct:"a",
    },
    {
        question : "Which language is a Platform independent?",
        a: "Java",
        b: "JS",
        c: "React",
        d:"Python",
        correct:"a",
    },
];
const quiz = document.getElementById("quiz")
const ansEle = document.querySelectorAll(".optionDiv")
const question = document.getElementById('question')

const submitBtn = document.getElementById("submit")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

const currQuesInd = 0;

function deselectAnswers(){
    ansEle.forEach(ans => ans.checked = false)
}

function nextQuestion(){
    deselectAnswers()

    const currentQuesData = quizData[currQuesInd]

    question.innerText = currentQuesData.question

    a_text.innerText = currentQuesData.a
    b_text.innerText = currentQuesData.b
    c_text.innerText = currentQuesData.c
    d_text.innerText = currentQuesData.d
}

nextQuestion()

let score = 0

function selectAns(){
    let answer;

    ansEle.forEach(ans=>{
        if(ans.checked)
        {
            answer = ans
        }
    })
    return answer;
}

submitBtn.addEventListener("click",()=>{
    const answer = selectAns()

    if(answer){
        if(answer === quizData[currQuesInd].correct)
        {
            score++;
        }
        currQuesInd++;
        if(currQuesInd < quizData.length)
        {
            nextQuestion()
        }
        else{
            // no more question time to show score
            quiz.innerHTML = `
            <h2> 
                You answered ${score}/${quizData.length}
                Questions correctly
            </h2>
            <button onclick="location.reload()"> Reload </button>
            `
        }
    }
    else{
        alert("Please select an option")
    }
})