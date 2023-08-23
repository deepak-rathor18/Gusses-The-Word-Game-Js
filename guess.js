
const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let randWords="";
let sWords=['python','javascript','c++','php','java','c#','html','css','reactjs','mongodb','github','angular','android','sql','ruby','nodejs','expressjs','postman','google','kotlin','swift']

const createNewWords=()=>{
    let runNum = Math.floor(Math.random() * sWords.length);
    // console.log(runNum);
    let newTempSwords=sWords[runNum];
    return newTempSwords;
}

const scrambleWords=(arr)=>{
    for(let i = arr.length-1;i>0;i--){
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr
}

btn.addEventListener('click',function(){
    if(!play){
        play = true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
        newWords=createNewWords();
        randWords=scrambleWords(newWords.split("")).join("");
        // msg.innerHTML = 'Guess the word : ${randWords}';
        // console.log(randWords.join(""));
        msg.innerHTML=randWords;
    }
    else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            play = false;
            msg.innerHTML="Awesome Its Correct.It is " +newWords;
            btn.innerHTML='Start Again';
            guess.classList.toggle('hidden');
            guess.value = "";

        }else{
            console.log('incorrect');
            msg.innerHTML = "Sorry Boss. Its not Correct.plz try again : "+randWords;
        }
    }
})
