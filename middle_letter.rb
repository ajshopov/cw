require 'pry'

def get_middle(s)
  chars = s.length
  return s[chars/2] if chars % 2 != 0
  return s[chars/2 - 1] + s[chars/2]
end

binding.pry


# def get_middle(s)
#   return s[s.size/2] if s.length.odd?
#   return s[s.size/2 - 1] + s[s.size/2]
# end