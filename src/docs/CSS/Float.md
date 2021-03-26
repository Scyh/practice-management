### Float（浮动）

##### 概念
  浮动会使一个元素在水平方向上，向左或者向右移动，直到外边缘碰到父元素边框或另一个浮动元素的边框为止;<br>
  浮动元素之前的元素不受影响，浮动元素之后的元素将围绕该元素;<br>
  浮动元素脱离正常文档流。<br>

##### 应用
1. 文字围绕图片浮动

<br>


    <style>
    .img-sm {
      width: 50px;
    }
    .float-left {
      float: left
    }
    </style>
    <body>
      <p>
      <img class="img-sm float-left" src="../imgs/logo.png" />
      <img class="img-sm float-left" src="../imgs/logo.png" />
      这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
      这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
      这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
      这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
      这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
      这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
      </p>
    </body>

<style>
.img-sm {
  width: 50px;
}
.float-left {
  float: left
}
</style>
<p>
<img class="img-sm float-left" src="../imgs/logo.png" />
<img class="img-sm float-left" src="../imgs/logo.png" />
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
</p>


2. 布局

<br>

    <style>
    .aside {
      width: 200px;
      min-height: 300px;
      background: grey;
    }
    .main {
      min-height: 300px;
      background: lightBlue;
    }
    .display-flow {
      display: flow-root;
    }
    </style>
    <body>
      <aside class="aside float-left">左侧栏</aside>
      <div class="display-flow">
        <main class="main">主内容</main>
      </div>
    </body>


<style scoped>
.aside {
  width: 200px;
  min-height: 300px;
  background: grey;
}
.main {
  min-height: 300px;
  background: lightBlue;
}
.footer {
  text-align: center;
  line-height: 32px;
  background: lightGray;
}
.display-flow {
  display: flow-root;
}
</style>
<div>
  <aside class="aside float-left">左侧栏</aside>
  <div class="display-flow">
    <main class="main">主内容</main>
  </div>
  <footer class="footer">底部</footer>
</div>


##### 清除浮动
clear: both/left/right/inherit
元素周围（左边/右边/俩边）不允许有浮动元素

<br>

    <style>
    .clear-left {
      clear: left
    }
    </style>
    <body>
      <p>
        <img class="img-sm float-left" src="../imgs/logo.png" />
        <img class="img-sm float-left clear-left" src="../imgs/logo.png" />
        这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
        这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
        这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
        这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
        这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
        这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
      </p>
    </body>
<style>
.clear-left {
  clear: left
}
</style>
<p>
<img class="img-sm float-left" src="../imgs/logo.png" />
<img class="img-sm float-left clear-left" src="../imgs/logo.png" />
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
</p>