export class KeyHelper {

  private _allowedKeys: string[] = [];

  private _currentlySupported = [
    'enter','up','down','left','right','tab','esc','space',
    'shift','backspace','1','2','3','4','5','6','7','8',
    '9','0', 'delete'
  ];

  constructor (...keys) {
    this._setAllowedKeys(...keys);
  }

  public isAllowed (event): boolean {
    const val = this._allowedKeys
      .reduce(
        (val, key) => {
          return KeyHelper.is(key, event) || val;
        },
        false
      );
    return val;
  }

  private _setAllowedKeys(...keys) {
    keys.forEach(
      key => {
        if (this._currentlySupported.indexOf(key) !== -1) {
          this._allowedKeys.push(key);
        } else {
          const ok = this._allowedToString();
          const msg = `Only supports ${ok} at this time`;
          throw new TypeError(msg);
        }
      }
    );
  }

  private _allowedToString (): string {
    return this._allowedKeys.join(', ');
  }

  public static getKeyCode (event: any): string {

    if (!event) {
      return undefined;
    } else if (event.key) {
      return event.key;
    } else if (event.code) {
      return event.code;
    } else if (event.keyIdentifier) {
      return event.keyIdentifier;
    } else {
      return undefined;
    }

  }

  public static getNumberFromKey (event): number {
    const tests = [
      KeyHelper._zero, KeyHelper._one, KeyHelper._two,
      KeyHelper._three, KeyHelper._four, KeyHelper._five,
      KeyHelper._six, KeyHelper._seven, KeyHelper._eight,
      KeyHelper._nine
    ];

    return tests.reduce(
      (val: number | undefined, test: Function) => {
        return val !== undefined
          ? val
          : test(event);
      }, undefined
    );
  }

  public static is (
    validKeyParam: string,
    event: KeyboardEvent | any): boolean {
    let lowercased = validKeyParam.toLowerCase();
    switch (lowercased) {
      case 'enter':
        return this._isEnter(event);
      case 'up':
        return this._isArrowUp(event);
      case 'down':
        return this._isArrowDown(event);
      case 'left':
        return this._isArrowLeft(event);
      case 'right':
        return this._isArrowRight(event);
      case 'tab':
        return this._isTab(event);
      case 'esc':
        return this._isEscape(event);
      case 'space':
        return this._isSpace(event);
      case 'shift':
        return this._isShift(event);
      case 'backspace':
        return this._isBackspace(event);
      case 'delete':
        return this._isDelete(event);
      case '0':
        return this._isExpectedNumber(0, event);
      case '1':
        return this._isExpectedNumber(1, event);
      case '2':
        return this._isExpectedNumber(2, event);
      case '3':
        return this._isExpectedNumber(3, event);
      case '4':
        return this._isExpectedNumber(4, event);
      case '5':
        return this._isExpectedNumber(5, event);
      case '6':
        return this._isExpectedNumber(6, event);
      case '7':
        return this._isExpectedNumber(7, event);
      case '8':
        return this._isExpectedNumber(8, event);
      case '9':
        return this._isExpectedNumber(9, event);
      default:
        return false;
    }
  }

  private static _isEnter (e: KeyboardEvent | any) {
    if (e.code === 'Enter'
      || e.key === 'Enter'
      || e.keyIdentifier === 'Enter'
      || e.which === 13
      || e.charCode === 13
      || e.keyCode === 13) {
      return true;
    } else {
      return false;
    }
  }

  private static _isArrowUp (e: KeyboardEvent | any) {
    if (e.code === 'ArrowUp'
      || e.key === 'ArrowUp'
      || e.key === 'Up'
      || e.keyIdentifier === 'Up'
      || e.which === 38
      || e.keyCode === 38) {
      return true;
    } else {
      return false;
    }
  }

  private static _isArrowDown (e: KeyboardEvent | any) {
    if (e.code === 'ArrowDown'
      || e.key === 'ArrowDown'
      || e.key === 'Down'
      || e.keyIdentifier === 'Down'
      || e.which === 40
      || e.keyCode === 40) {
      return true;
    } else {
      return false;
    }
  }

  private static _isArrowLeft (e: KeyboardEvent | any) {
    if (e.code === 'ArrowLeft'
      || e.key === 'ArrowLeft'
      || e.key === 'Left'
      || e.keyIdentifier === 'Left'
      || e.which === 37
      || e.keyCode === 37) {
      return true;
    } else {
      return false;
    }
  }

  private static _isArrowRight (e: KeyboardEvent | any) {
    if (e.code === 'ArrowRight'
      || e.key === 'ArrowRight'
      || e.key === 'Right'
      || e.keyIdentifier === 'Right'
      || e.which === 39
      || e.keyCode === 39) {
      return true;
    } else {
      return false;
    }
  }

  private static _isTab (e: KeyboardEvent | any) {
    if (e.code === 'Tab'
      || e.key === 'Tab'
      || e.keyIdentifier === 'U+0009'
      || e.which === 9
      || e.keyCode === 9) {
      return true;
    } else {
      return false;
    }
  }

  private static _isEscape (e: KeyboardEvent | any) {
    if (e.code === 'Escape'
      || e.key === 'Escape'
      || e.key === 'Esc'
      || e.keyIdentifier === 'U+001B'
      || e.which === 27
      || e.keyCode === 27) {
      return true;
    } else {
      return false;
    }
  }

