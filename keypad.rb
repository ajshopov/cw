require "pry"

keys = %w(1 A B C 2 D E F 3 G H I 4 J K L 5 M N O 6 P Q R S 7 T U V 8 W X Y Z 9 0)
values = [1,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,5,1,2,3,4,1,2,3,4,5,2]
phone = Hash[*[keys, values].transpose.flatten]

phrase = "HOW R U"

counter = 0
phrase.upcase.each_char do |letter|
  if letter == ' '
    counter = counter + 1
  else
    puts phone[letter]
    counter = counter + phone[letter]
  end
end

puts counter

binding.pry
puts 'end of program'