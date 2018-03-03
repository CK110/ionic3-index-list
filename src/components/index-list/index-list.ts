import {
  AfterViewChecked, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList,
  ViewChild
} from '@angular/core';
import {IndexSectionComponent} from './index-section';

@Component({
  selector: 'ion-index-list',
  template: `
    <div class="index-list">
      <div class="index-list-wrapper"  #scrollContent tappable (scroll)="onScroll($event)">
        <ng-content select="[top]"></ng-content>
        <ng-content></ng-content>
      </div>

      <div class="index-list-nav" (touchstart)="touchstart($event)" (touchmove)="touchmove($event)" (touchend)="touchend($event)">
        <div class="index-bar" *ngFor="let index of _indexes;"
             [class.index-list-nav-activate]="index === _currentIndicator">
          {{index}}
        </div>
      </div>
      
      <div class="modal" [class.show]="_showModal">
        {{_currentIndicator}}
      </div>
    </div>
  `,
  styles: [`
    ::-webkit-scrollbar {
      width: 0
    }

    .index-list{
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 100%;
      overflow: hidden;
      transform:translate(0,0);
    }

    .index-list-wrapper{
      width: 100%;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .index-list-nav{
      width:6%;
      position: absolute;
      top: 44px;
      right: 0;
      display: flex;
      justify-content:center;
      flex-direction: column;
      text-align: center;
      background-color: rgba(245, 245, 245, 0.3);
      height: 100%;
      z-index: 1000;
      -webkit-touch-callout: none;
    }

    .index-bar{
      padding: 2px 6px;
      font-size: 8px;
    }

    .index-list-nav-activate{
      color: red;
    }

    .modal {
      top: 50%;
      left: 50%;
      z-index: 100;
      position: fixed;
      pointer-events: none;
      width: 20vw;
      height: 20vw;
      line-height: 20vw;
      margin-left: -10vw;
      margin-top: -10vw;
      color: #fff;
      font-size: 3em;
      text-align: center;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.52);
      -webkit-box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);
      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);
      -webkit-transition: opacity .5s;
      -o-transition: opacity .5s;
      transition: opacity .5s;
      opacity: 0;
    }

    .modal.show {
      opacity: 1;
    }
  `]
})
export class IndexListComponent implements AfterViewChecked{


  _currentIndicator ;

  _flag= true;
  _indexes: any[]= []; //右侧导航
  _offsetTops: Array<number> = []; // 每个IndexSection 的offsetTop
  _navOffsetX: 0;
  _indicatorTime: any = null;
  _showModal = false;


  @Input() hasTop:boolean = false;

  @ViewChild('top') top: ElementRef;
  @ContentChildren(IndexSectionComponent) _listOfIndexSection: QueryList<IndexSectionComponent>;
  @ViewChild('scrollContent') scrollContent: ElementRef;

  constructor(){

  }

  ngAfterViewChecked(): void {
    if (this._flag && this._listOfIndexSection){
      this._listOfIndexSection.forEach((section) => {
        this._indexes.push(section.index);
        const offsetTop = section.getElementRef().nativeElement.offsetTop;
        this._offsetTops.push(offsetTop);

      });
      this._flag = false;

      if(this.hasTop) {
        this._indexes.unshift('#');
        this._offsetTops.unshift(0);

      }
    }
  }

  onScroll(e:any) {
    e.preventDefault();
    const scrollTopOffsetTop = this.scrollContent.nativeElement.scrollTop;

    this._offsetTops.forEach((v, i) => {
      if (scrollTopOffsetTop >= v){
        this._currentIndicator = this._indexes[i];

        //
        this.setCurrentSection(this._currentIndicator);
      }

    });
  }

  touchstart(e:any){
    this._navOffsetX = e.changedTouches[0].clientX;
    this.scrollList(e.changedTouches[0].clientY);
  }

  touchmove(e:any){
    e.preventDefault();
    this.scrollList(e.changedTouches[0].clientY);
  }

  touchend(e:any){
    this._indicatorTime = setTimeout(() => {
      this._showModal = false;
      this._currentIndicator = '';
    }, 500);
  }

  scrollList(y:any){

    const currentItem:any = document.elementFromPoint(this._navOffsetX, y);
    if (!currentItem || !currentItem.classList.contains('index-bar')) {
      return;
    }
    this._currentIndicator = currentItem['innerText'];
    const index = this._indexes.indexOf(this._currentIndicator);

    this.scrollContent.nativeElement.scrollTop = this._offsetTops[index];


    this._showModal = true;
    if (this._indicatorTime) {
      clearTimeout(this._indicatorTime);
    }
  }


  setCurrentSection(currentindex:string) {
    setTimeout(_ => {
      const listArray = this._listOfIndexSection.toArray();
      listArray.forEach((section)=>{
        if(section.index === currentindex ){
          section._current = true;
        }else{
          section._current = false;
        }
      })
    })
  }

}
