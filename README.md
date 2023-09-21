# Simple Layout Scss

## 介绍
简单的布局 ``scss`` 框架，多用于已存在设计稿，仅需要一个简单的可配置的基础 ``scss`` 框架。

## 发布版本 ``dist`` 文件说明

- ``sls_all``   SLS CSS全部模块
- ``sls_init``  SLS 初始化模块
- ``sls_stock`` SLS 布局模块
- ``sls_grid``  SLS 栅格化模块
- ``sls_dev``   SLS 开发定制sass

## 使用说明

1.  全部引入: 下载并引入全部模块 ``sls_all`` 即可
2.  按需引入: 下载并引入指定模块即可
3.  个性定制: 下载SLS 开发定制sass导入开发目录，引入 ``index.scss`` ，可自定编辑 ``variable`` 文件中的配置和mixins以达到定制目的

#### ``sls_init`` 初始化模块讲解
1. 根据 ``/variable/setting.scss`` 中的 ``[SLS] body,html初始化设置`` 进行样式初始化
2. 初始化 ``margin`` ``padding`` ``border`` ``body`` ``html``
3. 初始化 默认字体为 ``$fs_default``， 默认字体颜色为 ``$text_color``
4. 初始化部分便签为 ``font-weight: normal``
5. 初始化部分标签为 ``font-style: normal``
6. 初始化部分标签为 ``list-style: none``
6. 初始化部分a标签为 ``text-decoration: none``
7. 禁用IOS点击链接或者带有执行js的button等灰色透明效果
8. 消除Form元素自带的outline，background，radius及IOS中自带样式
9. 设置Form及链接元素PC端鼠标指针样式
9. 禁用IOS中input disabled透明效果
10. 设置placeholder字体大小为 ``$fs_default``，字体颜色为 ``$text_color_placeholder``

#### ``sls_grid`` 栅格化模块讲解
1. 根据 ``/variable/setting.scss`` 中的 ``[SLS] 栅格布局设置`` 生成类Bootstrap的网格系统
2. 栅格化使用的 ``flex`` 布局，如需兼容更多 ``PC`` 端，请自行修改 ``/library/sls_grid.scss``代码以兼容
3. for example:
    ```
    <!--平均分布-->
    <ul class="row">
      <li class="col-8"></li>
      <li class="col-8"></li>
      <li class="col-8"></li>
    </ul>

    <!--根据屏幕分布-->
    <ul class="row">
      <li class="col-2 col-xl-4 col-lg-6"></li>
      <li class="col-20 col-xl-16 col-lg-12"></li>
      <li class="col-2 col-xl-4 col-lg-6"></li>
    </ul>
    ```
4. 默认设备尺寸样式说明: (xl: 1200px, lg: 960px, md: 720px, sm: 540px, xs: 360px)

设备<1200px | 设备<960px |  设备<720px  | 设备<540px | 设备<360px | 不限制
-|-|-|-|-|-
col-xl-* | col-lg-* | col-md-* | col-sm-* | col-xs-* | col-*
hidden-xl | hidden-lg | hidden-md | hidden-sm | hidden-xs | hidden
visible-xl | visible-lg | visible-md | visible-sm | visible-xs | visible
visible-iblock-xl | visible-iblock-lg | visible-iblock-md | visible-iblock-sm | visible-iblock-xs | visible-iblock
visible-iflex-xl | visible-iflex-lg | visible-iflex-md | visible-iflex-sm | visible-iflex-xs | visible-iflex
visible-i-xl | visible-i-lg | visible-i-md | visible-i-sm | visible-i-xs | visible-i

5. 隐藏显示 ``class``说明:
    - ``hidden`` 隐藏
    - ``visible`` 显示为 ``block``
    - ``visible-iblock`` 显示为 ``inline-block``
    - ``visible-iflex`` 显示为 ``inline-flexbox``
    - ``visible-i`` 显示为 ``inline``

#### ``sls_stock`` 布局模块讲解

