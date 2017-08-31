import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ion-index-cell',
    template: `
      <div class="index-cell">
        <div class="index-cell-item" [class.index-cell-item-last]="_lastItem">
          <ng-content></ng-content>
        </div>
      </div>
    `,
    styles: [`
      .index-cell{
        background-color: #fff;
        padding-left:10px
      }

      .index-cell-item{
        box-sizing: border-box;
        color: inherit;
        min-height: 48px;
        display: block;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        border-bottom: 1px solid #dcd8d8;
        width: 100%;
        display: flex;
        align-items: center;
      }

      .index-cell-item-last{
        border-bottom: none;
      }
    `]
})
export class IndexCellComponent implements OnInit {

  _lastItem = false;

  constructor() { }

  ngOnInit() { }

}
