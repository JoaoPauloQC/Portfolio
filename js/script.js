const IamList = ['Desenvolvedor', 'Estudante' , 'Designer']
let i = 0
const text = document.getElementById('changabletext')
let rotate_index = 5
let img_index = 0
let banner_imgs = document.querySelectorAll('.banner-img')
console.log(banner_imgs)
console.log(document.getElementsByClassName('Projects'))
let page = ''
getCurrentpage()

function getCurrentpage(){

    const checkpage = (classe) => {
        if (document.getElementsByClassName(classe).length > 0){
            return true
        }
        return false
    }    

    if(checkpage("Projects")){
        console.log(document.getElementsByClassName('Projects').length)
        page = 'Projects'
       
        
    }
    else if(checkpage('aboutme')){
        page= 'aboutme'
        
    }
    else if(checkpage('home')){
        page= 'home'
        
    }
    else if(checkpage('work')){
        page= 'work'
    }

    console.log(page)
    
    function addActive(a){
        tobeactive = document.getElementById(a.toLowerCase())
        
        tobeactive.classList.add('liactive')
    }

    addActive(page)

}


function increment(a,list){

    if (a == list.length - 1 ){
        return true
    }
    else{
        a = a + 1
        return false
    }

}

if(text != null){ setInterval(function(){
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


},1000)}

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

function next(){
    console.log(banner_imgs)
    img_index += 1
    console.log(img_index)
    
    const img = document.getElementById('banner_img')
    let width = window.innerWidth

    
    
    
    if(img_index > banner_imgs.length -1){
        img.style.left = 0
        img_index = 0
    }
    else{
        console.log('else')
        if (width > 768){
            img.style.left = (img_index * -400) + 'px'
            console.log(img.style.left)
        }
        else{
            img.style.left = (img_index * -((width/5)*2)) + 'px'
            console.log(img.style.left)
        }
    }
}

function prev(){
    console.log(banner_imgs)
    
    img_index -= 1
    
    console.log(img_index)
    
    const img = document.getElementById('banner_img')
    let width = window.innerWidth

    
    
    
    if(img_index == -1){
        
        
        console.log(img_index)
        let i = 0
        while (i < banner_imgs.length){
            next()
            i++
        } 
    }
    else{
        if (width > 768){
            img.style.left = (img_index * +400) + 'px'
            console.log(img.style.left)
        }
        else{
            img.style.left = (img_index * +((width/5)*2)) + 'px'
            console.log(img.style.left)
        }
    }
}