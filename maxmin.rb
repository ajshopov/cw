require 'pry'

def high_and_low(numbers)
  allNums = numbers.split(' ').map(&:to_i)
  return "#{allNums.min} #{allNums.max}"
end

binding.pry