### grid
  网格布局，一种二维布局系统，将网页划分成一个个的网格进行布局。

##### 基本概念
  1. *容器*：采用网格布局的元素，称为容器（grid container） display: grid | inline-grid;
  2. *项目*：容器的顶层子元素，不包含项目的子元素;
  3. *行&列*：容器中的水平区域称为行（row），垂直区域称为列（column）;
  4. *单元格*：行和列的交叉区域，称为单元格（grid cell）;
  5. *网格线*：划分网格的线，水平网格线划分行，垂直网格线划分列；
  6. *网格区域*：由网格线包围形成的区域（grid area），一个网格区域可以由任意的单元格组成。

##### 容器属性
  ###### display: grid | inline-grid
  ---
  设置元素为网格布局，inline-grid为行内元素的网格布局。<br><br>

  ###### grid-template-columns/grid-template-rows
  ---
  将元素设置为网格布局之后，就需要对容器进行划分行和列。grid-template-columns设置列宽，grid-template-rows设置行高。<br>
  1. **length**可以是固定宽度，也可以是百分比等其他宽度单位。<br>
    <style>
      .grid-1 {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
      }
    </style>
<style scoped>
.grid-1 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}

.grid-item {
  box-sizing: content-box!important;
  line-height: 100px;
  text-align: center;
  border: 1px solid #ccc;
}
.grid-item:nth-child(1) {
  background: rgb(32, 115, 240)
}
.grid-item:nth-child(2) {
  background: rgb(32, 135, 220)
}
.grid-item:nth-child(3) {
  background: rgb(32, 155, 200)
}
.grid-item:nth-child(4) {
  background: rgb(32, 175, 180)
}
.grid-item:nth-child(5) {
  background: rgb(32, 195, 160)
}
.grid-item:nth-child(6) {
  background: rgb(32, 215, 140)
}
.grid-item:nth-child(7) {
  background: rgb(32, 235, 120)
}
.grid-item:nth-child(8) {
  background: rgb(32, 255, 100)
}
.grid-item:nth-child(9) {
  background: rgb(62, 175, 180)
}
.grid-item:nth-child(10) {
  background: rgb(82, 155, 180)
}
.grid-item:nth-child(11) {
  background: rgb(102, 135, 180)
}
.grid-item:nth-child(12) {
  background: rgb(122, 115, 180)
}
</style>
<div class="grid-1">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
<br>

  2. **auto**，自适应，即由浏览器决定宽度。<br>

    <style>
    .grid-2 {
      display: grid;
      grid-template-columns: 100px 100px auto;
      grid-template-rows:  100px 100px 100px;
    }
    </style>


  上面代码中，第三列的列宽为auto，即自适应容器剩余大小。
    
<style scoped>
.grid-2 {
  display: grid;
  grid-template-columns: 100px 100px auto;
  grid-template-rows:  100px 100px 100px;
}
</style>
<div class="grid-2">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
<br>

  3. **minmax(min, max)**，定义大小范围的函数，>= min && <= max<br>
    上面代码中，第三列的列宽返回在200px-400px范围内。
    <style>
    .grid-3 {
      display: grid;
      grid-template-columns: 100px 100px minmax(200px, 400px);
      grid-template-rows:  100px 100px 100px;
    }
    </style>

<style scoped>
.grid-3 {
  display: grid;
  grid-template-columns: 100px 100px minmax(200px, 400px);
  grid-template-rows:  100px 100px 100px;
}
</style>
<div class="grid-3">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

<br>

  4. **repeat(number | auto-fill | auto-fit, trick-list)**，重复值函数，接受两个参数，第一个参数是重复的次数，第二个参数是需要重复的值。<br>

    <style>
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(2, 100px 150px);
      grid-template-rows: repeat(3, 100px);
    }
    </style>

  上面代码中，通过repeat函数，创建了4列3行的网格布局，1、3列和2、4列的列宽分别100px和150px。

  
<style scoped>
.grid-4 {
  display: grid;
  grid-template-columns: repeat(2, 100px 150px);
  grid-template-rows: repeat(3, 100px);
}
</style>
<div class="grid-4">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
  <div class="grid-item">11</div>
  <div class="grid-item">12</div>
</div>

<br>

  5. **auto-fill** 关键字，自适应填充，当单元格的大小固定，但容器的大小不确定时，auto-fill可以时每列/每行尽可能的容纳更多的单元格。
  
    <style>
    .grid-5 {
      display: grid;
      grid-template-columns: repeat(auto-fill, 100px 130px);
      grid-template-rows: 100px;
    }
    </style>

  上面代码表示，每两列的宽度为100px、150px，填充到容器不能再容纳更多的列，试试伸缩网页的宽度。

