require 'pry'

def spinWords(string)
  string.split.map {|word| (word.size >= 5 ? word.reverse : word)}.join(' ')
end



binding.pry
puts 'end'