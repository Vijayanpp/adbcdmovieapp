import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'adbcd-newscard-dev',
  templateUrl: './newscard2.component.html',
  styleUrls: ['./newscard2.component.css']
})
export class Newscard2Component implements OnInit {
	@Input()
	news:Object;
	
  constructor() { }

  ngOnInit() {
  }

}
