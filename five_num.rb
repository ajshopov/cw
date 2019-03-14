require 'pry'

def five_num(array)
  array = array.sort

  midpoint = (array.length-1)/2.0

  if midpoint % 1 == 0
    l = array[0..midpoint]
    u = array[midpoint..-1]
  else
    l = array[0..(midpoint.floor)]
    u = array[midpoint.ceil..-1]
  end

  [array[0], find_median(l), find_median(array), find_median(u), array[-1]]
end

def find_median(array)
  mpt = (array.length-1)/2.0
  if mpt % 1 == 0
    array[mpt]
  else
    (array[mpt.floor] + array[mpt.ceil])/2.0
  end
end

puts five_num([6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49])

# answer [6.0, 25.5, 40.0, 42.5, 49.0]


binding.pry
