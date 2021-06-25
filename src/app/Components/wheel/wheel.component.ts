import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.less']
})
export class WheelComponent implements OnInit {
  isSpinning: boolean;
  completedSpin: boolean;

  constructor() { }


  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  seed = [...Array(12).keys()]
  idToLandOn: any;
  items: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  itGame=["0.5","فقوسة","1","فقوسة","1,5","فقوسة","2","فقوسة","5","فقوسة","10","فقوسة"]
  numSpin;
  balance=100;
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
  reload() {
    this.wheel.stopAnimation(false);
    this.wheel.rotationAngle = 0;
    this.wheel.ctx.clearRect(0, 0, this.wheel.ctx.canvas.width, this.wheel.ctx.canvas.height);
    this.isSpinning = false 
    this.completedSpin = false 
 
  }

  async spin() {
   
    await new Promise((resolve)=>{
      
      this.wheel.spin()
      this.numSpin=this.wheel.idToLandOn
    console.log(this.numSpin)
    } ) 
    
  }

  after() {
    switch(this.numSpin) { 
      case 0: { 
        Swal.fire({
          text: '"1 مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
        
         break; 
      } 
      case 1: { 
        Swal.fire({
          text: '"2 مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
         break; 
      } 
      case 2: { 
        Swal.fire({
          text: '"مبروك ربحت العصبة"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          
        })
         break; 
      } 
      case 3: { 
        Swal.fire({
          text: '"3 مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          
        })
         break; 
      } 
      case 4: { 
        Swal.fire({
          text: '"4 مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
         break; 
      } 
      case 5: { 
        Swal.fire({
          text: '"مبروك ربحت العصبة"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
          
        })
         break; 
      } 
      case 6: { 
        Swal.fire({
          text: '"100 مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
         break; 
      } 
      case 7: { 
        Swal.fire({
          text: '"مبروك ربحت العصبة"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
        
        })
         break; 
      } 
      case 8: { 
        Swal.fire({
          text: '"200 مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
       
        })
         break; 
      } 
      case 9: { 
        Swal.fire({
          text: '"مبروك ربحت العصبة"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
         
        })
         break; 
      } 
      case 10: { 
        Swal.fire({
          text: '"10 مبروك ربحت"',
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then((result) => {
       
        })
         break; 
      } 
      case 11: { 
        Swal.fire({
          text: '"مبروك ربحت العصبة"',
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

