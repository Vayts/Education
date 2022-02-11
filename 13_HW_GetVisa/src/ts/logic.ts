import
{
  clearAllInputs,
  createListItem,
  getInputValue,
  removeChild,
  removeDisabled,
  setDisabled,
  setInputValue, setTextValue
} from "./utils";
import {candidate} from "./types";
import {Circle} from "./canvas";


export function generateName(arr: string[]): string {
  const randomNumber = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
  setInputValue('input-name', arr[randomNumber]);
  return arr[randomNumber];
}

export function generateBalance(arr: string[]): string {
  const randomNumber = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
  setInputValue('input-balance', arr[randomNumber]);
  return arr[randomNumber];
}

export function generateAge(arr: string[]): string {
  const randomNumber = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
  setInputValue('input-age', arr[randomNumber]);
  return arr[randomNumber];
}

export function generateDocument(arr: string[]): string {
  const randomNumber = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
  setInputValue('input-document', arr[randomNumber]);
  return arr[randomNumber];
}

export function generateEnglishLevel(arr: string[]): string {
  const randomNumber = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
  setInputValue('input-english', arr[randomNumber]);
  return arr[randomNumber];
}

export function generateAll(state): candidate {
  const candidate: candidate = {age: "", balance: "", document: "", lang: "", name: ""};
  candidate.name = generateName(state.name);
  candidate.balance = generateBalance(state.money);
  candidate.age = generateAge(state.age);
  candidate.document = generateDocument(state.document);
  candidate.lang = generateEnglishLevel(state.lang);
  return candidate;
}

export function addCandidate(state): boolean | candidate {
  const candidateObj: candidate = {
    name: getInputValue('input-name'),
    balance: getInputValue('input-balance'),
    age: getInputValue('input-age'),
    document: getInputValue('input-document'),
    lang: getInputValue('input-english')
  };

  if (validateInput(candidateObj)) {
    if (state.length < 5) {
      createListItem('list', candidateObj);
      clearAllInputs();
      state.push(candidateObj);
      return candidateObj;
    }

  }

  return false;
}

export function validateInput(obj): boolean {
  const reg = /^[a-z ,.'-]+$/i;

  if (obj.name === undefined || obj.name.length > 30 || !obj.name.match(reg)) {
    return false;
  }

  if (Number(obj.balance) < 0 || obj.balance === undefined) {
    return false;
  }

  if (Number(obj.age) < 0 || Number(obj.age) > 140) {
    return false;
  }


  let isDocumentRight: boolean = true;
  obj.document.split(', ').forEach(el => {
    if (!['passport', 'insurance', 'photo'].includes(el)) {
      isDocumentRight = false;
    }
  })

  if (!isDocumentRight) {
    return false;
  }

  if (obj.lang.length !== 2 || !['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(obj.lang)) {
    return false;
  }

  return true;
}

export function clearAll(arr, ctx, canvas): [] {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arr.length = 0;
  removeChild('list');
  setTextValue('result', 'Visa center will close soon!!!')

  return arr
}

export function clearCanvas(ctx, canvas): boolean {
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return true;
  }
  return false;
}

// сейчас будет очень страшная функция

export function startRace(arr: candidate[], ctx, canvas) {
  setDisabled('button-race')

  const promiseArr: Promise<any>[] = [];

  for (let i = 0; i < arr.length; i++) {

    const candidatePromises = getPromise(i, arr, 5, 10, balanceCheck, arr[i].balance, 'Bal', 1, ctx, canvas)
      .then(() => {

        const agePromise = getPromise(i, arr, 1, 3, ageCheck, arr[i].age, 'Age', 2, ctx, canvas);
        const documentPromise = getPromise(i, arr, 10, 20, documentCheck, arr[i].document, 'Doc', 3, ctx, canvas);
        const langPromise = getPromise(i, arr, 5, 10, langCheck, arr[i].lang, 'Eng', 4, ctx, canvas);

        return Promise.all([agePromise, documentPromise, langPromise])
      })
      .then(() => {
        return i
      })

    promiseArr.push(candidatePromises)

  }

  return race(promiseArr, arr)

}

export function race(promiseArr: Promise<any>[], arr: candidate[]) {
  const errorPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(404)
    }, 43000)
  })

  Promise.race(promiseArr.concat(errorPromise)).then((value) => {

    if (value !== 404) {
      setTextValue('result', `${arr[value].name} got his VISA!`)
      removeDisabled('button-init')
      removeDisabled('button-add-candidate')
      removeDisabled('button-clear')
      return value
    } else {
      setTextValue('result', 'Everyone failed.')
      removeDisabled('button-add-candidate')
      removeDisabled('button-init')
      removeDisabled('button-clear')
      return false
    }

  })
}

export function langCheck(lang): boolean {
  if (['B2', 'C1', 'C2'].includes(lang)) {
    return true;
  }
  return false;
}

export function documentCheck(arr): boolean {
  const docArr: string[] = arr.split(', ')

  if (docArr.length === 3) {
    return true;
  }
  return false;
}

export function ageCheck(age): boolean {
  if (age < 18 || age > 60) {
    return false;
  }
  return true;
}

export function balanceCheck(balance): boolean {
  if (balance < 2000) {
    return false;
  }
  return true;
}

export function randomTime(min, max): number {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000
}

export function getPromise(pos: number, arr: candidate[], minTime: number, maxTime: number, cb: Function, checkValue: string, textValue: string, circleCounter: number, ctx, canvas: HTMLCanvasElement): Promise<void> {
  return new Promise<void>(resolve => {
    const visual = new Circle(pos, arr.length, circleCounter, textValue, ctx, canvas)
    visual.draw()

    setTimeout(() => {

      if (cb(checkValue)) {

        visual.success()
        resolve();

      } else {
        visual.failure()
      }

    }, randomTime(minTime, maxTime))

  })
}
