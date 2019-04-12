def find_even_index(arr)
  pivot_values = arr.map.with_index do |pivot, index|
    right_sum = arr[(index+1)..-1].sum
    index == 0 ? left_sum = 0 : left_sum = arr[0..(index-1)].sum

    left_sum == right_sum ? true : false
  end

  pivot_values.any? ? pivot_vals.index(true) : -1
end

find_even_index([1,2,3,4,3,2,1])