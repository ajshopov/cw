require 'pry'

def DNA_strand(dna)
  complement = []
  dna_array = dna.split('')
  dna_array.each do |letter|
    case letter
    when 'T'
      complement.push('A')
    when 'A'
      complement.push('T')
    when 'G'
      complement.push('C')      
    when 'C'
      complement.push('G')      
    end
  end
  return complement.join('')
end

binding.pry

puts 'end program'