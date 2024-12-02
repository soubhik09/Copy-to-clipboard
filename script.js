const input = document.querySelector('#copy');
const button = document.querySelector('button');
const popUp = document.querySelector('.pop_up');

button.addEventListener('click', function(){
    const copyText = input.value;

   if(copyText != ""){
    navigator.clipboard.writeText(copyText)
    .then(()=>{
        popUp.classList.add('active')
        setTimeout(() => {
        popUp.classList.remove('active')  
        }, 2000);
    })
    .catch((err)=>{
        console.error('Faild to copy', err);
        
    })
   }
})