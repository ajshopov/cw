def solution(roman)
  conversion = {'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000}
  roman = roman.split('')
  year = 0
  i = 0
  values = roman.map{|letter| conversion[letter]}
  while i < (values.length - 1)
    values[i] >= values[i+1] ? year += values[i] : year -= values[i]
    i += 1
  end
  return year + values.last
end

puts solution('XXI')
puts solution('XIX')
puts solution('CCLXVI')