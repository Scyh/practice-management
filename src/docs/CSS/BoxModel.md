### 盒模型

##### 概念
盒模型规定了元素处理外边距、边框、内边距和内容的方式，每个盒子都由margin、border、padding和content组成。
![box-model](../imgs/boxmodel.png)

##### 种类
1.w3c标准盒模型
计算宽度方式：width = content-width
计算高度方式：height = content-height


2.IE怪异盒模型
计算宽度方式：width = border-width + padding-width + content-width
计算高度方式：height = border-height + padding-height + content-width

##### CSS属性  box-sizing
| 属性值 | 说明 |
| --- | --- |
| content-box | 标准盒模型，宽高应用到元素的内容框，在内容框之外绘制内边距和边框 |
| border-box | 怪异盒模型，宽高应用到元素的边框盒，在边框和内绘制内边距和边框，内容框的宽高由设置的宽度-内边距-边框 |
| inherit | 继承，继承父元素的盒模型类型 |