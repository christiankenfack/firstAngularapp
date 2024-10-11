import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

    setItem(key :string, value: User){
      localStorage.setItem(key, JSON.stringify(value));
      console.log(key,value)
    }

    getItem(key: string): any {
      const item=localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    }
 
}
