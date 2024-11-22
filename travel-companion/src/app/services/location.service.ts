// src/app/services/location.service.ts
import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }
  /**
     * Fetches the current geolocation.
     * @returns Promise<Position> Current position with latitude, longitude, and more.
     */
  async getCurrentPosition(): Promise<Position> {
    const position = await Geolocation.getCurrentPosition();
    return position;
  }
}