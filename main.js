/**
228. Summary Ranges
 
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

    "a->b" if a != b
    "a" if a == b

 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"


Ваша задача - вернуть наименьший отсортированный список диапазонов, которые покрывают все числа в массиве точно.
То есть каждый элемент nums покрывается ровно одним из диапазонов, и нет целого числа x такого, что x находится в одном из диапазонов, но не в nums.

Вот шаги, которые мы будем следовать:

1. Инициализируйте переменную для отслеживания начала текущего диапазона.
2. Пройдите по каждому числу в массиве nums.
3. Если текущее число не является продолжением текущего диапазона (т. е. оно не равно предыдущему числу плюс один), 
   добавьте текущий диапазон в результат и начните новый диапазон с текущего числа.
4. После прохождения всех чисел в nums, добавьте последний диапазон в результат.
5. Верните результат.

Your task is to return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Here are the steps we will follow:

1. Initialize a variable to track the start of the current range.
2. Go through each number in the nums array.
3. If the current number is not a continuation of the current range (i.e., it is not equal to the previous number plus one), 
   add the current range to the result and start a new range from the current number.
4. After going through all numbers in nums, add the last range to the result.
5. Return the result.

*/

function summaryRanges(nums) {
  // Инициализируем переменную для отслеживания начала текущего диапазона и результат
  // Initialize a variable to track the start of the current range and the result
  let start = nums[0];
  let result = [];

  // Проходим по каждому числу в массиве nums
  // Go through each number in the nums array
  for (let i = 1; i <= nums.length; i++) {
    // Если текущее число не является продолжением текущего диапазона
    // If the current number is not a continuation of the current range
    if (nums[i] !== nums[i - 1] + 1) {
      // Добавляем текущий диапазон в результат
      // Add the current range to the result
      if (start === nums[i - 1]) {
        result.push(start.toString());
      } else {
        result.push(start + '->' + nums[i - 1]);
      }

      // Начинаем новый диапазон с текущего числа
      // Start a new range from the current number
      start = nums[i];
    }
  }

  // Возвращаем результат
  // Return the result
  return result;
}
