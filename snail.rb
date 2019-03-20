require 'pry'

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]

sorted = []

loop do
  sorted << array.slice!(0)
  break if array == [] 
  array.each { |item| sorted << item.pop } 
  break if array == [] 
  sorted << array.pop.reverse
  break if array == [] 
  array.reverse_each { |item| sorted << item.shift }
  break if array == [] 
end

sorted.flatten

binding.pry