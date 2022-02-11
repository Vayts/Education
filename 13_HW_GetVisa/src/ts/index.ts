import '../scss/style.scss';

import {sampleObj} from "./types";
import {addListener, getContext, getElement} from './utils';
import {
  generateAge,
  generateBalance,
  generateDocument,
  generateName,
  generateEnglishLevel,
  generateAll,
  addCandidate,
  clearAll,
  startRace
} from './logic';
import { init } from './canvas';

document.addEventListener('DOMContentLoaded', function () {
  initApp()
})

function initApp(): void {

  const sampleState: sampleObj = {
    age: [14,65,17,21,45,54,33,26,42,40],
    document: ['passport, insurance, photo','passport, insurance, photo', 'passport, insurance, photo', 'passport, insurance, photo', 'passport, insurance'],
    lang: ['A1', 'A1', 'A1', 'A2','A2','B1','B2','C1','C2'],
    money: [1643, 654, 123, 1989, 2001, 2234, 5444, 7090, 3450, 5600],
    name: ['John Doe', 'Robert Norman', 'Ryan Brooks', 'Kevin Williams', 'Alexander Clark', 'Steven Jones', 'Rachel Brooks', 'Yvonne Young', 'Lucille Anderson', 'Jill Miller', 'Sharon Miller', 'Mark Daniels', 'Carl Reynolds', 'Eddie Hill', 'Carl Reynolds']
  }

  const canvas = getElement('canvas');
  const ctx = <CanvasRenderingContext2D>getContext('canvas');
  const candidates: [] = [];

  addListener('button-name', 'click', generateName.bind(null, sampleState.name));
  addListener('button-balance', 'click', generateBalance.bind(null, sampleState.money));
  addListener('button-age', 'click', generateAge.bind(null, sampleState.age));
  addListener('button-document', 'click', generateDocument.bind(null, sampleState.document));
  addListener('button-english', 'click', generateEnglishLevel.bind(null, sampleState.lang));
  addListener('button-generate-all', 'click', generateAll.bind(null, sampleState));
  addListener('button-add-candidate', 'click', addCandidate.bind(null, candidates));
  addListener('button-race', 'click', startRace.bind(null, candidates, ctx, canvas));
  addListener('button-init', 'click', init.bind(null, candidates, ctx,canvas));
  addListener('button-clear', 'click', clearAll.bind(null, candidates, ctx,canvas))
}
