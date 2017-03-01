import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleryinnerpage',
  templateUrl: './galleryinnerpage.component.html',
  styleUrls: ['./galleryinnerpage.component.css']
})
export class GalleryinnerpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     this.kk()
  }
ngAfterViewInit()
{
  // this.kk();
  // console.log('kkk')
}
  kk()
  {
      var api=(<any>jQuery('.megafolio-container')).megafoliopro(
        {
            filterChangeAnimation:"rotatescale",
            filterChangeSpeed:800,
            filterChangeRotate:99,
            filterChangeScale:0.6,          
            delay:20,
            paddingHorizontal:0,
            paddingVertical:0,
            layoutarray:[8]
         });
 
      // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
      jQuery('.filter').click(function() {
            jQuery('.filter').each(function() { jQuery(this).removeClass("selected")});
            api.megafilter(jQuery(this).data('category'));
            jQuery(this).addClass("selected");
         });
		 
      // THE FANCYBOX PLUGIN INITALISATION
      jQuery(".fancybox").fancybox();
		 
      // FLEXY MENU SETTING
	 
		// GO TO TOP SETTING
		var offset = 220;
		var duration = 500;	
	
  }

}
