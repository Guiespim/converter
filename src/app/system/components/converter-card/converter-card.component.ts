import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConvertService } from 'src/app/services/convert.service';
import { coins } from '../../enviroments/coins';

@Component({
  selector: 'app-converter-card',
  templateUrl: './converter-card.component.html',
  styleUrls: ['./converter-card.component.scss']
})
export class ConverterCardComponent implements OnInit {

  /* VARS */

  public readonly coins: Array<any> = coins

  public convert: any

  public result: number = 0

  public resultCoin: string = ""

  public currentCoin: string = ""

  public form: FormGroup = new FormGroup({
    "currentCoin": new FormControl("USD", [Validators.required]),
    "currentCoinValue": new FormControl(null, [Validators.required]),
    "resultCoin": new FormControl("BRL", [Validators.required]),
    "resultCoinValue": new FormControl("", [Validators.required])
  })

  public loader: boolean = false


  /* CONTRUCTOR */

  constructor(
    private readonly convertService: ConvertService
  ) { }


  /* ON INIT */

  ngOnInit(): void {
    this.getObject(this.form.value.currentCoin)
  }


  /* CONVERT COIN */

  public getObject(value: any): void {
    this.loader = true
    this.convertService.getConvertValues(value).subscribe((res: any) => {
      this.currentCoin = value
      this.resultCoin = this.form.get("resultCoin")?.value
      this.convert = res
      this.convertResult()
      this.loader = false
    })
  }


  /* CONVERT RESULT */

  public convertResult(): void {
    this.loader = true
    if (this.resultCoin) {
      const currentCoin: number = Number(this.form.get("currentCoinValue")?.value)
      const value: number = currentCoin * Number(this.convert.rates[this.resultCoin])
      this.form.get("resultCoinValue")?.setValue(value)
      this.loader = false
    }
  }

}
