require 'pry'

def rgb(*args)
  hex = ""
  args.each do |num|
    num = 0 if num < 0
    num = 255 if num > 255
    # hex << "0" if num.to_s(16).upcase.length < 2
    # hex << num.to_s(16).upcase
    hex << num.to_s(16).upcase.rjust(2, "0")
  end
  hex
end

binding.pry
puts 'end'