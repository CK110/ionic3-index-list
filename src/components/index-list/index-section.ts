import {
  AfterViewChecked, Component, ContentChildren, ElementRef, Input,
  QueryList
} from '@angular/core';
import {IndexCellComponent} from './index-cell';

@Component({
    selector: 'ion-index-section',
    template: `
      <div class="index-section" [class.index-section-current]="_current">
            <!-- group-->
            <div class="index-section-index" >
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
      padding: 2px 10px 2px 10px;
      background-color: #fafafa;
      border-bottom: 1px solid #dedede;
    }

    .index-section-main{
      border-bottom: 1px solid #dedede;
    }

    .index-section-current .index-section-index{
        position: sticky;
        position: -webkit-sticky;
        top: 0px;
        left: 0px;
        width: 100%;
        z-index: 3;
        transform: translateZ(0px);
    }
  `]
})
export class IndexSectionComponent implements AfterViewChecked {

  _current=false;

  @Input() index: string;

  @ContentChildren(IndexCellComponent) _listOfIndexCell: QueryList<IndexCellComponent>;

  constructor(public elementRef: ElementRef) { }

  getElementRef():ElementRef{
    return this.elementRef;
  }

  ngAfterViewChecked(): void {
    setTimeout(()=>{
      if (this._listOfIndexCell && this._listOfIndexCell.length) {
        const listArray = this._listOfIndexCell.toArray();
        listArray[listArray.length - 1]._lastItem = true;
      }
    })
  }

}
