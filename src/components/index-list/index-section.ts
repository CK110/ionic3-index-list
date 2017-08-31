import {AfterViewChecked, Component, ContentChildren, ElementRef, Input, QueryList} from '@angular/core';
import {IndexCellComponent} from './index-cell';

@Component({
    selector: 'ion-index-section',
    template: `
      <div class="index-section">
            <!-- group-->
            <div class="index-section-index">

              {{index}}

            </div>

            <!--分组下的详细内容-->
            <div class="index-section-main">
              <ng-content>

              </ng-content>
            </div>
        </div>
    `,
  styles: [`
    .index-section-index{
      margin: 0;
      padding: 10px;
      background-color: #fafafa;
    }

    .index-section-main{
      border-bottom: 1px solid #dcd8d8;
      border-top: 1px solid #dcd8d8;
    }
  `]
})
export class IndexSectionComponent implements AfterViewChecked {


  @Input() index: string;

  @ContentChildren(IndexCellComponent) _listOfIndexCell: QueryList<IndexCellComponent>;

  constructor(public elementRef: ElementRef) { }

  getElementRef():ElementRef{
    return this.elementRef;
  }

  ngAfterViewChecked(): void {
      if (this._listOfIndexCell && this._listOfIndexCell.length) {
        const listArray = this._listOfIndexCell.toArray();
        listArray[ listArray.length - 1 ]._lastItem = true;
      }
  }

}
