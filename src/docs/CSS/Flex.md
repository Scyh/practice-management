### Flexible

  Flexible Box，弹性盒子，是一种按行/列进行布局的一种布局方式。

##### 基本概念

  1. 采用Flex布局的元素，称为*flex容器（flex container）*，容器中的子元素，称为*flex项（flex item）*<br>
    display: flex | inline-flex

  
  2. *main axis*，主轴，flex项默认沿主轴排列，主轴的开始和结束的位置叫做main start和main end
  3. *cross axis*，交叉轴，垂直于主轴，交叉轴的开始和结束的位置叫做cross start和cross end

  ![flex](../imgs/flex.png)

  4. flex容器有6个属性
  - flex-direction: row | row-reverse | column | column-reverse<br>
    设置主轴方向，默认row
    
<br>

    <div class="flex-box">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>


<style  scoped>
* {
  box-sizing: content-box!important;
}
.border {
  border: 1px solid #fcfcfc;
}
.padding-10 {
  padding: 10px
}
.flex-box {
  display: flex;
  margin-bottom: 10px;
}
.flex-inline-box {
  display: inline-flex;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-column {
  flex-direction: column;
}
.flex-column-reverse {
  flex-direction: column-reverse;
}
.flex-item {
  width: 40px;
  height: 40px;
  background: rgb(232, 128, 36);
  text-align: center;
  line-height: 40px;
}
.flex-box {
  margin-right: 20px;
}
.flex-item {
  margin: 5px;
}
</style>
<div class="flex-box padding-10 border">
  <div class="flex-box">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

  <div class="flex-box flex-row-reverse">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

  <div class="flex-box flex-column">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

  <div class="flex-box flex-column-reverse">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
</div>

  - flex-wrap: wrap | nowrap | wrap-reverse
  设置容器是单行还是多行（是否换行），默认值为nowrap，wrap-reverse：第一行在下面
<style>
.w-200 {
  width: 200px;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}
</style>
<div class="flex-box">
  <div class="flex-box w-200 border">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
  </div>

  <div class="flex-box flex-wrap w-200 border">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
  </div>

  <div class="flex-box flex-wrap-reverse w-200 border">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
  </div>
</div>

  - flex-flow: flex-direcion flex-wrap<br>
  flex-direction（默认值row）和flex-wrap（默认值nowrap）的复合属性

  
  - justify-content: flex-start | center | flex-end | space-around | space-between<br>
  项目在**主轴上的对齐方式**，默认值为flex-start

<style>
.width-300 {
  width: 220px
}
.justify-center {
  justify-content: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-space-around {
  justify-content: space-around;
}
.justify-space-between {
  justify-content: space-between;
}
</style>
<div class="flex-box flex-wrap">
  
  <div class="flex-box border width-300">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

  <div class="flex-box justify-center border width-300">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

  <div class="flex-box justify-end border width-300">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

  <div class="flex-box justify-space-around border width-300">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

  <div class="flex-box justify-space-between border width-300">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

</div>

  - align-items: flex-start | center | flex-end | baseline | stretch<br>
  项目在**交叉轴上的对齐方式**，默认值是stretch，如果项目没有设高度或设为auto，将占满整个容器的高度。<br>


<style>
.bg-yellow {
  background: yellow;
}
.height-auto-box > div {
  width: 40px;
  height: auto;
}
.flex-align-box > div:nth-child(1) {
  height: 80px;
}
.flex-align-box > div:nth-child(2) {
  height: 120px;
}
.flex-align-box > div:nth-child(3) {
  height: 90px;
}
.flex-align-box > div:nth-child(4) {
  height: 150px;
}
.font-size-48 {
  font-size: 48px;
}
.font-size-32 {
  font-size: 32px;
}
.align-end {
  align-items: flex-end;
}
.align-center {
  align-items: center;
}
.align-baseline {
  align-items: baseline;
}
</style>
<div class="flex-box flex-wrap">
  <div class="flex-box justify-space-around height-auto-box width-200 border">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
  </div>

  <div class="flex-box justify-space-around flex-align-box width-200 border">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
  </div>

  <div class="flex-box justify-space-around flex-align-box align-center width-200 border">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
  </div>

  <div class="flex-box justify-space-around flex-align-box align-end width-200 border">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
  </div>

  <div class="flex-box justify-space-around flex-align-box align-baseline width-200 border">
    <div class="flex-item">1</div>
    <div class="flex-item font-size-48">2</div>
    <div class="flex-item font-size-32">3</div>
    <div class="flex-item">4</div>
  </div>
</div>

  - align-content: stretch | flex-start | center | flex-end | space-around | space-between<br>
  定义多条轴线的对齐方式，只存在一根轴线时不起作用<br>
  

<style scoped>
.align-content-box {
  width: 100px;
  height: 350px;
}
.content-start {
  align-content: flex-start;
}
.content-center {
  align-content: center;
}
.content-end {
  align-content: flex-end;
}
.content-space-between {
  align-content: space-between;
}
.content-space-around {
  align-content: space-around;
}
</style>
<div class="flex-box border padding-10">
  <div class="flex-box flex-wrap border align-content-box">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
  </div>

  <div class="flex-box flex-wrap border align-content-box content-start">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
  </div>

  <div class="flex-box flex-wrap border align-content-box content-center">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
  </div>

  <div class="flex-box flex-wrap border align-content-box content-end">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
  </div>

  <div class="flex-box flex-wrap border align-content-box content-space-around">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
  </div>

  <div class="flex-box flex-wrap border align-content-box content-space-between">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
  </div>

</div>

  5. flex项也有6个属性

  - flex-grow: number<br>
  定义flex项的放大比例，默认值为0，即如果存在剩余空间，也不放大<br>
  下面三个flex项的grow，分别为1、1、2，总共4份，*按比例放大*，则第三项占父元素内容宽度的2/4，其余两项占1/4
<style scoped>
.flex-grow-box > .flex-item:nth-child(1) {
  flex-grow: 1;
}
.flex-grow-box > .flex-item:nth-child(2) {
  flex-grow: 1;
}
.flex-grow-box > .flex-item:nth-child(3) {
  flex-grow: 2;
}
</style>
<div class="flex-box flex-grow-box padding-10 border">
  <div class="flex-item">flex-grow: 1</div>
  <div class="flex-item">flex-grow: 1</div>
  <div class="flex-item">flex-grow: 2</div>
</div>

  - flex-shrink: number<br>
  定义flex项的缩小比例，默认值为1，如果未定义该属性，则根据计算比例，对flex项进行缩小<br>
  下面三个flex项，flex-basis设置为200px，左右边距相加10px，总共需要630px的宽度，而父元素只有500px宽度，少了130px，<br>
  按照设置的shrink比例计算，分别为1、1、2，*总权重*为 200 * 1 + 200 * 1 + 200 * 2 = 800<br>
  按照计算公式：***超出宽度 * 元素宽度在总权重中所占比例***
  前两项需要缩小的比例为：130 * (1 * 200 / 800) = 32.5px
  最后一个flex项占2/4，即需要缩小130 * (2 * 200 / 800) = 64px
<style>
.flex-shrink-box {
  width: 500px;
}
.flex-shrink-box .flex-item {
  flex-shrink: 1;
  flex-basis: 200px;
}
.flex-shrink-box .flex-item:last-child {
  flex-shrink: 2;
}
</style>
<div class="flex-box flex-shrink-box padding-10 border">
  <div class="flex-item">flex-shrink: 1</div>
  <div class="flex-item">flex-shrink: 1</div>
  <div class="flex-item">flex-shrink: 2</div>
</div>


  - flex-basis: number | auto<br>
  设置flex项的*伸缩基准值*，可以是一个长度单位或者是百分比，默认值为auto<br>
  下方flex容器宽度为600，flex项的basis分别为200、200、400、且存在左右边距10px，即超出父元素230px；<br>
  总权重为：200 * 1 + 200 * 1 + 400 * 2 = 1200<br>
  按照shrink比例计算，第一、二flex项分别缩小230 * (1 * 200 / 1200) = 38.33px<br>
  最后一项缩小230 * (2 * 400 / 1200) = 153.33px<br>


<style>
.flex-basis-box {
  width: 600px;
}
.flex-basis-box .flex-item {
  flex-basis: 200px;
}
.flex-basis-box .flex-item:last-child {
  flex-shrink: 2;
  flex-basis: 400px;
}
</style>
<div class="flex-box flex-basis-box padding-10 border">
  <div class="flex-item">shrink: 1; basis: 200px</div>
  <div class="flex-item">shrink: 1; basis: 200px</div>
  <div class="flex-item">shrink: 2; basis: 400px</div>
</div>

  - flex: flex-grow flex-shrink flex-basis | auto | none | initial<br>
  flex是flex-grow flex-shrink flex-basis三者的缩写形式<br>
  auto: 1 1 auto;<br>
  none: 0 0 auto;<br>
  initial: 0 1 auto;<br>

  - align-self: flex-start | center | flex-end | stretch | baseline<br>
  设置flex项单独在交叉轴上的对齐方式，默认值为auto，继承父容器的align-items属性，如果没有父元素则为stretch
<style>
.align-self-end {
  align-self: flex-end
}
</style>
<div class="flex-inline-box flex-align-box width-200 border">
  <div class="flex-item">1</div>
  <div class="flex-item align-self-end">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
</div>

  - order: number<br>
  设置flex项的显示顺序，默认值为0<br>
<style>
[class*='order-'] {
  flex: auto;
}
.order-1 {
  order: 1
}
.order-2 {
  order: 2
}
.order-3 {
  order: 3
}
</style>
<div class="flex-box padding-10 border">
  <div class="flex-item order-2">1. order-2</div>
  <div class="flex-item order-3">2. order-3</div>
  <div class="flex-item order-1">3. order-1</div>
</div>

 6. 骰子实例

<style>
.dice {
  width: 88px;
  height: 88px;
  margin-right: 10px;
  padding: 10px;
  box-shadow: inset 0 5px white, inset -5px 0 #ddd, inset 0 -5px #d7d7d7, inset 5px 0 #d7d7d7;
  border-radius: 10px;
  background: #e7e7e7;
  box-sizing: border-box!important;
}
.dot {
  width: 20px;
  height: 20px;
  background: #000;
  border-radius: 50%;
  box-shadow: 1px 1px #d7d7d7;
  line-height: 1!important;
}
.display-flex {
  display: flex;
}
.align-self-center {
  align-self: center;
}
</style>
<div class="flex-box">

  <!-- 一点 -->
  <div class="dice display-flex justify-center align-center">
    <div class="dot"></div>
  </div>

  <!-- 两点 -->
  <div class="dice display-flex justify-space-between">
    <div class="dot"></div>
    <div class="dot align-self-end"></div>
  </div>

  <!-- 三点 -->
  <div class="dice display-flex justify-space-between">
    <div class="dot"></div>
    <div class="dot align-self-center"></div>
    <div class="dot align-self-end"></div>
  </div>

  <!-- 四点 -->
  <div class="dice display-flex flex-column justify-space-between">
    <div class="display-flex justify-space-between">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="display-flex justify-space-between">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
  
  <!-- 五点 -->
  <div class="dice display-flex flex-column justify-space-between">
    <div class="display-flex justify-space-between">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="display-flex justify-center">
      <div class="dot"></div>
    </div>
    <div class="display-flex justify-space-between">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>

  <!-- 六点 -->
  <div class="dice display-flex flex-column justify-space-between">
    <div class="display-flex justify-space-between">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="display-flex justify-space-between">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="display-flex justify-space-between">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</div>