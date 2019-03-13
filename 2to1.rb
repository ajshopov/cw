def longest(a1, a2)
  return a1.concat(a2).chars.sort.join.squeeze
end

puts longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")