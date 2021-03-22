import { Injectable } from '@angular/core';

import { PStatServiceClient, ServiceError } from '../proto/pstat_pb_service';
import { Request, History } from '../proto/pstat_pb';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    client: PStatServiceClient;

    constructor() {
        this.client = new PStatServiceClient(environment.apiProxy);
    }

    getHistory(id: number): Promise<object> {
        return new Promise((resolve, reject) => {
            const request = new Request();
            request.setPlayerid(id);
            this.client.getHistory(request, (err: ServiceError | null, response: History | null) => {
                if (err) {
                    return reject(err);
                }
                if (response) {
                    resolve(response.toObject());
                }
            });
        });
    }
}