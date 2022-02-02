//selecionando discos
let disk1 = document.createElement('div')
disk1.classList.add('first-disk')
let disk2 = document.createElement('div')
disk2.classList.add('second-disk')
let disk3 = document.createElement('div')
disk3.classList.add('third-disk')
let disk4 = document.createElement('div')
disk4.classList.add('fourth-disk')


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

let countNum = document.getElementById('count')
let victory = document.getElementById('victory')

function  winCase () {
    if(block3.childElementCount === 4) {
    victory.innerHTML = 'Parabens, você ganhou'
    return 
}
}
    let arr = []
    mainBlock.addEventListener('click', blockTarget)
     let count = 0
     countNum.innerHTML = count
    function blockTarget (event) {
      
        if(arr.length >= 2) {
           arr = []
       }
        arr.push(event.target)     
        console.log((arr[0].lastElementChild))
       if(arr[0].lastElementChild == null) {
            arr = []
         }
        let ultimo = arr[0].lastElementChild
        ultimo.classList.add('selected')
       
        if (arr[1] !== undefined && arr[1].lastElementChild === null || arr[0].lastElementChild.clientWidth < arr[1].lastElementChild.clientWidth ){
             arr[1].appendChild(ultimo)
             ultimo.classList.remove('selected')
             count ++
             countNum.innerHTML = count
        }
    winCase()
        ultimo.classList.remove('selected')
    }

let resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function(){
    block1.appendChild(disk4)
    block1.appendChild(disk3)
    block1.appendChild(disk2)
    block1.appendChild(disk1)
    count = 0
    countNum.innerHTML = count
    victory.innerHTML = ''
})
