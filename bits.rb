require "pry"

number = gets

number = number.to_s(2)
puts number
puts number.chars.map(&:to_i).reduce(:+)

binding.pry
puts 'end program'