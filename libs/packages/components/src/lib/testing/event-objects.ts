/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Creates a browser MouseEvent with the specified options. */
export function createMouseEvent(type: string, x = 0, y = 0, button = 0) {
  const event = new MouseEvent(type, {
    bubbles: true,
    cancelable: false,
    detail: 0,
    screenX: x,
    screenY: y,
    clientX: x,
    clientY: y,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    button,
    relatedTarget: null,
  });

  // `MouseEvent`'s constructor doesn't allow us to pass the `buttons` and
  // defaults it to 0 which looks like a fake event.
  Object.defineProperty(event, 'buttons', { get: () => 1 });

  return event;
}

/** Creates a browser TouchEvent with the specified pointer coordinates. */
export function createTouchEvent(type: string, pageX = 0, pageY = 0) {
  // In favor of creating events that work for most of the browsers, the event is created
  // as a basic UI Event. The necessary details for the event will be set manually.
  const event = document.createEvent('UIEvent');
  const touchDetails = { pageX, pageY };

  event.initEvent(type, true, true);

  // Most of the browsers don't have a "initTouchEvent" method that can be used to define
  // the touch details.
  Object.defineProperties(event, {
    touches: { value: [touchDetails] },
    targetTouches: { value: [touchDetails] },
    changedTouches: { value: [touchDetails] },
  });

  return event;
}

/** Dispatches a keydown event from an element. */
export function createKeyboardEvent(type: string, keyCode: number, target?: Element, key?: string) {
  const event = new KeyboardEvent(type, {
    bubbles: true,
    cancelable: true,
    key,
  });

  // Webkit Browsers don't set the keyCode when calling the init function.
  // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
  Object.defineProperties(event, {
    keyCode: { get: () => keyCode },
    key: { get: () => key },
    target: { get: () => target },
  });

  return event;
}

/** Creates a fake event object with any desired event type. */
export function createFakeEvent(type: string, canBubble = false, cancelable = true) {
  const event = document.createEvent('Event');
  event.initEvent(type, canBubble, cancelable);
  return event;
}
