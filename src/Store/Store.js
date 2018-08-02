import {observable} from "mobx";

export default new class Store {
  @observable battlefield = {
    turnCount: 0,
    playersTurn:1
  };
}();