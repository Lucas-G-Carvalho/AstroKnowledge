const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)


let currentQuestionIndex = 0 
let totalCorrect = 0

function startGame(){
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion(){
    resetState()

    if(questions.length === currentQuestionIndex){
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct // adicionando uma nova informação para o botãoq ue estamos criando para caso seja o botão correto, possa recuperar a informação para saber se o usuario acertou 
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}
function resetState(){
    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild) //enquanto o elemento pai tiver algum filho dentre dele, ele é removido dentro dele
   }

   $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event){
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        totalCorrect++
    }

    document.querySelectorAll(".answer").forEach(button => {
        if(button.dataset.correct){
            button.classList.add("correct")
            // totalCorrect++
        } else {
            button.classList.add("incorrect")
        }
        

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex ++
}

function finishGame(){
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ""

    switch (true){
        case(performance >= 90):
        message = "Excelente :)"
        break
        case(performance >= 70):
        message = "Muito bom :)"
        break
        case(performance >= 50):
        message = "Bom"
        break
        default:
            message = "Pode melhorar :("
    }

    $questionsContainer.innerHTML = 
    `
    <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestion} questões!
        <span> Resultado: ${message}</span>
    </p>
    <button onclick=window.location.reload() class = "button">
    Refazer teste
    </button>
    <button onclick=window.location.href="./dashboard.html" class="button">
        Voltar
    </button>
    `


}


































const questions = [
    {
        question: "Qual é o planeta mais distante do Sol ?",
        answers: [
            {text: "Saturno", correct: false },
            {text: "Plutão", correct: false },
            {text: "Urano", corret: false },
            {text: "Netuno", correct: true }

        ]
    },
    {
        question: "Qual é o maior planeta do Sistema Solar ?",
        answers: [
            {text: "Urano", correct: false},
            {text: "Júpiter", correct: true },
            {text: "Terra", correct: false},
            {text: "Saturno", correct: false}
        ]
    },
    {
        question: "Os planetas gasosos são conhecidos pela sua formação constituída por diversos gases, como hidrogênio, hélio e metano. Os planetas gasosos são:",
        answers: [
            {text: " Júpiter, Saturno, Urano e Netuno", correct: true},
            {text: "Júpiter, Saturno, Urano e Marte", correct: false},
            {text: "Júpiter, Mercúrio, Urano e Netuno", correct: false},
            {text: "Júpiter, Saturno, Vênus e Netuno", correct: false}
        ]
    },
    {
        question: "Qual o planeta mais próximo do Sol ?",
        answers: [
            {text: "Mercúrio", correct: true},
            {text: "Terra", correct: false},
            {text: "Vênus", correct: false},
            {text: "Marte", correct: false}
        ]
    },
    {
        question: "Qual planeta é conhecido como 'Estrela dAlva' ",
        answers: [
            {text: "Mercúrio", correct: false},
            {text: "Marte", correct: false},
            {text: "Vênus", correct: true},
            {text: "Plutão", correct: false}
        ]
    },
    {
        question: "Qual planeta passou a ser conhecido como 'Planeta Anão?' ?",
        answers: [
            {text: "Urano", correct: false},
            {text: "Júpiter", correct: false},
            {text: "Netuno", correct: false},
            {text: "Plutão", correct: true}
        ]
    },
    {
        question: "Qual o nome da galáxia em que vivemos ?",
        answers: [
            {text: "Via Láctea", correct: true},
            {text: "Andrômeda", correct: false},
            {text: "Láctea", correct: false},
            {text: "Terra", correct: false}
        ]
    },
    {
        question: "Qual o planeta conhecido por ter anéis?",
        answers: [
            {text: "Mercúrio", correct: false},
            {text: "Júpiter", correct: false},
            {text: "Saturno", correct: true},
            {text: "Marte", correct: false}
        ]
    },
    {
        question: "Quantas luas existem em Júpiter ?",
        answers: [
            {text: "12", correct: false},
            {text: "4", correct: false},
            {text: "79", correct: true},
            {text: "16", correct: false}
        ]
    },
    {
        question: "Qual o planeta mais quente do Sistema Solar ?",
        answers: [
            {text: "Mercúrio", correct: false},
            {text: "Sol", correct: false},
            {text: "Vênus", correct: true},
            {text: "Marte", correct: false}
        ]
    }
]