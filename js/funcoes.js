//Instancia uma variável para manipular XML     
xmlhttp = new XMLHttpRequest();
//Ler o arquivo XML
xmlhttp.open("GET", "db/db_conteudo.xml", false)
//Envia o arquivo para ser lido
xmlhttp.send();
//declarar o tipo de resposta para o navegador
xmlDoc = xmlhttp.responseXML;
//Organizando  os dados do xml em um vetor
x = xmlDoc.getElementsByTagName("postagem");


function funcaoConteudo() {0
    for (n = 0; n < x.length; n++) {
        document.write("<tr><td>" + x[n].getAttribute("codigo")
            + "</td><td><img src='imgs/" + x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "'  width='200'></td><td><a href='postagem.html?posicao=" + n + "'> "
            + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></td><td>"
            + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0, 250) + "...</td></tr>");
    }
}

function funcaoPostagem() {
    url = new URL(window.location.href);
    //posicao = 0
    parametro = url.searchParams;
    i = parametro.get("posicao");
    document.write("<tr><td>" + x[i].getAttribute("codigo") + "</td><td><img src='imgs/" + x[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + 
    "'width='200'></td><td> "
        + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td><td>"
        + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</td></tr>");
}