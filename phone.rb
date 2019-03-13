def createPhoneNumber(numbers)
  nums = numbers.join('')
  return "(#{nums[0..2]}) #{nums[3..5]}-#{nums[6..9]}"
end