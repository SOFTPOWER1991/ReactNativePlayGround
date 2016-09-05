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

# FlexBox

* flexDirection : row （android：horizontal）、column(android:vertical)

	布局主轴，水平 or 垂直。
	
* justifyContent: flex-start, center, flex-end, space-around, and space-between.

  view在主轴的排列方式
  
* alignItems: flex-start, center, flex-end, and stretch.

  view在从轴的排列方式；
  
# TextInput : 允许用户输入文本的组件

```
 <TextInput
                style={styles.textInputStyle}

                placeholder={"Plase Input Text Here"}

                autoCapitalize = 'characters'

                multiline = {true}

                numberOfLines = {3}

                onChangeText = { (text) => this.setState({text})}/>

            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
```
  


