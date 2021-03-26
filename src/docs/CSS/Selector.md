### CSS 选择器

##### CSS1:

|    选择器    |    说明    |
|    ---    |    ---    |
|    element    |    类型选择器    |
|    #id    |    Id选择器    |
|    .class    |    类选择器     |
|    element element    |    包含选择器    |
|    :link    |    （状态伪类）链接伪类选择器，未被访问的链接    |
|    :visited    |    （状态伪类）链接伪类选择器，被访问过的链接    |
|    :active    |    （状态伪类）用户操作伪类选择器，激活状态的元素    |
|    :hover    |    （状态伪类）用户操作伪类选择器，鼠标经过的元素    |
|    :first-line    |    伪元素选择器，匹配第一行文本    |
|    :first-letter    |    伪元素选择器，匹配首字母    |

      <style>
      .firstLetter:first-letter {
            font-size: 32px
      }      
      </style>
      <p class="firstLetter">这里是一行文本</p>

效果如下：
<style>
.firstLetter:first-letter {
      font-size: 32px
}      
</style>
<p class="firstLetter">这里是一行文本</p>

---

##### CSS2：
|    选择器    |    说明    |
|    ---    |    ---    |
|    *    |    通配选择器    |
|    element > element    |    子包含选择器    |
|    element + element    |    相邻节点选择器（只选择第一个相邻节点元素）    |
|    [target]    |    属性选择器，选择所有带有target属性的元素    |
|    [target=value]    |    属性选择器，选择所有target属性=value的元素    |
|    [target~=value]    |    属性选择器，选择所有target属性包含value的元素    |
|    [target\|=value]    |    属性选择器，选择所有target属性以value开头的元素    |
|    :focus    |    （状态伪类）用户操作伪类选择器，获取焦点的元素    |
|    element:first-child    |    （结构伪类）指定element是其父元素第一个子元素时的样式    |
|    :before    |    伪元素选择器， 在匹配的元素前面插入内容   |
|    :after    |    伪元素选择器，在匹配的元素后面插入内容    |
|    :lang(language)    |    选择lang属性的起始值为language的元素    |

      <style>
      [lang="en"] {
           color: red
      }
      [class~="class2"] {
            color: red
      }
      </style>

      <p lang="en">这里是一段文本</p>
      <p lang="an">这里是一段文本</p>
      <p class="class1 class2">这里是一段文本</p>
      

效果如下：
<p lang="en">这里是一段文本</p>
<p lang="an">这里是一段文本</p>
<p class="class1 class2">这里是一段文本</p>


<style>
[lang="en"] {
      color: red
}
[class~="class2"] {
      color: red
}
</style>

---

##### CSS3：
|    选择器    |    说明    |
|    ---    |    ---    |
|    *    |    通配选择器    |
|    element1 ~ element2    |    兄弟节点选择器，选择element1的所有element2的兄弟节点    |
|    [target^=value]    |    属性选择器，选择target属性以value开头的元素    |
|    [target$=value]    |    属性选择器，选择target属性以value结尾的元素    |
|    [target*=value]    |    属性选择器，选择target属性包含value的元素    |
|    :first-of-type    |    选择匹配元素其父级是指定类型的第一个元素    |
|    :last-of-type    |    选择匹配元素其父级是指定类型的最后一个元素，等同于:nth-last-of-type(1)    |
|    :only-of-type    |    选择匹配元素其父级是指定类型的唯一一个元素    |
|    :only-child    |    选择匹配元素属于其父级中唯一子元素的元素    |
|    :nth-child(n)    |    选择匹配元素属于其父级中的第n个子元素的元素    |
|    :nth-last-child(n)    |    选择匹配元素属于其父级的子元素倒序中，第n个子元素的元素    |
|    :last-child    |    选择匹配元素属于其父级的子元素中，最后一个子元素的元素，等同于nth-last-child(1)    |
|    :nth-of-type(n)    |    选择匹配元素属于其父级的指定类型的子元素中，第n个子元素的元素    |
|    :nth-last-of-type(n)    |    选择匹配元素属于其父级的指定类型的子元素的倒序中，第n个子元素的元素    |
|    :root    |    选择文档的根元素，在html中，始终是html根元素    |
|    :empty    |    选择没有任何子级的元素，包括文本节点    |
|    :target    |    选择当前活动的target元素，即当前锚点链接到的目标元素    |
|    :enable    |    选择启用的元素    |
|    :disable    |    选择禁用的元素    |
|    :checked    |    选择选中的元素（仅适用于单选框和复选框）    |
|    :not(selector)    |    选择不是被selector选中的元素    |
|    :selection    |    选择被用户选中或处于高亮状态的内容    |
|    :out-of-rang    |    选择，值在指定区间范围外时的元素，例如input输入框的min和max    |
|    :in-rang    |    选择，值在指定区间范围内时的元素，例如input输入框的min和max    |
|    :read-write    |    选择可读并可写的元素，大多数浏览器只设置了input和textarea    |
|    :read-only    |    选择只可读的元素，大多数浏览器只设置了input和textarea    |
|    :optional    |    选择表单元素是可选项的元素，只适用于input、select、textarea，例如input没有设置required    |
|    :required    |    选择表单元素是必填项的元素，只适用于input、select、textarea，例如input设置了required    |
|    :valid    |    选择，表单元素的值，满足指定验证条件时的元素，例如满足input的max、min、type=email时的字段    |
|    :invalid    |    选择，表单元素的值，不满足指定验证条件时的元素，例如不满足input的max、min、type=email时的字段    |

---

##### 层叠与继承

1. 层叠
当同级别的规则，应用到一个元素时，顺序在后面的生效。

2. 优先级
浏览器根据优先级来决定，当多个规则有不同的选择器，对应一个元素时，应该使用什么规则。
| 选择器 | 权重 |
| --- | --- |
| 内联样式 | 1000 |
| ID选择器 | 100 |
| 类选择器、属性选择器、伪类 | 10 |
| 元素选择器、伪元素选择器 | 1 |
| !important | 覆盖上面所有优先级计算，覆盖该条规则，只能使用另一个优先级更高，或者优先级相同且顺序在后的!important |

PS: 
  1. 通用选择器 (*)，组合符 (+, >, ~, ' ')，和否定伪类 (:not) 不会影响优先级。
  2. 计算权重时，不允许进位，例如，当有20个类选择器时，也小于一个ID选择器

3. 继承
一些设置到父元素上的属性，可以被子元素继承。
例如:
  color
  box-sizing
  cursor
  font
  font-size
  font-style
  font-weight
  text-align
  text-indent
  line-height
  ...