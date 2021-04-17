import { Component, ViewChild, ElementRef } from '@angular/core';
declare var H: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cuadrantes';
  private platform: any;

  @ViewChild('map')
  public mapElement: ElementRef;

  public constructor() {
    this.platform = new H.service.Platform({
      apikey: 'FCJTkYB64eZaXPhsIKNH',
    });
  }

  public ngOnInit() {
    
   }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.vector.normal.map,
        {
            zoom: 4,
            center: { lat: 37.7397, lng: -121.4252 }
        }
    );



    
}



}
