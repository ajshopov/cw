def iq_test(numbers)
  even_arr = []
  odd_arr = []
  numbers = numbers.split(' ').map { |e| e.to_i }
  numbers.each do |num|
    num % 2 == 0 ? even_arr.push(num) : odd_arr.push(num)
  end
  special_num = even_arr.length == 1 ? even_arr.first : odd_arr.first
  return numbers.index(special_num) + 1
end



puts iq_test("2 4 7 8 10")

#  top solution, map even? T or F. If more than 1 even, return false, else return even.. nice
# nums = numbers.split.map(&:even?)
# nums.count(true) > 1 ? nums.index(false) + 1 : nums.index(true) + 1