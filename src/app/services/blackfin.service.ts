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
    query = URL+query;
    return this.http.post<T>( query,data );

  }

  getCotizador(desde:string,hasta:string) {
    const query = `/Consulta/`;

    return this.ejecutarQuery<RespBlackfin>(query,desde,hasta);
  }
  getCotizadorAsync( date_desde:string,date_hasta:string ) :Promise<RespBlackfin>{

    return new Promise<RespBlackfin>( resolve => {
      const data = {date_desde,date_hasta}
      const query = `/Consulta/`;
      this.http.post<RespBlackfin>(`${ URL+query }`, data )
          .subscribe( async (resp:RespBlackfin) => {
            resolve(resp);
          });
    });


  }
}
