const IamList = ['Desenvolvedor', 'Estudante' , 'Designer']
let i = 0
const text = document.getElementById('changabletext')


function increment(a,list){

    if (a == list.length - 1 ){
        return true
    }
    else{
        a = a + 1
        return false
    }

}

setInterval(function(){
    console.log(IamList.length)
    console.log('O i é' + i)
    if (increment(i,IamList)){
        i = 0
    }
    else{
        i +=1
    }
    console.log(IamList[i])
    text.innerText = IamList[i]


},1000)