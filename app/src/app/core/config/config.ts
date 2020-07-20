import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface Config {
  api: {
    baseUrl: string;
  };
}

export const DEFAULT_CONFIG: Config = {
  ...environment,
};

export let CONFIG = new InjectionToken<Config>('config');
