import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  row : number[] = [0,1,2];
  col : number[] = [0,1,2];
  squares : any[] = [null,null,null,null,null,null,null,null,null];
  Firstplayer : string = 'x';
  SecondPlayer : string = 'o';
  player :string = 'x';
  winner :string = null;
  Iswinner :boolean = false;
  NextTurn :boolean = true;
  showTable : boolean = false;
  showInputs : boolean = true;
  turn : string = 'it is  ' + this.Firstplayer +' turn';

  firstNameInput( firstName : string){
    this.Firstplayer = firstName;
  }
  SecondNameInput( SecondName : string){
    this.SecondPlayer = SecondName;
  }
  getName(firstName : string ,SecondName : string){
    this.Firstplayer = firstName;
    this.SecondPlayer = SecondName;
    this.showTable = true;
    this.showInputs = false;
    this.ResetGame()
  }
  PlayerClick( index : number){ 
    
    if(!this.Iswinner && !this.squares[index]){
    this.squares[index] = this.player;
    if ( this.winning()){
        this.winner = 'Winner is  ' + this.getPlayName();
        this.Iswinner = true;
        this.NextTurn = false;
    }
    this.player = this.player == 'x' ? '0' : 'x' ; 
    this.turn ='it is  ' + this.getPlayName() +' turn';
  }
  var IsDraw = this.squares.some(function (el) {
    return el == null;
}); 
if(!IsDraw && !this.Iswinner){
      this.Iswinner = true;
      this.NextTurn = false;
      this.winner = "it'\ns a Draw";
      
}
  
  }
  winning(): boolean{
    const winningOptions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[3,5,8],[0,4,8],[2,4,6]];
    for (let o of winningOptions){
    if (this.squares[o[0]]
       && this.squares[o[0]] == this.squares[o[1]]
       && this.squares[o[1]] == this.squares[o[2]]){
         return true;
       }
    }
    return false;
  }

  ResetGame(){
  this.squares = [null,null,null,null,null,null,null,null,null];
  this.player  = 'x';
  this.winner  = null;
  this.Iswinner  = false;
  this.NextTurn  = true;
  this.turn = 'it is  ' + this.getPlayName() +' turn';
  
  

  }

  getPlayName() : string{
    if(this.player == 'x'){
      return this.Firstplayer;
    } else {
      return this.SecondPlayer;
    }
  }
  constructor() { }

  ngOnInit() {
  }


}
