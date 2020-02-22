## 步骤
1. 划分好文件夹
2. 下载用来统一样式的css文件, normalize.css, https://necolas.github.io/normalize.css/latest/normalize.css
3. 建立属于自己的统一样式文件, base.css



## tabbar吸顶效果
1. 监听想上滚动
2. 当滚动到某个位置的时候,将tabbar修改成fixed
3. 监听向下滚动
4. 滚动到某个位置的时候,将tabbar的fixed属性移除掉

### 简单实现吸顶效果
简单实现可以使用position的sticky属性,配合top属性, 当顶部接近top设置的像素的时候, 则浏览器将组件的position属性改为fixed
```
position: sticky;
top: 44px;
```


## 流行,新款,精选数据结构

```
goods: {
  'pop': {page: 1, list: [150]},
  'news': {page: 2, list: [10]},
  'sell': {page: 3, list: [50]}
}
```

开始先请求第一页, 当上拉加载的时候再请求下一页