require 'pry'

def nb_year(p0, percent, aug, p)
    years = 0
    while p0 < p
      p0 = p0 + (p0 * percent/100).floor + aug
      years += 1
      puts p0
    end
    years
end

puts nb_year(1000, 2.0, 50, 1214)

binding.pry
puts 'end'

# p0, percent, aug (inhabitants coming or leaving each year),
 # p (population to surpass)

# the function nb_year should return n number of entire years
 # needed to get a population greater or equal to p.