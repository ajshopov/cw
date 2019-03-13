require 'pry'


def increment_string(input)
  number = input.match(/\d*\Z/)[0]
  word = input.split(/\d*\Z/)[0]

  leading_zero_check = number.length

  number.to_i == nil ? number = '1' : number = (number.to_i + 1).to_s

  if number.length < leading_zero_check
    number = number.rjust(leading_zero_check, '0')
  end

  word.to_s.concat(number)
end

puts increment_string("foobar24")
puts increment_string("foobar9")
puts increment_string("foobar")
puts increment_string("foobar0003")
puts increment_string("foobar0009")

binding.pry

puts 'end program'
