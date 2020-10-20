import { fromEvent, Observable } from 'rxjs';
import { map } from "rxjs/operators";

export function pressedKeyFactory(documentRef: Document): Observable<string> {
  return fromEvent(documentRef.body, 'keydown').pipe(map((event: KeyboardEvent) => event.key))
}