import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  capturedImage: string | undefined;
  currentLocation: { latitude: number; longitude: number } | undefined;
  deviceInfo: any;

  constructor(
    private cameraService: CameraService,
    private locationService: LocationService,
    private deviceInfoService: DeviceInfoService
  ) {}

  async capturePhoto() {
    try {
      this.capturedImage = await this.cameraService.takePicture();
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }

  async getLocation() {
    try {
      const position = await this.locationService.getCurrentPosition();
      this.currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }

  async fetchDeviceInfo() {
    try {
      this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
    } catch (error) {
      console.error('Error fetching device info:', error);
    }
  }
}