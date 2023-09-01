import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalculator';
  input: string = '';
  result: string = '';

  clear()
  {
    this.input=''; 
    this.result='';
  }

  numberFunc(number: string){
    if(this.input == ''){
      if(number == '.')
      {
        return;
      }
      if(number == '0')
      {
        return;
      }
    }
    this.input = this.input+number;
  }

  operatorFunc(operator: string){
    if(this.input!='')
    {
      this.input=this.input+operator;
    }
    else{
      if(operator == '-')
      {
        this.input = this.input+operator;
      }
    }
    
  }

  answer()
  {
    this.result=eval(this.input);

  }

  delFunc()
  {
    if(this.input!=""){
      this.input=this.input.substr(0,this.input.length-1);
      this.result='';
    }
    
  }
}
