// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function(){
  var studenti = [
    {
      nome: 'Walter',
      cognome: 'Rubicondo',
      eta: '28',
    },

    {
      nome: 'Federico',
      cognome: 'Figio',
      eta: '30',
    },

    {
      nome: 'Leonardo',
      cognome: 'Bongianni',
      eta: '30',
    }
  ];

  // console.log(studenti);

  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].eta);
  }

  $('#add').click(function () {
    //$("input[name='nome']")

    var nome = $("#nome").val();
    var cognome = $("#cognome").val();
    var eta = $("#eta").val();
    var studente = {
      nome: nome,
      cognome: cognome,
      eta: eta,
    }
    studenti.push(studente);
    for (var key in studenti) {
      $('#stampa').append(studenti[key].nome + ' ' + studenti[key].cognome +  ' ' + studenti[key].eta + '<br>');
    }
  });

  console.log(studenti);


})
