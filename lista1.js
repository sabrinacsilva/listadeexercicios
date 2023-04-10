function exe1(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let sub = (n1 - n2)//variavel 1 menos a varivael 2
    alert ("O resultado da subtração é: " + sub)//colocar o "sub" para aparecer o resultado da let sub
}

function exe2(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)
    let mult = (n1*n2*n3)//var1 * var2 * var3 
    alert ("O resultado da multiplicação é: " + mult)//colocar o "mult" para aparecer o resultado da let mult
}

function exe3(){
    let n1 = Number (document.getElementById("n1").value)//primeira var.
    let n2 = Number (document.getElementById("n2").value)//segunda var.
    let div = (n1/n2)//var1 dividida pela var2 
    alert ("O resultado da divisão é: " + div)//colocar o "div" para aparecer o resultado da let div
}

function exe4(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let mdp = ((n1*2 + n2*3)/5)//var1* 2 + var2*3 e o resultado div por 5
    alert ("O resultado da média ponderada é: " + mdp)//mdp = media ponderada 
}

function exe5(){
    let p = Number (document.getElementById("p").value)//apenas uma var=p
    let pf = (p*0.9)//varP mult por 0.9 pois 10% de 100 (100-10 = 90) - 90/100 = 0.9
    alert ("O preço final do produto é: " + pf)//pf = preço final
}

function exe6(){
    // let declara variavel
    // recupera o salario fixo informado pelo usuario
    let fixo = Number (document.getElementById("fixo").value)
    // recupera vendas informadas na caixa de texto
    let vendas = Number (document.getElementById("vendas").value)
    
    
    let comissao = (vendas*0.04)// calcular a comissão
    let total = (comissao + fixo) // calcular o salario final
    alert ("comissao " + comissao + "\nSalario total: " + total)//alert é um aviso
}

function exe7(){
    let peso = Number (document.getElementById("peso").value)
    let engorda = (peso*1.15)//pois se o engordar aumenta 15% de 100(100 + 15 =115) 115/100 = 1,15
    let emagrece = (peso*0.8)//pois se emagrecer vai perder 20% de 100(100 - 20 = 80) 80/100 = 0.8 
    alert ("Se engordar: " + engorda + "\nSe emagrecer: " + emagrece)//\n é para escrever na linha de baixo
}

function exe8(){
    let kg = Number (document.getElementById("kg").value)
    let g = (kg*1000)//1kg = 1000, basta então pegar o valor dado por kg é mult 100
    alert ("O seu peso em gramas é: " + g + "g")
}

function exe9(){
    let bmaior = Number (document.getElementById("bmaior").value)//var de base maior
    let bmenor = Number (document.getElementById("bmenor").value)//var de base menor
    let h = Number (document.getElementById("h").value)//h = altura
    let a = (((bmaior + bmenor)* h)/2) //a = area do trapezio
    alert ("A área do trapézio é: " + a)
}

function exe10(){
    let l = Number (document.getElementById("l").value) //apenas uma var//
    let a = (l*l) // 1*1 pois é lado vezes o lado e os lados são os mesmos//
    alert ("A área do quadrado é: " + a)//a = area
}

function exe11() {
    let dMaior = Number(document.getElementById("dMaior").value)
    let dMenor = Number(document.getElementById("dMenor").value)
    let a = (dMaior + dMenor) / 2 
    alert("A área deste losango é" + a + "cm")
    
function exe12() {
    let salarioM = Number(document.getElementById("salarioM").value)
    let salario = Number(document.getElementById("salario").value)
    let quantidadeS = (salario / salarioM)
    alert(`A quantidade de salarios minimos ganhos é de ${quantidadeS.toFixed(1)}.`)
}
