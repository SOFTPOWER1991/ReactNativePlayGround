# ReactNativePlayGround
React Native Play Ground for practice。

## 高和宽

* 确定大小 

	给每一个view指定一个固定的width,height：他们没有单位，代表密度无关的像素；
	
	```
	<View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
	```
* 弹性大小

	使用flex，跟android中的weight相似；
	
	```
	<View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
	```


