function quick (array,pivotIndex,baseIndex) {
	var length = array.length;
	// 选择一个基准值做比较对象，进行分支
	var pivotIndex = pivotIndex;
	// 为了更方便的表示交换的index，定义一个变量
	var baseIndex = baseIndex;

	// 剩下的未排序的分别与基准值进行比较,i表示次数，所以为了理解的方便，直接从1开始，它并不涉及到数组下标

	for(var i = pivotIndex+1;i<=length;i++){
		if (array[i]<array[pivotIndex])
		{
			// 还需要处理更加一般的情况
			swap(array,baseIndex,i);
			baseIndex++;
		}
		
	}
	swap(array,pivotIndex,baseIndex-1);
	console.log(array);

	// 接下来进行递归调用
	// 分组的

	quick(array,0,baseIndex-2)
	quick(array[baseIndex,length-1])
	
	function swap (array,baseIndex,swapIndex) {
		var temp = 	array[baseIndex];
		array[baseIndex]=array[swapIndex];
		array[swapIndex] = temp;
		return array;
	}
}

quick([4,5,1,3,2])


// 思路
// 根据基准值分组，然后递归
// 如何分组，如果遇到小的，放在他后面，又遇到小的，索引+1，继续换
// 遇到重复的功能就抽象出来