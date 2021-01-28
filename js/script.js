var app = new Vue ({
  el: '#app',
  data: {
    newGame: '',
    games:
    [
      'Red Dead Redemption 2',
      'Genshin Impact',
      'The last of us2',
      'Mass Effect',
      'Overwatch'
    ],
    // da popolare in seguito
    gamesRemoved: []
  },
  methods:{
    // aggiungere gioco
    addGame(){
      this.games.push(this.newGame);
      this.newGame = '';
    },
    // pushare in rimossi
    removeGame(index){
      this.gamesRemoved.push(this.games[index]);
      // index = premuto  /  1 = solo un elemento
      this.games.splice(index,1);
      console.log(this.gamesRemoved);
    },
    // pushare in giochi (uno alla volta)
    restoreGame(index){
      this.games.push(this.gamesRemoved[index]);
      this.gamesRemoved.splice(index,1);
    },
    // rimuovere defintivamente splice
    deleteGame(index){
      this.gamesRemoved.splice(index,1);
    },
    erase(index){
      var domanda = confirm("Sei sicuro di voler svuotare il carrello?");
      if (domanda === true){
    // +++ PUSHA ARRAY INTERO CHIEDERE +++
        this.gamesRemoved.push(this.games);
        // svuoto tutto
        this.games = [];
      }else{
        alert("Operazione annullata");
      }
    },
    eraseCestino(index){
      var domanda = confirm("Sei sicuro di voler svuotare il cestino?");
      if (domanda === true) {
        // svuoto tutto
        this.gamesRemoved = [];
      }else{
        alert("Operazione annullata");
      }
    }
  }
});
