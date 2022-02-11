import {getContext, getElement, removeDisabled, setDisabled} from "./utils";
import {candidate, circle} from "./types";
import {clearCanvas} from "./logic";


export function init(state: candidate[], ctx, canvas) {

  if (state.length < 1) {
    return false;
  }

  removeDisabled('button-race')
  clearCanvas(ctx, canvas)


  let x = 0;
  let digits = canvas.width / state.length;
  let index = 0;

  for (let i = 0; i < state.length; i++) {
    ctx.font = "12px Roboto";
    ctx.textAlign = 'center'
    ctx.fillText((state[index].name).toUpperCase(), x + digits / 2, 20)
    x += digits;
    index++
  }

  setDisabled('button-init');
  setDisabled('button-add-candidate');
  setDisabled('button-clear')
  return  true;
}

export class Circle implements circle{
  private readonly x: number;
  private readonly yPos: number;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private value: string;

  constructor(pos,length,yPos, value, ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;

    if (pos === 0) {
      this.x = this.canvas.width / length - (this.canvas.width / length) / 2
    } else {
      this.x = this.canvas.width / length + ((this.canvas.width / length) * pos) - (this.canvas.width / length) / 2
    }

    this.yPos = yPos * 75
    this.value = value;
  }

  draw(): string {

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.yPos, 25, 0, 2*Math.PI, false);
    this.ctx.fillStyle = 'rgba(115,163,189,0.34)';
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'rgba(115,163,189,0.34)';
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.font = "16px Roboto";
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#000000';
    this.ctx.fillText(this.value.toUpperCase(), this.x, this.yPos+5);
    return 'Start'
  }

  failure(): string {

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.yPos, 25, 0, 2*Math.PI, false);
    this.ctx.fillStyle = '#c96969';
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#c96969';
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.font = "16px Roboto";
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#000000';
    this.ctx.fillText(this.value.toUpperCase(), this.x, this.yPos+5);
    return 'Failure';
  }

  success(): string {

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.yPos, 25, 0, 2*Math.PI, false);
    this.ctx.fillStyle = '#adc776';
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#adc776';
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.font = "16px Roboto";
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#000000';
    this.ctx.fillText(this.value.toUpperCase(), this.x, this.yPos+5);
    return 'Success';
  }
}
