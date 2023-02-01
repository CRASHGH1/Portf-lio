const nome = document.querySelector('.nome')
typeWriter(nome)

function typeWriter(elemento){

    const textArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''

    textArray.forEach((letra, i) => {
        setTimeout(()=> {
            setTimeout(() => elemento.innerHTML += letra, 175 * i)
        }, 900)
    
    });
}