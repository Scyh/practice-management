### 块格式化上下文（Block Formatting Context）

##### 概念
  Formatting Context，表示页面中的一块渲染区域，有自己的一套渲染规则， 决定了其子元素如何定位，及和其他元素的关系与作用，而Block Formatting Context，则规定了内部的block-leave-box的布局规则

##### 布局规则
  1. 内部的盒子一个一个按照垂直的方向排列

  2. 相邻块级盒子之间的垂直边距折叠，大小为单个边距的最大值

  3. 块级盒子的左外与包含块的左边缘相接触

  4. BFC的区域不予浮动元素重叠

  5. BFC区域的高度，包含浮动元素

  6. BFC区域里的元素，与外界隔离，互不影响

##### 如何创建BFC
  1. 浮动元素（float不为none）
  2. 绝对定位元素（position: absolute/fixed）
  3. 表格元素（display: table/table-row/table-cell/...）
  4. overflow不为visivble的元素
  5. display: flow-root的元素
  6. flex元素（display: flex/inline-flex）
  7. grid元素（display: grid/inline-grid）
  ...

##### 实例

  1. 规则2，实际就是常说的外边距折叠，如下，div1和div2发生了垂直边距折叠，两个div之间的垂直边距只有30px，而不是10px + 30px

    <style>
      .border {
        border: 1px solid #000;
      }
      .div {
        height: 100px;
        background: #f00;
      }
      .div1 {
        margin: 10px;
      }
      .div2 {
        margin: 30px 10px;
      }
    </style>

    <body>
      <div class="border">
        <div class="div div1"></div>
        <div class="div div2"></div>
      </div>
    </body>
<style scoped>
.border {
  border: 1px solid #000;
}
.div {
  height: 100px;
  background: #f00;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.div1 {
  margin: 10px;
}
.div2 {
  margin: 30px 10px;
}
</style>
<div class="border">
  <div class="div div1">margin: 10px</div>
  <div class="div div2">margin: 30px 10px</div>
</div>
<br>
而当我们为其中一个div创建一个BFC时，此时两个div之间的垂直外边距则为10px + 30px

    <style>
      .overflowHidden {
        overflow: hidden;
      }
    </style>

    <body>
      <div class="border">
        <div class="div div1">margin: 10px</div>
        <div class="overflowHidden">
          <div class="div div2">margin: 30px 10px</div>
        </div>
      </div>
    </body>

<style>
.overflowHidden {
  overflow: hidden;
}
</style>
<div class="border">
  <div class="div div1">margin: 10px</div>
  <div class="overflowHidden">
    <div class="div div2">margin: 30px 10px</div>
  </div>
</div>

<br>
  2. 根据规则3：块级盒子的左外与包含块的左边缘相接触，可以看到main元素的左侧，紧挨着包含元素outer

    <style>
      .floatLeft {
        float: left;
      }
      .aside {
        width: 180px;
        height: 200px;
        background-color: rgba(255, 200, 0, 0.3);
        color: #fff;
      }
      .main {
        background: grey;
        min-height: 100px;
      }
    </style>

    <div class="outer border">
      <div class="aside floatLeft">aside</div>
      <div class="main">main</div>
    </div>


<style scoped>
  .clearFix::after {
    content: '';
    clear: both;
    display: table;
  }
  .outer {
    border: 1px solid red;
  }
  .floatLeft {
    float: left;
  }
  .aside {
    width: 180px;
    height: 200px;
    background-color: rgba(255, 150, 0, 0.3);
  }

  .main {
    background: grey;
    min-height: 100px;
  }

</style>
<div class="outer">
  <div class="aside floatLeft">aside</div>
  <div class="main">main</div>
</div>

<div class="clearFix"></div>
<br>

再根据规则4：BFC的区域不予浮动元素重叠此时，给main创建一个BFC，
<div class="outer">
  <div class="aside floatLeft">aside</div>
  <div class="main overflowHidden">main</div>
</div>

<div class="clearFix"></div>
<br>

但此时可以看出，外层outer元素的高度，现在只包含了main元素的高度，根据规则5：BFC区域的高度，包含浮动元素，为outer创建一个BFC
    
    <div class="outer overflowHidden">
      <div class="aside floatLeft">aside</div>
      <div class="main overflowHidden">main</div>
    </div>

<div class="outer overflowHidden">
  <div class="aside floatLeft">aside</div>
  <div class="main overflowHidden">main</div>
</div>