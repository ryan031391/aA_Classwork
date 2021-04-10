# Phase 1 my_min
def my_min_1(list)
  list.each do |num1|
    count = 0 
    min = num1 
    list.each do |num2|
      if num2 < min 
        min = num2
      else 
        count += 1
      end
    end
    return min if count == list.length - 1
  end
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min_1(list)
# O(n^2)


#Phase 2 my_min 
def my_min_2(list) 
  min = list.first 
  list.each {|num| min = num if min > num }
  min
end

# O(n)
# p my_min_2(list)


# Largest_contiguous sum Phase 1
def largest_contiguous_subsum(list)
  subs = [] 
  (0...list.length).each do |i|
    (i...list.length).each do |j|
      subs << list[i..j]
    end
  end

  subs.map {|el| el.sum}.max
end
# # n^3 + n^2 => O(n^3)

   
# list = [5, 3, -7]
# p largest_contiguous_subsum(list) # => 8
# list = [-5, -1, -3]
# p largest_contiguous_subsum(list) # => -1 (from [-1])
# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

# Phase 2 
def largest_contiguous_subsum_2(list)
  largest_sum = 0
  current_sum = 0

  list.each do |el|
    largest_sum = current_sum 
    current_sum += el         
    if current_sum < el 
      current_sum = el 
    end 
    largest_sum = current_sum if largest_sum < current_sum
  end

  largest_sum
end

# O(n)
list = [5, 3, -7]
p largest_contiguous_subsum_2(list) # => 8
list = [-5, -1, -3]
p largest_contiguous_subsum_2(list) # => -1 (from [-1])
list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum_2(list) # => 8 (from [7, -6, 7])