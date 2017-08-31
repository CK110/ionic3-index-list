# ionic3-index-list

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

<img src="https://ws2.sinaimg.cn/large/006tNc79ly1fj32qo04fug30i40w24qp.gif" width = "400" height="400" align=center />


