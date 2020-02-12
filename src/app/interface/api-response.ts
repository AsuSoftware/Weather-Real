import { Current } from './current';
import { Request } from './request';
import { Location } from './location';

export interface ApiResponse {
  request: Request;
  location: Location;
  current: Current;
}