<style scoped>
.grid-5 {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px 130px);
  grid-template-rows: 100px;
}
</style>
<div class="grid-5">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
  <div class="grid-item">11</div>
  <div class="grid-item">12</div>
</div>

<br>

  6. **fr**关键字，fraction（片段）的缩写，用于表示比例关系，如果存在两列的宽度为1fr和2fr，则表示后一列是前一列列宽的两倍。<br>

    <style>
    .grid-6 {
      display: grid;
      grid-template-columns: 100px 1fr 2fr;
      grid-template-rows: 100px 100px;
    }
    </style>

  上面代码生成了3列2行的网格布局，第一列列宽100px，第二列和第三列则根据1:2的比例，分摊容器剩余大小。

  
<style scoped>
.grid-6 {
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
  grid-template-rows: 100px 100px;
}
</style>
<div class="grid-6">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

<br>

  7. 网格线名称，使用方括号，命名每一根网格线。<br>

    <style>
    .grid-7 {
      display: grid;
      grid-template-columns: [c1] 100px [c2] 1fr [c3] 2fr [c4];
      grid-template-rows: [r1] 100px [r2] 100px [r3];
    }
    </style>

  上面代码中，定义了3列2行的网格布局，一共有4根垂直网格线，3根水平网格线。


  ###### grid-row-gap/grid-column-gap/grid-gap
  ---
grid-row-gap设置行与行间的间隔，grid-column-gap设置列之间的间隔。<br>
grid-gap: grid-row-gap | grid-column-gap，为两者的简写形式，省略第二个值时，默认第二个值等于第一个值。

    <style>
    .grid-gap {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      grid-gap: 20px 30px
    }
    </style>

上述代码创建了3列2行的网格布局，列间隔30px，行间隔为20px。

<style scoped>
.grid-gap {
  display: inline-grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 20px 30px;
  border: 1px solid #ccc;
}
</style>
<div class="grid-gap">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

<br>
<br>

  ###### grid-template-areas
  ---
  对网格区域命名。每一个字符串会对应一行，一个字符串中用空格分割的单元格生成一列，多个同名且跨越相邻行或列的单元格称为网格区块。非矩形的网格块无效。一个点号（.）表示一个空单元格。<br>
  注：被命名的网格区域（grid areas）会自动生成隐式的被命名的基线

    <style>
    .grid-areas {
      display: grid;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px 100px;
      grid-template-areas: 'header header header'
                          'sider main main'
                          'footer footer footer'
    }
    </style>

  上面代码中，创建了3行3列的网格布局，又对网格进行了命名，划分为header、sider、main、footer四个区域，同时需要对项目指定区域，效果图如下。
<style scoped>
.grid-areas {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'header header header'
                       'sider main main'
                       'footer footer footer'
}
.grid-areas .grid-item:nth-child(1) {
  grid-area: header;
}
.grid-areas .grid-item:nth-child(2) {
  grid-area: sider;
}
.grid-areas .grid-item:nth-child(3) {
  grid-area: main;
}
.grid-areas .grid-item:nth-child(4) {
  grid-area: footer;
}
</style>
<div class="grid-areas">
  <div class="grid-item">header</div>
  <div class="grid-item">sider</div>
  <div class="grid-item">main</div>
  <div class="grid-item">footer</div>
</div>

  ###### grid-auto-flow
  ---
  grid-auto-flow: *row* | *column* | *row dense* | *column dense*<br>
  控制自动布局算法，设置元素排列方式。默认值为row。dense 指定布局算法尽量去填充网格中之前的空白区域，但会导致出现的顺序会被打乱。


    <style>
    .grid-auto-flow {
      display: grid;
      grid-template: 100px 100px 100px / 100px 100px 100px;
    }
    .grid-auto-flow .grid-item:first-child,
    .grid-auto-flow .grid-item:nth-child(2) {
      grid-column: 1 / span 2
    }
    </style>


  上面代码中，创建了3列3行的网格，又指定了第一个和第二个项目跨越两个单元格。根据自动布局算法，项目会按照顺序依次显示。


<style scoped>
.grid-auto-flow {
  display: grid;
  grid-template: 100px 100px 100px / 100px 100px 100px;
}
.grid-auto-flow .grid-item:first-child,
.grid-auto-flow .grid-item:nth-child(2) {
  grid-column: 1 / span 2
}
</style>
<div class="grid-auto-flow">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
<br>

    grid-auto-flow: row dense

  设置布局算法为row dense，按行排列，且尽可能的填满前面的空白区域。
