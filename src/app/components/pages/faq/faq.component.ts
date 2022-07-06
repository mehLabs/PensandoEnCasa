import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  pyrs = [
    {
      pregunta: "¿Como puedo comprar un producto?",
      respuesta: "Sólo tienes que ir al producto que te gusta, agregarlo a tu bolsito y luego dirigirte a tu bolsito, donde se te guiará para terminar la compra"
    },{
      pregunta: "¿Puedo retirar el producto en vez de esperar un envío?",
      respuesta: "¡Sí! Comunicate con nosotros para que preparemos tu pedido y te avisemos cuándo pasar"
    },{
      pregunta: "¿Sí o sí tengo que usar MercadoPago?",
      respuesta: "No. Comunicate al whatsapp para pagar mediante otro método (transferencia, efectivo, etc)"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
