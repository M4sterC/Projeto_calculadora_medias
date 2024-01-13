const form = document.getElementById('Form')
const ImgAprovado = '<img src="./images/aprovado.png" alt = "Emoji Celebrando" />'
const ImgReprovado = '<img src="./images/reprovado.png" alt = "Emoji Triste" />'
let linhas = ''
const Atividades = []
const Notas = []
const SpanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const SpanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const NotaMinima = parseFloat(prompt("Digite a nota minima:"))

form.addEventListener('submit',function(e){
    e.preventDefault();
    AdicionaLinha()
    AtualizaTabela()
    AtualizaMediaFinal()
})

function AdicionaLinha () {
    const InputNomeAtividade = document.getElementById('NomeAtividade')
    const InputNotaAtividade = document.getElementById('Nota')
    if(Atividades.includes(InputNomeAtividade.value)){
        alert(`A nota pra atividade ${InputNomeAtividade.value} ja foi inserida`)
    }else{
        Atividades.push(InputNomeAtividade.value)
        Notas.push(parseFloat(InputNotaAtividade.value))
    
        let linha = '<tr>';
        linha += `<td>${InputNomeAtividade.value}</td>`
        linha += `<td>${InputNotaAtividade.value}</td>`
        linha += `<td>${InputNotaAtividade.value >= NotaMinima ? "Aprovado " + ImgAprovado : "Reprovado " + ImgReprovado}</td>`;
        linha += '</tr>'
        linhas += linha
        InputNomeAtividade.value = ''
        InputNotaAtividade.value = ''
    }
}

function AtualizaTabela() {
    const CorpoTb = document.querySelector("tbody")
    CorpoTb.innerHTML = linhas
}

function AtualizaMediaFinal () {
    const MediaFinal = CalculaMediaFinal()
    document.getElementById('Media').innerHTML = MediaFinal.toFixed(2)
    document.getElementById('Media2').innerHTML = MediaFinal >= NotaMinima ? SpanAprovado : SpanReprovado;

}

function CalculaMediaFinal(){
    let SomaDasNotas = 0
    for (let i = 0; i < Notas.length; i++) {
        SomaDasNotas += Notas[i]
    }
    return SomaDasNotas / Notas.length
}