<style>
.grid-flow-row-dense {
  grid-auto-flow: row dense
}
</style>
<div class="grid-auto-flow grid-flow-row-dense">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

<br>

  ###### grid-auto-rows/grid-auto-columns
  ---
  grid-auto-rows/grid-auto-columns: *length* | *percentage* | *auto* | *minmax(min, max)* | *fr*<br>
  设置任何自动生成的网格轨道（grid tracks）（隐式网格轨道）的大小。<br>

    <style>
    .grid-auto-rows {
      display: grid;
      grid-template: 100px 100px / 100px 100px 100px;
      grid-auto-rows: 60px;
    }
    .grid-auto-rows .grid-item:nth-last-child(2) {
      grid-column: 2 / span 1
    }
    .grid-auto-rows .grid-item:last-child {
      grid-column: 2 / 4
    }

  上面代码中，生成了2行3列的网格布局，且设置隐式网格轨道行高为60px。同时也指定了倒数第二个项目7的开始垂直轴线是第三根垂直轴线，且跨越一个单元格，最后一个项目8的开始垂直轴线是第二根垂直轴线，结束垂直轴线是第四根垂直轴线。根据自动布局算法，7会排列在第三行，而8则会排列在第四行。效果如下。

<style scoped>
.grid-auto-rows {
  display: grid;
  grid-template: 100px 100px / 100px 100px 100px;
  grid-auto-rows: 60px;
}
.grid-auto-rows .grid-item:nth-last-child(2) {
  grid-column: 3 / span 1
}
.grid-auto-rows .grid-item:last-child {
  grid-column: 2 / 4
}
</style>
<div class="grid-auto-rows">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
</div>
<br>

  ###### justify-items/align-items/place-items
  ---
  justify-items/align-items: *start* | *center* | *end* | *stretch*;<br>
  place-items: align-items justify-content<br>
  justify-items设置单元格内容的水平位置，align-items设置单元格内容的垂直位置，place-items为两者的简写属性。<br>

    <style>
    .grid-place-items {
      display: inline-grid;
      grid-template: repeat(3, 100px) / repeat(3, 100px);
      justify-items: end;
      align-items: center;
      margin-right: 20px;
    }
    </style>

  上面代码中，创建了3列3行的网格布局，并设置单元格内容水平向右对齐，垂直居中对齐，效果如下：
<style scoped>
.grid-place-items {
  display: inline-grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  justify-items: end;
  align-items: center;
  margin-right: 20px;
}

.grid-place-items .grid-item {
  width: 50px;
  height: 50px;
  line-height: 50px;
}
</style>
<div style="display: flex; flex-wrap: wrap;">
  <div class="grid-place-items">
    <div>
      <div class="grid-item">1</div>
    </div>
    <div>
      <div class="grid-item">2</div>
    </div>
    <div>
      <div class="grid-item">3</div>
    </div>
    <div>
      <div class="grid-item">4</div>
    </div>
    <div>
      <div class="grid-item">5</div>
    </div>
    <div>
      <div class="grid-item">6</div>
    </div>
    <div>
      <div class="grid-item">7</div>
    </div>
    <div>
      <div class="grid-item">8</div>
    </div>
  </div>

  ![grid-place-items](../imgs/grid-place-items.png)

</div>
<br>
<br>
  
  ###### justify-content/align-content/place-content
  ---
  justify-content/align-content: *start* | *center* | *end* | *stretch* | *space-around（每个项目的左右/上下边距都相同）* | *space-between（两端对齐，多余空间均匀分布）* | *space-evenly（多余空间均匀分布）*<br>
  place-content: align-content justify-content<br>
  justify-content设置整个内容区域在容器中的水平位置，而align-content则是设置垂直位置，place-content是两者的缩写属性。


    <style>
    .grid-place-content {
      display: grid;
      grid-template: repeat(2, 100px) / repeat(3, 100px);
      place-content: space-evenly space-evenly;
      height: 360px;
      border: 1px solid #ccc;
    }
    </style>

  上面代码中，生成2行3列的网格布局，并且每个单元格都均分了剩余的空间，效果如下：


