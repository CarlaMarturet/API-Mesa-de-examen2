//observer
//exporta una instancia 
//informacion que se le pasa a los observadores cuando ocurre un evento
import { NotificadorMesas } from "./NotificadorMesasObserver";

// informacion que se le pasa a los observadores cuando ocurre un evento
export interface MesaInfo {
  profesor: number;
  Materia: string;
  fecha: string;
  Modalidad: string;
}


const NotificacionPushService = new NotificadorMesas();
export default NotificacionPushService;
