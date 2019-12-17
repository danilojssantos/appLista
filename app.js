//console.log('deu bom')

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var listas = JSON.parse(localStorage.getItem('list')) || [];


//var listas = [
   

//];

function renderListas()
{
    listElement.innerHTML = '';
    for (lista of listas)
    {
        var listaElement = document.createElement('li');
        var listaText = document.createTextNode(lista);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = listas.indexOf(lista);

        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('onclick', 'deleteLista(' + pos +')');

        linkElement.appendChild(linkText);

        listaElement.appendChild(listaText);
        listaElement.appendChild(linkElement);

        listElement.appendChild(listaElement);
    }
}

        renderListas();


        function addLista() {
            var listaText = inputElement.value;

            listas.push(listaText);
            inputElement.value = '';
            renderListas();
            saveToStorage();

        }

        buttonElement.onclick = addLista;

        function deleteLista(pos) 
        {
            listas.splice(pos, 1);
            renderListas();
            saveToStorage();
        }

        function saveToStorage()
        {
            localStorage.setItem('list', JSON.stringify(listas));
        }




