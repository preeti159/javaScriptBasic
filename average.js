var sum = 5
var nums = [2, 4, 6, 8, 10, 12]
function averageCalculate(values){
    for(var i = 0; i<values.length; i++){
        sum= sum+values[i]
    }
    var avg = (sum/values.length)
     console.log(avg)
    
}
averageCalculate(nums)
