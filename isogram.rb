def is_isogram(string)
  letter_count = ('a'..'z').to_a.map{ |letter| string.downcase.count(letter) }
  letter_count.max > 1 ? false : true
end