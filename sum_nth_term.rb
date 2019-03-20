def series_sum(n)
  i, sum = 1, 0
  until i > n do
    sum += 1.fdiv(i*3-2)
    i+=1
  end
  sum.round(2)
end

puts series_sum(1)
puts series_sum(5)