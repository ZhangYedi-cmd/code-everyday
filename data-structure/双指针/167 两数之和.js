var twoSum = function(numbers, target) {
    // 双指针
    for (var i = 0 ; i < numbers.length ; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if ( target - numbers[i] - numbers[j]=== 0 ) {
                return [i + 1, j + 1]
            }
        }
    }
};
