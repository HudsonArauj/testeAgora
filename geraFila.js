const geraFila = () =>{
    let fila = document.getElementById("fila")
    let randomNumber;
    let tmp;
    let list = [1,2,3,4,5,6,7,8,9,10,11]
    for (let i = list.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = list[randomNumber];
        // troca o número aleatório pelo atual
        list[randomNumber] = list[i];
        // troca o atual pelo aleatório
        list[i] = tmp;
    }
    fila.innerHTML = list.join(" ")
}