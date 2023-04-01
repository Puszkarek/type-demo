import {
  Observable,
  bufferToggle,
  distinctUntilChanged,
  filter,
  map,
  merge,
  mergeMap,
  shareReplay,
  startWith,
  withLatestFrom,
} from 'rxjs';

export function pauseWhen(pauser$: Observable<boolean>) {
  return function _pauseableBuffer<T>(source$: Observable<T>): Observable<T> {
    let isPaused = false;
    // if a value is already present (say a behavior subject use that value as the initial value)
    const sub = pauser$.subscribe((v) => (isPaused = v));
    sub.unsubscribe();

    const _pauser$ = pauser$.pipe(
      startWith(isPaused),
      distinctUntilChanged(),
      shareReplay(1)
    );

    const paused$ = _pauser$.pipe(filter((v) => v === true));
    const playing$ = _pauser$.pipe(filter((v) => v === false));

    const buffer$ = source$.pipe(bufferToggle(paused$, () => playing$));

    const playingStream$ = source$.pipe(
      withLatestFrom(_pauser$),
      filter(([_, state]) => state === false),
      map(([v]) => v)
    );

    return merge(buffer$.pipe(mergeMap((v) => v)), playingStream$);
  };
}