1. 布局
  - ``ly-box``: 盒模型 ``box-sizing: border-box;``
  - ``ly-top-ib``: 内联块级，以父元素居顶对齐
  - ``ly-cen-ib``: 内联块级，以父元素居中对齐
  - ``ly-ver-cen``: 用于内联块级，未知父元素高度，使子元素垂直居中时前置撑高子元素。详细参见[我的博客](https://www.cnblogs.com/leona-d/p/10455791.html)
  - ``ly-fl``: 浮动靠左
  - ``ly-fr``: 浮动靠右
  - ``ly-wh100``: 宽高100%
  - ``ly-wh100-b``: 宽高100%块级元素
  - ``ly-flex1``: ``flex: 1``
  - ``ly-flexc``: 水平垂直居中
  - ``ly-flexc-y``: 垂直居中
  - ``ly-flexc-x``: 水平居中
  - ``ly-flexc-sb``: 垂直居中,平均分布 ``justify-content: space-between;``
  - ``ly-flexc-sa``: 垂直居中,平均分布,两边留有一半的间隔空间 ``justify-content: space-around;``
  - ``ly-flex-newline``: flex子元素自动换行
  - ``ly-vihide``: 保留元素占位隐藏
  - ``ly-scroll``: 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果``-webkit-overflow-scrolling : touch;``
  - ``ly-disable-touch`` 移动端禁用touch事件 ``touch-action: none;``
  - ``ly-fixed-top`` & ``ly-fixed-bottom``: ``fixed`` 定位布局，已自动增加布局高度，无需使用padding或加宽非fixed元素的高度去避免重叠
    for example:
    ```
    <div class="ly-fixed-top">
      <div class="fiexd-box">
        <input type="text" placeholder="请输入商品名字">
        <button class="fiexd-btn">查找</button>
      </div>
    </div>

    <div class="ly-fixed-bottom">
      <div class="fiexd-box">
        <text>合计：</text>
        <button class="fiexd-btn">提交</button>
      </div>
    </div>
    ```

2. 图片
  - ``img-auto`` 宽高100%，且最大不超过父元素最大尺寸
  - ``img-w100`` 宽100%，高自动，且不超过父元素最大尺寸
  - ``img-h100`` 高100%，宽自动，且不超过父元素最大尺寸
  - ``img-mw100`` 宽自动，且不超过父元素最大尺寸
  - ``img-mh100`` 高自动，且不超过父元素最大尺寸

3. 字体
  - ``txt-blod`` 字体加粗
  - ``txt-normal`` 字体正常
  - ``txt-light`` 字体变细
  - ``txt-l`` 字体靠左对齐
  - ``txt-c`` 字体居中对齐
  - ``txt-r`` 字体靠右对齐
  - ``txt-ellipsis`` 单行文字超出省略号
  - ``txt-mellipsis`` 两行文字超出省略号
  - ``txt-nowrap`` 强制文字不换行
  - ``txt-newline`` 强制文字、字母均换行

4. 清除浮动
  - ``clearfix`` 高强度清除浮动

5. 提示文字颜色
  - 按 ``/variable/setting.scss`` 中的 ``[THEME] 行为颜色``生成
  - 默认为：
    - ``tip-primary`` 主提示文字色
    - ``tip-success`` 成功提示文字色
    - ``tip-warning`` 温馨提示文字色
    - ``tip-error``   错误提示文字色
    - ``tip-import``  重要提示文字色

6. 普通字体颜色
  - 按 ``/variable/setting.scss`` 中的 ``[THEME] 字体颜色``生成
  - 默认为：
    - ``char-normal`` 大面积使用文字色
    - ``char-inverse`` 大面积使用文字反色
    - ``char-placeholder`` placeholder使用文字色
    - ``char-disable`` 禁用功能使用文字色

7. 字体大小
  - 按 ``/variable/setting.scss`` 中的 ``[THEME] 字体大小``生成
  - 默认为：
    - ``fs-default`` 默认文字大小
    - ``fs-title``   标题文字大小
    - ``fs-middle``  中等文字大小
    - ``fs-small``   略小文字大小
    - ``fs-mini``    超小文字大小
