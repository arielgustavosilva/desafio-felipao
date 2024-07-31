// Variáveis para armazenar o nome e a experiência (XP) do herói
let nome = 'Ariel';
let experiencia = 8500;

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível do herói com base na experiência (XP)
if (experiencia < 1000) {
    nivel = 'Ferro';
} else if (experiencia <= 2000) {
    nivel = 'Bronze';
} else if (experiencia <= 5000) {
    nivel = 'Prata';
} else if (experiencia <= 7000) {
    nivel = 'Ouro';
} else if (experiencia <= 8000) {
    nivel = 'Platina';
} else if (experiencia <= 9000) {
    nivel = 'Ascendente';
} else if (experiencia <= 10000) {
    nivel = 'Imortal';
} else {
    nivel = 'Radiante';
}

// Mensagem final
console.log(`o herói de nome ${nome} está no nivel ${nivel}`)
