import { Component, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  seed = [...Array(12).keys()]
  idToLandOn: any;
  items: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  itGame=["0.5","فقوسة","1","فقوسة","1,5","فقوسة","2","فقوسة","5","فقوسة","10","فقوسة"]
  numSpin;
  balance=100;
  betSolde:any=0
  transsection : any;
  isSpinning: boolean;
  completedSpin: boolean;
  tr:number;
  ngOnInit(){
 
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#FF0000', '#000000']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: this.itGame[value],
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
   
  }
  
   reset() {
    this.spin()
 
  }

getsoldebet(txt){
  this.betSolde=txt
}
  async spin() {
    this.wheel.reset()
    this.tr=this.randomInteger(1,15)
    this.wheel.idToLandOn=this.randomInteger(0,11)
    console.log(this.tr)
    this.balance-=this.betSolde
    await new Promise((resolve)=>{
      
      this.wheel.spin()
      this.numSpin=this.wheel.idToLandOn
    console.log(this.numSpin)
    } ) 
    
  }
  reload() {
    this.wheel.reset()
  }

   randomInteger(min, max) {
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  after() {

    switch(this.numSpin) { 
      case 0: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         this.transsection= this.betSolde*0.5
         this.balance+=this.transsection;
        })
        
         break; 
      } 
      case 1: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
         break; 
      } 
      case 2: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*1
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 3: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          
        })
         break; 
      } 
      case 4: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*1.5
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 5: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          
        })
         break; 
      } 
      case 6: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*2
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 7: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
        
        })
         break; 
      } 
      case 8: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*5
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 9: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
         break; 
      } 
      case 10: { 
        Swal.fire({
          text: '" مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.transsection= this.betSolde*10
          this.balance+=this.transsection;
        })
         break; 
      } 
      case 11: { 
        Swal.fire({
          text: '"للأسف لم تربح"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
        
        })
         break; 
      } 
      case 12: { 
        window.alert("12")
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
    
  }
}
