//selecionando discos
let disk1 = document.createElement('div')
disk1.classList.add('first-disk')
let disk2 = document.createElement('div')
disk2.classList.add('second-disk')
let disk3 = document.createElement('div')
disk3.classList.add('third-disk')
let disk4 = document.createElement('div')
disk4.classList.add('fourth-disk')
let disk5 = document.createElement('div')
disk5.classList.add('fifth-disk')


let mainBlock = document.querySelector('.main-block')
//selecionando blocos que os discos podem ''flutuar''
let block1 = document.createElement('section')
block1.classList.add('block')
block1.classList.add('first-block')
mainBlock.appendChild(block1)

let block2 = document.createElement('section')
block2.classList.add('block')
block2.classList.add('second-block')
mainBlock.appendChild(block2)

let block3 = document.createElement('section')
block3.classList.add('block')
block3.classList.add('third-block')
mainBlock.appendChild(block3)

// adicionando discos no primeiro bloco por default

block1.appendChild(disk4)
block1.appendChild(disk3)
block1.appendChild(disk2)
block1.appendChild(disk1)

//selecionando niveis de dificuldade 
let easyBtn = document.getElementById('easy')
let mediumBtn = document.getElementById('medium')
let hardBtn = document.getElementById('hard') 
let countNum = document.getElementById('count')
let victory = document.getElementById('victory')

function  winCase () {
   if(disk5.parentElement !== null){
    if(block3.childElementCount === 5) {
    victory.innerHTML = 'Parabens, você ganhou'

    }
}
if(disk4.parentElement !== null){
    if(block3.childElementCount === 4) {
        victory.innerHTML = 'Parabens, você ganhou'

    }
} else {
    if(block3.childElementCount === 3) {
        victory.innerHTML = 'Parabens, você ganhou'

    }
}
}
    let arr = []
    mainBlock.addEventListener('click', blockTarget)
     let count = 0
     countNum.innerHTML = count
    function blockTarget (event) {
      if (event.target.nodeName === "SECTION"){
        if(arr.length >= 2) {
           arr = []
       }
       arr.push(event.target)     
       let ultimo = arr[0].lastElementChild
       ultimo.classList.add('selected')
       
       
       if(arr[0].lastElementChild == null) {
            arr = []
         }
     
            if (arr[1] !== undefined && arr[1].lastElementChild === null || arr[0].lastElementChild.clientWidth < arr[1].lastElementChild.clientWidth ){
             arr[1].appendChild(ultimo)
             ultimo.classList.remove('selected')
             count ++
             countNum.innerHTML = count
        }
    winCase()
        ultimo.classList.remove('selected')
    }

    }

let resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function(){
    arr[0].lastElementChild.classList.remove('selected')
    arr = []

    block1.appendChild(disk3)
    block1.appendChild(disk2)
    block1.appendChild(disk1)
    count = 0
    countNum.innerHTML = count
    victory.innerHTML = ''

})


easyBtn.addEventListener('click', function(){

    block1.appendChild(disk3)
    block1.appendChild(disk2)
    block1.appendChild(disk1)
    block1.removeChild(disk4)
    block1.removeChild(disk5)
    count = 0
    countNum.innerHTML = count
    victory.innerHTML = ''

})
mediumBtn.addEventListener('click', function(){

    block1.appendChild(disk4)
    block1.appendChild(disk3)
    block1.appendChild(disk2)
    block1.appendChild(disk1) 
    block1.removeChild(disk5)
    count = 0
    countNum.innerHTML = count
    victory.innerHTML = ''

    
})
hardBtn.addEventListener('click', function(){

    block1.appendChild(disk5)
    block1.appendChild(disk4)
    block1.appendChild(disk3)
    block1.appendChild(disk2)
    block1.appendChild(disk1)
    victory.innerHTML = ''
    count = 0
    countNum.innerHTML = count
    victory.innerHTML = ''
})
