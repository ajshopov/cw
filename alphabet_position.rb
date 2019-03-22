require "pry"

def alphabet_position(text)
  alphabet = ('A'..'Z').to_a
  text = text.upcase.scan(/[A-Z]/)
  text.map { |letter| alphabet.index(letter)+1 }
end



alphabet_position("The sunset sets at twelve o' clock.")
# "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
binding.pry