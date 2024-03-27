// const nome = document.querySelector(".nome_primeira_avaliacao")
// const dados = [{
//     name: 'Alexandre',
//     local: 'São Paulo, Brasil',
//     data: 'dezembro de 2023',
//     comentario: 'O espaço parece mais bonito pelas fotos, entretanto, o piso precisa ser arrumado, a pia da cozinha também precisa ser arrumada… O ofurô fica em um espaço não muito bom, o melhor seria ali na própria cabana, daria muito mais segurança de não ter bichos. Alem do mais, o ofuro nao funcionou na nossa estadia. Também, a limpeza deixou a desejar (tinha pó nas coisas, a toalha estava com odor…) E a internet, não funciona para quem quer trabalhar do espaço. Espaco caro para o que oferece.'
// }, {
//     name: 'Susana',
//     local: 'Curitiba, Brasil',
//     data: 'dezembro de 2023',
//     comentario: 'Tivemos uma estadia maravilhosa na cúpula. O lugar é tranquilo e privado e absolutamente deslumbrante. A casa é confortável e tem tudo o que você precisa. Os anfitriões são muito simpáticos e tudo bem preparado para a nossa chegada. Nós realmente gostamos da nossa estadia no belo espaço e localização.'
// }]


// dados.forEach((elemento)=>{
//     const nomeDaPessoa = document.createElement('h1')
//     const comentarioDaPessoa = document.createElement('p')
//     comentarioDaPessoa.innerHTML = elemento.comentario
//     nomeDaPessoa.innerHTML = elemento.nome
//     areaFeedbacks.append(nomeDaPessoa)
//     areaFeedbacks.append(comentarioDaPessoa)

// }); 


// const dados = [{
//     name: 'Alexandre',
//     local: 'São Paulo, Brasil',
//     data: 'dezembro de 2023',
//     periodo: 'Ficou algumas noites',
//     comentario: 'O espaço parece mais bonito pelas fotos, entretanto, o piso precisa ser arrumado, a pia da cozinha também precisa ser arrumada… O ofurô fica em um espaço não muito bom, o melhor seria ali na própria cabana, daria muito mais segurança de não ter bichos. Alem do mais, o ofuro nao funcionou na nossa estadia. Também, a limpeza deixou a desejar (tinha pó nas coisas, a toalha estava com odor…) E a internet, não funciona para quem quer trabalhar do espaço. Espaco caro para o que oferece.'
// }]

// const dados2 = [{
//     name: 'Susana',
//     local: 'Curitiba, Brasil',
//     data: 'dezembro de 2023',
//     periodo: 'Ficou algumas noites',
//     comentario: 'Tivemos uma estadia maravilhosa na cúpula. O lugar é tranquilo e privado e absolutamente deslumbrante. A casa é confortável e tem tudo o que você precisa. Os anfitriões são muito simpáticos e tudo bem preparado para a nossa chegada. Nós realmente gostamos da nossa estadia no belo espaço e localização.'
// }]

// const areaFeedbacks = document.querySelector(".area_feedbacks")

// dados.forEach((elemento) => {
//     const nomeDaPessoa = document.createElement('h3')
//     const data = document.createElement('li')
//     const periodo = document.createElement('li')
//     const comentarioDaPessoa = document.createElement('p')

//     nomeDaPessoa.innerHTML = elemento.name
//     data.innerHTML = elemento.data
//     periodo.innerHTML = elemento.periodo
//     comentarioDaPessoa.innerHTML = elemento.comentario

//     areaFeedbacks.appendChild(nomeDaPessoa)
//     areaFeedbacks.appendChild(data + periodo)
//     areaFeedbacks.appendChild(periodo)
//     areaFeedbacks.appendChild(comentarioDaPessoa)
// });

const dados = [{
    name: 'Alexandre',
    local: 'São Paulo, Brasil',
    data: 'dezembro de 2023',
    periodo: 'Ficou algumas noites',
    comentario: 'O espaço parece mais bonito pelas fotos, entretanto, o piso precisa ser arrumado, a pia da cozinha também precisa ser arrumada… O ofurô fica em um espaço não muito bom, o melhor seria ali na própria cabana, daria muito mais segurança de não ter bichos. Alem do mais, o ofuro nao funcionou na nossa estadia. Também, a limpeza deixou a desejar (tinha pó nas coisas, a toalha estava com odor…) E a internet, não funciona para quem quer trabalhar do espaço. Espaco caro para o que oferece.'
}]

const dados2 = [{
    name: 'Susana',
    local: 'Curitiba, Brasil',
    data: 'dezembro de 2023',
    periodo: 'Ficou algumas noites',
    comentario: 'Tivemos uma estadia maravilhosa na cúpula. O lugar é tranquilo e privado e absolutamente deslumbrante. A casa é confortável e tem tudo o que você precisa. Os anfitriões são muito simpáticos e tudo bem preparado para a nossa chegada. Nós realmente gostamos da nossa estadia no belo espaço e localização.'
}]

const areaFeedbacks = document.querySelector(".area_feedbacks")

// Iterando sobre o primeiro conjunto de dados
dados.forEach((elemento) => {
    const nomeDaPessoa = document.createElement('h3')
    const data = document.createElement('li')
    data.classList.add('data')
    const periodo = document.createElement('li')
    periodo.classList.add('claro')
    const comentarioDaPessoa = document.createElement('p')

    nomeDaPessoa.innerHTML = elemento.name
    data.innerHTML = elemento.data
    periodo.innerHTML = elemento.periodo
    comentarioDaPessoa.innerHTML = elemento.comentario

    areaFeedbacks.appendChild(nomeDaPessoa)
    areaFeedbacks.appendChild(data)
    areaFeedbacks.appendChild(periodo)
    areaFeedbacks.appendChild(comentarioDaPessoa)
});

const nome_susana = document.querySelector(".nome_susana")

dados2.forEach((buscador)=>{
    const nomePessoa = document.createElement('h3')
    const data = document.createElement('li')
    data.classList.add('data')

    nomePessoa.innerHTML = buscador.name
    data.innerHTML = buscador.data
    
})
