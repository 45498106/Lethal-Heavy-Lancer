function StateMachine() {
  this.STATE = "IDLE";

  this.transite = function(nextState) {
    console.log(this.STATE + " -> " + nextState);
    switch (this.STATE){
      case "IDLE":
        if (nextState === "LOBBY") {
          createLobby();
          console.log("create lobby");
          this.STATE = "LOBBY";
        }
        break;
      case "LOBBY":
        if (nextState === "TUTORIAL") {
          disposeLobby();
          // startTutorial();
          console.log("start tutorial");
          this.STATE = "TUTORIAL";
        } else if (nextState === "GAME") {
          disposeLobby();
          startGame();
          console.log("start game");
          this.STATE = "GAME";
        }
        break;
      case "GAME":
        if (nextState === "LOBBY") {
          // disposeGame();
          createLobby();
          console.log("create lobby");
          this.STATE = "LOBBY";
        }
        break;
      case "TUTORIAL":
        if (nextState === "LOBBY") {
          // disposeGame();
          createLobby();
          console.log("create lobby");
          this.STATE = "TUTORIAL";
        }
        break;
      default:
        break;
    }
  }
}