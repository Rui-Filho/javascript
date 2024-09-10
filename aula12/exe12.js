var hora = new Date().getHours()
console.log(`Agora são ${hora} horas.`)
if(hora > 4 && hora < 12){console.log('Bom dia!')}
else if(hora >= 0 && hora <= 4){console.log('Boa madrugada. Problemas com insônia?')}
else if(hora < 18){console.log('Boa tarde')}
 else{console.log('Boa noite')}
