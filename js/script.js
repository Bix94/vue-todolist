var app = new Vue ({
  el: '#app',
  data: {
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
    // pushare in rimossi
    // index = premuto  /  1 = solo un elemento
    removeGame(index){
      this.gamesRemoved.push(this.games[index]);
      this.games.splice(index,1);
      console.log(this.gamesRemoved);
    },
    // pushare in giochi
    restoreGame(index){
      this.games.push(this.gamesRemoved[index]);
      this.gamesRemoved.splice(index,1);
    },
    // rimuovere defintivamente splice
    deleteGame(index){
      this.gamesRemoved.splice(index,1);
    }
  }
});
