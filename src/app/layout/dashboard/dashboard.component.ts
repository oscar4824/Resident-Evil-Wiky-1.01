import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/ResidentEvil1.jpg',
                label: 'Juegos',
                text: 'Los mejores juegos de Resident Evil Aqui'
            },
            {
                imagePath: 'assets/images/Resident3.jpg',
                label: 'Peliculas',
                text: 'Ve Reseñas de las peliculas de Resident Evil'
            },
            {
                imagePath: 'assets/images/Resident2.jpg',
                label: 'Capturas',
                text: 'Las capturas de Pantalla mas Impresionantes'
            }
        );


    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
