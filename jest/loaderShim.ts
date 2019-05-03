/* eslint-disable @typescript-eslint/no-namespace, no-underscore-dangle */

declare namespace NodeJS {
  export interface Global {
    ___loader: object
  }
}

global.___loader = {
  enqueue: jest.fn(),
}
