
function findCheck(arr, target){
    for (i in arr){
        if (arr[i] == target){
            console.log("Found it");
        }
    }
}

findCheck(["banana", "apple", "kiwi"], "kiwi");