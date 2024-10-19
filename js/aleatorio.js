 const nomes =["Paola","Pedro","Paulo","luan","Luana","Alisson"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}
export const nome = aleatorio(nomes);