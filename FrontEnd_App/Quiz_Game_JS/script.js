const quizData = [
    {
        question : "Which language is Platform Independent?",
        a: "Java",
        b: "JS",
        c: "React",
        d:"Python",
        correct:"a",
    },
    {
        question : "Number of primitive data types in Java are?",
        a: "1",
        b: "4",
        c: "9",
        d:"8",
        correct:"d",
    },
    {
        question : "What is the size of float and double in java?",
        a: "4 and 16",
        b: "16 and 32",
        c: "32 and 64",
        d:"64 and 64",
        correct:"c",
    },
    {
        question : "When is the object created with new keyword?",
        a: "At RunTime",
        b: "At Compile Time",
        c: "At intisiation",
        d:"No memory created",
        correct:"a",
    },
    {
        question : "To which of the following does the class string belong to.",
        a: "Java.lang",
        b: "Java.awt",
        c: "Java.util",
        d:"java.string",
        correct:"a",
    },
];
const quiz = document.getElementById("quiz")
const ansEle = document.querySelectorAll(".option")
const question = document.getElementById("question")

const submitBtn = document.getElementById("submit")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

let currQuesInd = 0;

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

let score = 0;

function selectAns(){
    let answer;

    ansEle.forEach(ans=>{
        if(ans.checked)
        {
            answer = ans.id
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
        // else{
        //     document.getElementById("rightAns").innerHTML = quizData[currQuesInd].correct;
        // }
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