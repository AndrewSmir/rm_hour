type TFunc = (el: number) => number;
type TButtonDefaultProps = {
  title: string;
  id: string;
};
type TComposeResult = (arg: number) => number;
type TCompose = (...arg: TFunc[]) => TComposeResult;
type TClear = () => void;

class ComposeRunner {
  funcArr: [] | TFunc[];
  inputArg: null | number;
  operationalButtons: (TButtonDefaultProps & { func: TFunc })[];
  runButtons: (TButtonDefaultProps & { func: TCompose })[];
  clearButtons: (TButtonDefaultProps & { func: TClear })[];
  result: number | null;

  constructor() {
    this.operationalButtons = [
      { title: "inc", id: "1ButOp", func: this.inc },
      { title: "dec", id: "2ButOp", func: this.dec },
      { title: "add 100", id: "3ButOp", func: this.add100 },
    ];
    this.runButtons = [{ title: "Run", id: "1ButRun", func: this.compose }];
    this.clearButtons = [{ title: "Clear", id: "1ButClear", func: this.clear }];
    this.funcArr = [];
    this.inputArg = null;
  }

  inc: TFunc = (num) => num + 1;

  dec: TFunc = (num) => num - 1;

  add100: TFunc = (num) => num + 100;

  compose: TCompose = (...functions) => (arg) =>
    functions.reduceRight((acc, fn) => fn(acc), arg);

  clear: TClear = () => {
    this.inputArg = null;
    this.funcArr = [];
    this.result = null;
    const inputDom = document.getElementById("argInput") as HTMLInputElement;
    inputDom.value = null;
    const resultField = document.getElementById("resultField");
    resultField.innerHTML = "";
  };

  pushToArray = (func: TFunc): TFunc[] =>
    (this.funcArr = [...this.funcArr, func]);

  createContainer = (): void => {
    const composeContainer = `<div id="composeContainer" class="container"></div>`;
    document.body.insertAdjacentHTML("beforeend", composeContainer);
  };
  createResultField = (): void => {
    const resultField = `<div id="resultField" class="result"></div>`;
    const targetElement = document.getElementById("composeContainer");
    targetElement.insertAdjacentHTML("beforeend", resultField);
  };
  createRunButtons = (): void => {
    const targetElement = document.getElementById("composeContainer");
    this.runButtons.forEach((el) => {
      const button = `<button id=${el.id}>${el.title}</button>`;
      targetElement.insertAdjacentHTML("beforeend", button);
      document.getElementById(`${el.id}`).onclick = () => {
        this.result = this.compose(...this.funcArr)(this.inputArg);
        const resultField = document.getElementById("resultField");
        const resultElement = `<p>Compose result is: ${this.result}</p>`;
        resultField.insertAdjacentHTML("beforeend", resultElement);
      };
    });
  };

  createOperationalButtons = (): void => {
    const targetElement = document.getElementById("composeContainer");
    this.operationalButtons.forEach((el) => {
      const button = `<button id=${el.id}>${el.title}</button>`;
      targetElement.insertAdjacentHTML("beforeend", button);
      document.getElementById(`${el.id}`).onclick = () =>
        this.pushToArray(el.func);
    });
  };

  createClearButtons = (): void => {
    const targetElement = document.getElementById("composeContainer");
    this.clearButtons.forEach((el) => {
      const button = `<button id=${el.id}>${el.title}</button>`;
      targetElement.insertAdjacentHTML("beforeend", button);
      document.getElementById(`${el.id}`).onclick = () => this.clear();
    });
  };

  createInput = (): void => {
    const targetElement = document.getElementById("composeContainer");
    const input = `<input type="number" id="argInput"/>`;
    targetElement.insertAdjacentHTML("beforeend", input);
    const inputDom = document.getElementById("argInput") as HTMLInputElement;
    inputDom.onchange = () => (this.inputArg = Number(inputDom.value));
  };

  run = (): void => {
    this.createContainer();
    this.createOperationalButtons();
    this.createInput();
    this.createRunButtons();
    this.createClearButtons();
    this.createResultField();
  };
}

export const composeRunner = new ComposeRunner();
