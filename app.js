var array = [1, 2, 3];

for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
    console.log('sum=',sum); 