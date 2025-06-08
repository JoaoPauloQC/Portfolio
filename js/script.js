const IamList = ['Desenvolvedor', 'Estudante' , 'Designer']
let i = 0
const text = document.getElementById('changabletext')
let rotate_index = 5

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
    // console.log(IamList.length)
    // console.log('O i é' + i)
    if (increment(i,IamList)){
        i = 0
    }
    else{
        i +=1
    }
    // console.log(IamList[i])
    text.innerText = IamList[i]


},1000)

function faster(){
    
    if(rotate_index != 0.5){
        rotate_index -= 0.5
    }
    else{
        rotate_index = 8
    }
    
    const square = document.getElementById('rotateborder')
    const square_styles = window.getComputedStyle(square)
    const square_rotate = square_styles.getPropertyValue('transition')
    square.style.animationDelay = "" + rotate_index + "s"
    square.style.animation = 'rotate ' + rotate_index + "s" + ' linear infinite'
    console.log('index = ' + rotate_index)
    console.log(square_styles.getPropertyValue('animation'))


}

function menuToogle(){

    const ul = document.getElementById('navul')
    inative_class = document.getElementsByClassName('')
    


    if(ul.classList.contains('inactive')){
        ul.classList.remove('inactive')
        ul.classList.add('active')

    }
    else{
        ul.classList.remove('active')
        ul.classList.add('inactive')
    }


}