declare namespace toastui {
  class Editor {
    constructor(option: any);
    getMarkdown: () => string;
    removeHook: (type: string) => void;
    addHook: (type: string, handler: Function) => void;
    getHTMl: () => string;
    setHeight: (height: string) => void;
    on: (event: string, callback: Function) => void;
    focus: () => void;
  }
}

// declare class wangEditor {
//   constructor(el: string) {}
//   create: () => void;
// }
