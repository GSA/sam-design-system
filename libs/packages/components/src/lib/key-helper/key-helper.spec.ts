import { KeyHelper, KEYS } from './key-helper';
import { mocks } from './key-mocks';

/**
 * is(`validKeyParam`): bool
 */
const validKeyParams = [
  'enter',
  'up',
  'down',
  'left',
  'right',
  'tab',
  'esc',
  'space',
  'shift',
  'backspace',
  'delete',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

const keyEventProps = ['code', 'key', 'which', 'charCode', 'keyCode', 'keyIdentifier'];

function testKey(key: string) {
  return function runTest(property: string, value: string | number, altKeyName?: string) {
    const expected = true;

    let event = prepMock(property, value);
    const actual = KeyHelper.is(altKeyName || key, event);

    expect(expected).toBe(actual);
  };
}

function prepMock(property: string, value: number | string) {
  return keyEventProps.reduce((prev, curr) => {
    if (curr !== property) {
      prev[curr] = undefined;
    } else {
      prev[curr] = value;
    }
    return prev;
  }, {});
}

function createTests(key: string) {
  let test = testKey(key);
  let value = mocks.default[key];
  let description = 'Test ' + key + ' key';

  describe(description, () => {
    keyEventProps.forEach((prop) => {
      const description = 'should check ' + prop;
      if (prop === 'charCode') {
        // charCode only valid on Enter for this set of Keys
        if (value.charCode !== 0) {
          it(description, () => {
            test('charCode', value.charCode);
          });
        }
      } else if (prop === 'keyIdentifier') {
        // Only used by Safari, checked below
        return;
      } else {
        it(description, () => {
          test(prop, value[prop]);
        });
      }
    });

    testSafari(key);
    testMicrosoft(key);
  });
}

function testSafari(key: string) {
  it('should work in Safari', () => {
    let test = testKey(key);
    test('keyIdentifier', mocks.safari[key].keyIdentifier);
  });
}

function testMicrosoft(key: string) {
  let test = testKey(key);
  it('should work in IE', () => {
    test('key', mocks.ie[key].key);
  });
  it('should work in Edge', () => {
    test('key', mocks.edge[key].key);
  });
}

describe('Sam KeyEvent Class', () => {
  validKeyParams.forEach((key) => createTests(key));

  describe('Alt key', () => {
    it('should recognize Alt across event properties', () => {
      expect(KeyHelper.is('alt', { code: 'Alt' })).toBe(true);
      expect(KeyHelper.is('alt', { key: 'Alt' })).toBe(true);
      expect(KeyHelper.is('alt', { keyIdentifier: 'Alt' })).toBe(true);
      expect(KeyHelper.is('alt', { which: 18 })).toBe(true);
      expect(KeyHelper.is('alt', { charCode: 18 })).toBe(true);
      expect(KeyHelper.is('alt', { keyCode: 18 })).toBe(true);
      expect(KeyHelper.is('alt', { key: 'Control' })).toBe(false);
    });
  });

  it('should return false if key does not match', () => {
    const expected = false;

    const down = mocks.default.down.key;
    const actual = KeyHelper.is('up', down);

    expect(expected).toBe(actual);
  });

  it('should return false for unknown key names', () => {
    expect(KeyHelper.is('unknownKey', { key: 'Enter' })).toBe(false);
    expect(KeyHelper.is('escape', { key: 'Escape' })).toBe(false);
  });

  it('should be case-insensitive for key names', () => {
    expect(KeyHelper.is('ENTER', { key: 'Enter' })).toBe(true);
    expect(KeyHelper.is('Tab', { key: 'Tab' })).toBe(true);
  });

  describe('negative match branches for each key helper', () => {
    const dummyEvent = { code: 'KeyX', key: 'x', which: 88, keyCode: 88 };

    it('should return false when event does not match', () => {
      expect(KeyHelper.is('enter', dummyEvent)).toBe(false);
      expect(KeyHelper.is('alt', dummyEvent)).toBe(false);
      expect(KeyHelper.is('up', dummyEvent)).toBe(false);
      expect(KeyHelper.is('down', dummyEvent)).toBe(false);
      expect(KeyHelper.is('left', dummyEvent)).toBe(false);
      expect(KeyHelper.is('right', dummyEvent)).toBe(false);
      expect(KeyHelper.is('tab', dummyEvent)).toBe(false);
      expect(KeyHelper.is('esc', dummyEvent)).toBe(false);
      expect(KeyHelper.is('space', dummyEvent)).toBe(false);
      expect(KeyHelper.is('shift', dummyEvent)).toBe(false);
      expect(KeyHelper.is('backspace', dummyEvent)).toBe(false);
      expect(KeyHelper.is('delete', dummyEvent)).toBe(false);
      expect(KeyHelper.is('0', dummyEvent)).toBe(false);
      expect(KeyHelper.is('1', dummyEvent)).toBe(false);
      expect(KeyHelper.is('2', dummyEvent)).toBe(false);
      expect(KeyHelper.is('3', dummyEvent)).toBe(false);
      expect(KeyHelper.is('4', dummyEvent)).toBe(false);
      expect(KeyHelper.is('5', dummyEvent)).toBe(false);
      expect(KeyHelper.is('6', dummyEvent)).toBe(false);
      expect(KeyHelper.is('7', dummyEvent)).toBe(false);
      expect(KeyHelper.is('8', dummyEvent)).toBe(false);
      expect(KeyHelper.is('9', dummyEvent)).toBe(false);
    });
  });

  describe('KeyHelper getNumberFromKey method', () => {
    it('should return undefined for non-numeric keys', () => {
      expect(KeyHelper.getNumberFromKey({ key: 'a' })).toBeUndefined();
      expect(KeyHelper.getNumberFromKey({})).toBeUndefined();
    });

    it('should extract digits 0-9 across different key representations', () => {
      const digitTests = [
        {
          expected: 0,
          code: 'Digit0',
          numpad: 'Numpad0',
          key: 0,
          keyCode: 48,
          numpadCode: 96,
          which: 48,
          id: 'U+0030',
        },
        {
          expected: 1,
          code: 'Digit1',
          numpad: 'Numpad1',
          key: 1,
          keyCode: 49,
          numpadCode: 97,
          which: 49,
          id: 'U+0031',
        },
        {
          expected: 2,
          code: 'Digit2',
          numpad: 'Numpad2',
          key: 2,
          keyCode: 50,
          numpadCode: 98,
          which: 50,
          id: 'U+0032',
        },
        {
          expected: 3,
          code: 'Digit3',
          numpad: 'Numpad3',
          key: 3,
          keyCode: 51,
          numpadCode: 99,
          which: 51,
          id: 'U+0033',
        },
        {
          expected: 4,
          code: 'Digit4',
          numpad: 'Numpad4',
          key: 4,
          keyCode: 52,
          numpadCode: 100,
          which: 52,
          id: 'U+0034',
        },
        {
          expected: 5,
          code: 'Digit5',
          numpad: 'Numpad5',
          key: 5,
          keyCode: 53,
          numpadCode: 101,
          which: 53,
          id: 'U+0035',
        },
        {
          expected: 6,
          code: 'Digit6',
          numpad: 'Numpad6',
          key: 6,
          keyCode: 54,
          numpadCode: 102,
          which: 54,
          id: 'U+0036',
        },
        {
          expected: 7,
          code: 'Digit7',
          numpad: 'Numpad7',
          key: 7,
          keyCode: 55,
          numpadCode: 103,
          which: 55,
          id: 'U+0037',
        },
        {
          expected: 8,
          code: 'Digit8',
          numpad: 'Numpad8',
          key: 8,
          keyCode: 56,
          numpadCode: 104,
          which: 56,
          id: 'U+0038',
        },
        {
          expected: 9,
          code: 'Digit9',
          numpad: 'Numpad9',
          key: 9,
          keyCode: 57,
          numpadCode: 105,
          which: 57,
          id: 'U+0039',
        },
      ];

      digitTests.forEach((t) => {
        expect(KeyHelper.getNumberFromKey({ code: t.code })).toBe(t.expected);
        expect(KeyHelper.getNumberFromKey({ code: t.numpad })).toBe(t.expected);
        expect(KeyHelper.getNumberFromKey({ key: t.key })).toBe(t.expected);
        expect(KeyHelper.getNumberFromKey({ keyCode: t.keyCode })).toBe(t.expected);
        expect(KeyHelper.getNumberFromKey({ keyCode: t.numpadCode })).toBe(t.expected);
        expect(KeyHelper.getNumberFromKey({ which: t.which })).toBe(t.expected);
        expect(KeyHelper.getNumberFromKey({ keyIdentifier: t.id })).toBe(t.expected);
      });
    });
  });

  describe('KeyHelper getKeyCode method', () => {
    const mock = {
      code: undefined,
      key: undefined,
      keyIdentifier: undefined,
    };

    it('should return key if present', () => {
      const expected = (mock.key = 'asdf');
      // Dummy data for testing
      mock.code = 'jkl;';
      mock.keyIdentifier = 'jkl;';

      const actual = KeyHelper.getKeyCode(mock);

      expect(expected).toEqual(actual);
    });

    it('should return code when key not present', () => {
      const expected = (mock.code = 'asdf');
      // Dummy data for testing
      mock.keyIdentifier = 'jkl;';

      const actual = KeyHelper.getKeyCode(mock);

      expect(expected).toEqual(actual);
    });

    it('should return keyIdentifier if present and key and code are missing', () => {
      const expected = (mock.keyIdentifier = 'asdf');
      const actual = KeyHelper.getKeyCode(mock);

      expect(expected).toEqual(actual);
    });

    it('should return undefined if event is undefined', () => {
      const expected = undefined;
      const actual = KeyHelper.getKeyCode(undefined);
      expect(expected).toEqual(actual);
    });

    it('should return undefined if event is any other type', () => {
      const expected = undefined;
      const actual = KeyHelper.getKeyCode('haha');

      expect(expected).toEqual(actual);
    });
  });

  describe('Instance methods', () => {
    it('Should instantiate with supported keys', () => {
      const keys = [
        'alt',
        'enter',
        'up',
        'down',
        'left',
        'right',
        'tab',
        'esc',
        'space',
        'shift',
        'backspace',
        'delete',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
      ];
      const make = () => new KeyHelper(...keys);
      expect(make).not.toThrow();
    });

    it('should throw if unsupported key is passed and report allowed keys', () => {
      expect(() => new KeyHelper('a')).toThrowError(/Only supports/);
      expect(() => new KeyHelper('enter', 'invalid')).toThrowError(/Only supports enter/);
    });

    it('should recognize legacy and variant key names', () => {
      expect(KeyHelper.is('up', { key: 'Up' })).toBe(true);
      expect(KeyHelper.is('down', { key: 'Down' })).toBe(true);
      expect(KeyHelper.is('left', { key: 'Left' })).toBe(true);
      expect(KeyHelper.is('right', { key: 'Right' })).toBe(true);
      expect(KeyHelper.is('space', { key: 'Spacebar' })).toBe(true);
      expect(KeyHelper.is('esc', { key: 'Esc' })).toBe(true);
      expect(KeyHelper.is('shift', { code: 'ShiftRight' })).toBe(true);
    });

    it('should evaluate isAllowed correctly', () => {
      const helper = new KeyHelper('enter', 'esc');
      expect(helper.isAllowed({ key: 'Enter' })).toBe(true);
      expect(helper.isAllowed({ key: 'Escape' })).toBe(true);
      expect(helper.isAllowed({ key: 'ArrowUp' })).toBe(false);
      expect(helper.isAllowed({ key: ' ' })).toBe(false);
    });
  });

  describe('KEYS enum', () => {
    it('should define expected key names', () => {
      expect(KEYS.ENTER).toBe('enter');
      expect(KEYS.ALT).toBe('alt');
      expect(KEYS.UP).toBe('up');
      expect(KEYS.DOWN).toBe('down');
      expect(KEYS.LEFT).toBe('left');
      expect(KEYS.RIGHT).toBe('right');
      expect(KEYS.TAB).toBe('tab');
      expect(KEYS.ESC).toBe('esc');
      expect(KEYS.SPACE).toBe('space');
      expect(KEYS.SHIFT).toBe('shift');
      expect(KEYS.BACKSPACE).toBe('backspace');
      expect(KEYS.DELETE).toBe('delete');
      expect(KEYS.ZERO).toBe('0');
      expect(KEYS.ONE).toBe('1');
      expect(KEYS.TWO).toBe('2');
      expect(KEYS.THREE).toBe('3');
      expect(KEYS.FOUR).toBe('4');
      expect(KEYS.FIVE).toBe('5');
      expect(KEYS.SIX).toBe('6');
      expect(KEYS.SEVEN).toBe('7');
      expect(KEYS.EIGHT).toBe('8');
      expect(KEYS.NINE).toBe('9');
    });
  });
});
