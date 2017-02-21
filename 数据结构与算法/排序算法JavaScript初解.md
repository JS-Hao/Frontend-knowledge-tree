# 排序算法JavaScript初解

```javascript
function swap(arr,index1,index2){
    var temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}
```

### 冒泡排序

冒泡排序算法，它是最慢的排序算法之一，但也是一种最容易实现的排序算法。
之所以叫冒泡排序，是因为进行算法排序是，数据值会像气泡一样从数组的一端漂浮到另一端。
PS：逐个相邻的两个比较，将较大的往右浮动，从而第一轮得到最大的值放置最右边。依次类推，第二轮得到第二大的值放置右侧倒数第二的位置。最终得到从左到右依次递增的序列。
```javascript
function bubbleSort(arr){
    var numElements=arr.length;
    var temp;
    //n个数排序，只用进行n-1趟
    for(var outer=1; outer<=numElements-1; outer++){
    	for(var inner=0; inner<=numElements-outer; inner++){
    		if(arr[inner]>arr[inner+1]){
                swap(arr,inner,inner+1);
            }
    	}
    }
}
```

### 选择排序

选择排序算法，选择排序会用到嵌套循环，从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后。最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数的第二个位置时，所有的数据便完成了排序。
```javascript
function selectionSort(arr){
	var min,temp;
	for(var outer=0; outer<=arr.length-2; outer++){
		min=outer;
		for(var inner=outer+1; inner<=arr.length-1; inner++){
			if(arr[inner]<arr[min]){
				swap(arr,inner,min);
			}
		}
	}
}
```

### 插入排序

插入排序通过将较大的数组元素移动到右侧，为数组左侧的较小元素腾出位置。
```javascript
function insertionSort(arr){
	var temp,inner;
	for(var outer=1; outer<=arr.length-1; ++outer){
		temp=arr[outer];
		inner=outer;
		while(inner>0 && (arr[inner-1]>=temp)){
			arr[inner]=arr[inner-1];
			--inner;
		}
		arr[inner]=temp;
	}
}
```