require 'pry'

def find_short(s)
    s.split(' ').map { |word| word.length}.min
end


binding.pry
puts 'end'