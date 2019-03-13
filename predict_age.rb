require 'pry'

def predict_age(*args)
  # squares = Array.new
  # args.each do |num|
  #   squares << num**2
  # end

  (Math.sqrt(args.map { |n| n**2 }.sum)/2).floor
end

puts predict_age(65,60,75,55,60,63,64,45)


binding.pry
puts 'end program'