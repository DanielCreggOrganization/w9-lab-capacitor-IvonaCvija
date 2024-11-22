// src/app/services/device-info.service.ts
import { Injectable } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  constructor() { }
  /**
   * Fetches device information.
   * @returns Promise<DeviceInfo> Includes model, platform, and operating system.
   */
  async getDeviceInfo(): Promise<DeviceInfo> {
    try {
      const deviceInfo = await Device.getInfo();
      return deviceInfo;
    } catch (error) {
      console.error('Error fetching device info:', error);
      throw error;
    }
  }
}