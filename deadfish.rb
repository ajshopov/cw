require 'pry'

def parse(data)
  value, result = 0, []
  data.chars.each{ |letter|
    case
      when letter == "i" then value += 1
      when letter == "d" then value -= 1
      when letter == "s" then value = value * value
      when letter == "o" then result << value
    end
  }
  result
end

binding.pry