  private static _isSpace (e: KeyboardEvent | any) {
    if (e.code === 'Space'
      || e.key === ' '
      || e.key === 'Spacebar'
      || e.keyIdentifier === 'U+0020'
      || e.which === 32
      || e.keyCode === 32) {
      return true;
    } else {
      return false;
    }
  }

  private static _isShift (e: KeyboardEvent | any) {
    if (e.code === 'ShiftLeft'
      || e.code === 'ShiftRight'
      || e.key === 'Shift'
      || e.keyIdentifier === 'Shift'
      || e.which === 16
      || e.keyCode === 16) {
      return true;
    } else {
      return false;
    }
  }

  private static _isBackspace (e: KeyboardEvent | any) {
    if (e.code === 'Backspace'
      || e.key === 'Backspace'
      || e.keyIdentifier === 'U+0008'
      || e.which === 8
      || e.keyCode === 8) {
      return true;
    } else {
      return false;
    }
  }

  private static _isDelete (e: KeyboardEvent | any) {
    if (e.code === 'Delete'
      || e.key === 'Delete'
      || e.keyIdentifier === 'U+007F'
      || e.which === 46
      || e.keyCode === 46) {
      return true;
    } else {
      return false;
    }
  }

  private static _zero (e): number {
    if (e.code === 'Digit0'
      || e.code === 'Numpad0'
      || e.key === 0
      || e.keyCode === 48
      || e.keyCode === 96
      || e.keyIdentifier === 'U+0030'
      || e.which === 48) {
      return 0;
    } else {
      return undefined;
    }
  }

  private static _one (e): number {
    if (e.code === 'Digit1'
      || e.code === 'Numpad1'
      || e.key === 1
      || e.keyCode === 49
      || e.keyCode === 97
      || e.keyIdentifier === 'U+0031'
      || e.which === 49) {
      return 1;
    } else {
      return undefined;
    }
  }

  private static _two (e): number {
    if (e.code === 'Digit2'
      || e.code === 'Numpad2'
      || e.key === 2
      || e.keyCode === 50
      || e.keyCode === 98
      || e.keyIdentifier === 'U+0032'
      || e.which === 50) {
      return 2;
    } else {
      return undefined;
    }
  }

  private static _three (e): number {
    if (e.code === 'Digit3'
      || e.code === 'Numpad3'
      || e.key === 3
      || e.keyCode === 51
      || e.keyCode === 99
      || e.keyIdentifier === 'U+0033'
      || e.which === 51) {
      return 3;
    } else {
      return undefined;
    }
  }

  private static _four (e): number {
    if (e.code === 'Digit4'
      || e.code === 'Numpad4'
      || e.key === 4
      || e.keyCode === 52
      || e.keyCode === 100
      || e.keyIdentifier === 'U+0034'
      || e.which === 52) {
      return 4;
    } else {
      return undefined;
    }
  }
  private static _five (e): number {
    if (e.code === 'Digit5'
      || e.code === 'Numpad5'
      || e.key === 5
      || e.keyCode === 53
      || e.keyCode === 101
      || e.keyIdentifier === 'U+0035'
      || e.which === 53) {
      return 5;
    } else {
      return undefined;
    }
  }

  private static _six (e): number {
    if (e.code === 'Digit6'
      || e.code === 'Numpad6'
      || e.key === 6
      || e.keyCode === 54
      || e.keyCode === 102
      || e.keyIdentifier === 'U+0036'
      || e.which === 54) {
      return 6;
    } else {
      return undefined;
    }
  }

  private static _seven (e): number {
    if (e.code === 'Digit7'
      || e.code === 'Numpad7'
      || e.key === 7
      || e.keyCode === 55
      || e.keyCode === 103
      || e.keyIdentifier === 'U+0037'
      || e.which === 55) {
      return 7;
    } else {
      return undefined;
    }
  }

  private static _eight (e): number {
    if (e.code === 'Digit8'
      || e.code === 'Numpad8'
      || e.key === 8
      || e.keyCode === 56
      || e.keyCode === 104
      || e.keyIdentifier === 'U+0038'
      || e.which === 56) {
      return 8;
    } else {
      return undefined;
    }
  }

  private static _nine (e): number {
    if (e.code === 'Digit9'
      || e.code === 'Numpad9'
      || e.key === 9
      || e.keyCode === 57
      || e.keyCode === 105
      || e.keyIdentifier === 'U+0039'
      || e.which === 57) {
      return 9;
    } else {
      return undefined;
    }
  }

  private static _isExpectedNumber (expected, event)
    : boolean {
    return expected === KeyHelper.getNumberFromKey(event);
  }

}

export enum KEYS {
  'ENTER' = 'enter',
  'UP' = 'up',
  'DOWN' = 'down',
  'LEFT' = 'left',
  'RIGHT' = 'right',
  'TAB' = 'tab',
  'ESC' = 'esc',
  'SPACE' = 'space',
  'SHIFT' = 'shift',
  'BACKSPACE' = 'backspace',
  'ONE' = '1',
  'TWO' = '2',
  'THREE' = '3',
  'FOUR' = '4',
  'FIVE' = '5',
  'SIX' = '6',
  'SEVEN' = '7',
  'EIGHT' = '8',
  'NINE' = '9',
  'ZERO' = '0',
  'DELETE' = 'delete'
}