<style>
.grid-place-content {
  display: grid;
  grid-template: repeat(2, 100px) / repeat(3, 100px);
  place-content: space-evenly space-evenly;
  height: 360px;
  border: 1px solid #ccc;
}
</style>
<div class="grid-place-content">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
<br>
<br>

  ###### grid
  ---
  网格容器属性的简写属性。<br>
  grid:
  - *grid-template*
  - *grid-template-rows / [ auto-flow && dense? ] <'grid-auto-columns'>?*
  - *[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>*


##### 项目属性

  ###### grid-column-start/grid-column-end/grid-column
  ---
  grid-column-start/grid-column-end: *auto* | *integer（不为0）* | *custom-ident* | *span && [ positive integer | custom-ident ]（integer省略时，默认为1）*<br>
  grid-column: grid-column-start / grid-column-end<br>
  设置网格项目的开始/结束的垂直网格线。


    <style>
    .grid-column {
      display: grid;
      grid-template: repeat(2, 100px) / repeat(3, 100px);
    }
    .grid-column .grid-item:first-child {
      grid-column: span 2;
    }
    </style>

  上面代码表示，创建了2行3列的网格布局，同时指定第一个项目的列，垂直开始轴线为第一根，跨越了两个单元格，效果如下：
<style>
.grid-column {
  display: grid;
  grid-template: repeat(2, 100px) / repeat(3, 100px);
}
.grid-column .grid-item:first-child {
  grid-column: span 2;
}
</style>
<div class="grid-column">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
</div>

  ###### grid-row-start/grid-row-end/grid-row
  ---
  grid-row-start/grid-column-end: *auto* | *integer（不为0）* | *custom-ident* | *span && [ positive integer | custom-ident ]（integer省略时，默认为1）*<br>
  grid-row: grid-row-start / grid-row-end<br>
  设置网格项目的开始/结束的水平网格线。


    <style>
    .grid-row {
      display: grid;
      grid-template: [r1] 100px [r2] 100px [r3] 100px [r4] / [c1] 100px [c2] 100px [c3] 100px [c4];
    }
    .grid-row .grid-item:first-child {
      grid-row: 1 / span r3;
    }
    </style>

  上面代码中，生成了3行3列的网格布局，对每根轴线都进行了命名。指定了第一个项目的水平开始周轴线为第一根，同时跨越单元格到水平轴线r3，即第三根水平轴线，效果如下：

<style>
.grid-row {
  display: grid;
  grid-template: [r1] 100px [r2] 100px [r3] 100px [r4] / [c1] 100px [c2] 100px [c3] 100px [c4];
}
.grid-row .grid-item:first-child {
  grid-row: 1 / span r3;
}
</style>
<div class="grid-row">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
</div>


  ###### grid-area
  ---
  grid-area: *row-start / column-start / row-end / column-end* | *custom-ident*<br>
  grid-row-start、grid-column-start、grid-row-end、grid-column-end的缩写属性，属性值可以是1到4条grid-line，也可以直接指定区域。<br>
  指定网格项目的大小和位置<br>


    <style scoped>
    .grid-area {
      display: grid;
      grid-template: repeat(3, 100px) / repeat(3, 100px);
      grid-template-areas: 'a a b'
                          'c c c'
                          'd e e'

    }
    .grid-area .grid-item:first-child {
      grid-area: 1 / span 2;
    }
    .grid-area .grid-item:nth-child(3) {
      grid-area: c;
    }
    .grid-area .grid-item:nth-child(5) {
      
      grid-area: 2 span / e;
    }
    </style>

  上面代码的效果如下。

<style scoped>
.grid-area {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  grid-template-areas: 'a a b'
                       'c c c'
                       'd e e'

}
.grid-area .grid-item:first-child {
  grid-area: 1 / span 2;
}
.grid-area .grid-item:nth-child(3) {
  grid-area: c;
}
.grid-area .grid-item:nth-child(5) {

  grid-area: 2 span / e;
}
</style>
<div class="grid-area">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
</div>
<br>
<br>

  ###### justify-self/align-self/place-self
  ---
  justify-self/align-self: *start* | *center* | *end* | *stretch*<br>
  place-self: align-self justify-self<br>
  justify-self设置单个项目在容器中的水平位置，align-self则设置垂直位置。<br>

    <style scoped>
      .grid-place-item {
        display: grid;
        grid-template: repeat(2, 100px) / repeat(3, 100px);
      }
      .grid-place-item .grid-item:first-child {
        width: 50px;
        height: 50px;
        line-height: 50px;
        background: red;
        place-self: center end
      }
    </style>

  上面代码中，设置第一个项目，水平右对齐，垂直居中。

<style scoped>
  .grid-place-item {
    display: grid;
    grid-template: repeat(2, 100px) / repeat(3, 100px);
  }
  .grid-place-item .grid-item:first-child {
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: red;
    place-self: center end
  }
</style>
<div class="grid-place-item">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>