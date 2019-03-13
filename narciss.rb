require 'pry'

def narcissistic?(value)
  power = value.digits.count
  value == value.to_s.chars.map { |num| num.to_i**power }.reduce(:+)
end

narcissistic?(153)

binding.pry
puts 'end of program'