def bad_two_sum?(arr, target_sum)
  arr.each_with_index do |num1, idx1|
    (idx1+1...arr.length).each do |idx2|
      return true if (num1 + arr[idx2]) == target_sum 
    end
  end

  false
end
# O(n^2)
# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

def okay_two_sum?(arr, target_sum)
  sorted = arr.sort 
  i1 = 0 
  i2 = sorted.length - 1 
  sum = sorted.first + sorted.last 

  while sum != target_sum 
    if sum > target_sum 
      i2 -= 1 
    else 
      i1 += 1 
    end
    sum = sorted[i1] + sorted[i2]
    return false if i1 == i2 
  end

  return true 
end
# [0, 1, 2, 3, 5, 7]
# arr = [0, 5, 2, 1, 3, 7]
# p okay_two_sum?(arr, 6) # => should be true
# p okay_two_sum?(arr, 11) # => should be false

# n + n + n + n + n + n + n = 7n => n 
def two_sum?(arr, target_sum) 
  # hash = Hash.new 
  # # arr.each {|el| hash[el]}
  # min = arr.min #O(n)
  # max = arr.max #O(n)
  # (min..max).each {|el| hash[el] = false }
  # arr.each {|el| hash[el] = true } 
  # sorted = hash.select {|k,v| v == true} 
  # sorted = sorted.keys 

  # i1 = 0 
  # i2 = sorted.length - 1 
  # sum = sorted.first + sorted.last 

  # while sum != target_sum 
  #   if sum > target_sum 
  #     i2 -= 1 
  #   else 
  #     i1 += 1 
  #   end
  #   sum = sorted[i1] + sorted[i2]
  #   return false if i1 == i2 
  # end

  # return true 

end

def best_two_sum?(arr, target_sum)
  hash = Hash.new(0)
  # arr.each {|ele| hash[ele] = true }

  arr.each do |num| #O(n)
    hash[num] += 1
    y = target_sum - num
    return true if hash[y] == 1
  end
  
  false 
end

# [0, 1, 2, 3, 5, 7]
arr = [0, 5, 2, 1, 3, 7]
p best_two_sum?(arr, 6) # => should be true
p best_two_sum?(arr, 11) # => should be false