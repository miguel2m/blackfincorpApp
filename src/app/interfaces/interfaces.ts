export interface FilterListaTest {
  
  referencia_ent: string;
  posicion_ent:string;
  fecha_siniestro_desde: string,
  fecha_siniestro_hasta: string,
  matricula_ent: string;
  matricula_con: string;
  cod_entidad_con: string;
  entidad_con: string;
  
}

export interface ListaTest {
  
    referencia_ent: string;
    cod_posicion_ent: string;
    tramitador: string;
    fecha_siniestro: string
    matricula_ent: string;
    matricula_con: string;
    convenio: string;
    posicion_ent:string;
    cod_entidad_con: string;
    entidad_con: string;

}

export interface RespBlackfin {
  codigoError?: string;
  mensaje?: string;
  listaTest?: ListaTest[];
}
