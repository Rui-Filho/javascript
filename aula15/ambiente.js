let num = [5,8,2,9,4]
num.push(7)
num.sort()
console.log(`O vetor tem ${num.length} elementos`)
console.log(num[2])
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)
let os = num.indexOf(7)
if(os == -1){
    console.log(`Valor não encontrado`)
} else{console.log(`O valor  esta no índice ${os}`)}

for(let os in num){
    console.log(num[os])
}
