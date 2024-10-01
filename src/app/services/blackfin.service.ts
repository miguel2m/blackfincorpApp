import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespBlackfin } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const URL    = environment.url;

@Injectable({
  providedIn: 'root'
})
export class BlackfinService {
  
  private popularesPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query:string,date_desde: string, date_hasta: string) {

    const data = {date_desde,date_hasta}
    //query += `&api_key=${ apiKey }&language=es&include_image_language=es`;
    query = URL+query;
    return this.http.post<T>( query,data );

  }

  getCotizador(desde:string,hasta:string) {

    //this.popularesPage++;

    //const query = `/discover/movie?sort_by=popularity.desc&page=${ this.popularesPage }`;
    const query = `/Consulta/`;

    return this.ejecutarQuery<RespBlackfin>(query,desde,hasta);

  }
}
