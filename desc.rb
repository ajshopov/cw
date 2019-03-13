require 'pry'

def descending_order(n)
  n = n.to_s.split('').map { |e| e.to_i }
  n.sort.reverse.join.to_i
end

binding.pry
puts 'end'



# these are the same
# .map { |e| e.to_i }
# .map(&:to_i)