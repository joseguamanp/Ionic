import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: HttpClient) {}

    sendPostRequest() {
      var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept','application/json');
        headers.append('content-type','application/json');
         let options = new RequestOptions({ headers:headers});
      let postData = {
         "email": "admin@admin.com",
  		  "password": "123321"
      }
      //var info;
      let ruta="http://clientes.geekslatam.com/profesionales/GeeksVersion/public/api/getuser";
      this.http.post(ruta, postData) 
        .subscribe(data => {
          console.log(data);
         }, error => {
          console.log(error);
        });
  }
}
