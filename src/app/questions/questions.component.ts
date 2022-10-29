import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  i = 0;
  yes = 0;
  questions = ['Da li si ikada nosila čoker?', 'Da li si ikad menjao/la boju kose?', 'Da li ti je omiljeni crtani Šrek?', 'Da li iznosis instrument na ulicu?', 'Da li studiraš filozofski fakultet ili likovnu akademiju?', 'Da li si pohadjao Karlovačku gimnaziju?', 'Da li si redovan na elektropop zurkama?', 'Da li volis da ides na rejv?', 'Da li nosis Vans?', 'Da li nosis starke?', 'Da li nosis lanac na pantalonama?', 'Da li nosis koznu jaknu?', 'Da li nosis kozni prsluk?', 'Da li nosis gornjak?', 'Da li cesto nosis ranac a ne ides u skolu?', 'Da li kao punoletan konzumiras pivo iz dvolitre?', 'Da li stavljas puno maskare?', 'Da li imas pirsing?', 'Da li volis da crtas?', 'Da li bi sebe nazvao umetnickom dusom?', 'Da li si ikada crtao oci?', 'Da li slusas grunge?', 'Da li slusas ekstremne podzanrove metala?', 'Da li si odrastao bez jednog ili oba roditelja?', 'Da li slusas pop rock ili pop punk?', 'Da li volis Billie Eilish?', 'Da li ti je veoma bitna estetika?', 'Da li posecujes skate park?', 'Da li vozis skejt?', 'Da li posecujes riblju pijacu nakon zatvaranja?', 'Da li sedis na stepenicama SNPa?', 'Da li konzumiras opojna sredstva?', 'Da li konzumiras marihuanu?', 'Da li konzumiras zestinu na ulici?'];
  end = this.questions.length;
  questions1!: String[]
  constructor(private router: Router) { 
     
  }

  ngOnInit(): void {
    this.shuffle(this.questions)
    this.questions1 = this.questions.slice(0,20)
    this.end = this.questions1.length
    
  }

  Yes(){
    if(this.i == this.end - 1){
      this.yes++;
      this.router.navigate(['/results/' + this.yes]);
     
    }
    if(this.i <= this.end - 1){
      this.i++;
      this.yes++;
    }
  
   

    

  }

  No(){
    if(this.i == this.end - 1){
      this.router.navigate(['/results/' + this.yes]);
      console.log(this.yes)
    }
    if(this.i <= this.end - 1){
      this.i++;
    }

  }



  shuffle(array:String[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array
}
}
