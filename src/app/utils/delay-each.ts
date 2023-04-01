import { MonoTypeOperatorFunction, concatMap, delay, of } from 'rxjs';

export function delayEach<T>(due: number): MonoTypeOperatorFunction<T> {
  return concatMap((value) => of(value).pipe(delay(due)));
}
