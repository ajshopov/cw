require 'pry'

def validate(n)
  n = n.to_s.chars.map(&:to_i)
  n.length.even? ? idx = 0 : idx = 1
  while idx < n.length
    n[idx] = n[idx] * 2
    n[idx] = n[idx] - 9 if n[idx] > 9
    idx = idx + 2
  end
  return n.reduce(:+) % 10 == 0
end


binding.pry
puts 'end of program'