require "pry"
s = 'zodiacs'
letter_vals = ('a'..'z').to_a

puts s.split(/[aeiou]/)

s = s.split(/[aeiou]/)
highest_val = 0
s.each do |segment|
  count = 0
  segment.split('').each do |l|
    count += (letter_vals.index(l) + 1)
  end
  if count > highest_val
    highest_val = count
  end
end
puts highest_val

binding.pry
putc 'end'