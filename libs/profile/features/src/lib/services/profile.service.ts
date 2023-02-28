import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private isB2b: BehaviorSubject<boolean> = new BehaviorSubject(false)

  public setIsB2B(isB2b: boolean): void {
    this.isB2b.next(isB2b);
  }

  public isB2bStream(): Observable<boolean> {
    return this.isB2b.asObservable();
  }
}
