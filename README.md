# ionic3-index-list
index-list 在联系人页面中很常用

之前试过[ionic2-indexed-scroll](https://github.com/HsuanXyz/ionic2-indexed-scroll),比较[ionic2-alpha-scroll](https://github.com/rossmartin/ionic2-alpha-scroll),可能更angular一些，
但是并不是组件，而且在ios上有些bug，所以就写了该组件，该组件借鉴了一些上面所述组件的代码。

不依赖于ionic3组件，可以自定义` <ion-index-cell></ion-index-cell>`显示的内容

## Installation

`npm i ionic3-index-list --save`

## Usage

### Import In AppModule

```typescript
import {IndexListModule} from "ionic3-index-list";

@NgModule({
  declarations: [

  ],
  imports: [
    IndexListModule
  ]
})

```

### Use In Templete

```
  <ion-index-list>
    <ion-index-section [index]="'A'">
      <ion-index-cell>
        222
      </ion-index-cell>
      <ion-index-cell>
        222
      </ion-index-cell>
      <ion-index-cell>
        222
      </ion-index-cell>
      <ion-index-cell>
        222
      </ion-index-cell>
    </ion-index-section>

    <ion-index-section [index]="'B'">
      <ion-index-cell>
        222
      </ion-index-cell>
      <ion-index-cell>
        222
      </ion-index-cell>
      <ion-index-cell>
        222
      </ion-index-cell>
      <ion-index-cell>
        222
      </ion-index-cell>
    </ion-index-section>
  </ion-index-list>
```

<img src="https://ws2.sinaimg.cn/large/006tNc79ly1fj32qo04fug30i40w24qp.gif" width = "450" align=center />


