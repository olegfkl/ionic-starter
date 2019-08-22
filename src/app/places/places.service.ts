import {Injectable} from '@angular/core';
import {Place} from './places.model';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    private allPlaces: Place[] = [
        new Place('p1', 'Manhatten mension', 'In the heart of New York', 'https://image.jimcdn.com/app/cms/image/transf/dimension=origxorig:format=jpg/path/sf4a66f93c5c949d3/image/i35e3333efce5f209/version/1533065119/nice-big-rooms-at-the-cumbuco-guesthouse.jpg', 149.99),
        new Place('p2', 'Amour Toujours', 'Romantic place in Paris', 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/27/77/2777992_v2.jpeg', 189.99),
        new Place('p3', 'The foggy palace', 'Not your average city trip', 'https://pix10.agoda.net/hotelImages/1161062/-1/ecb8d7b2cf9e138a1d15e0f58aa88081.jpg', 99.99),
    ];

    constructor() {
    }

    get places(): Place[] {
        return [...this.allPlaces];
    }

}
