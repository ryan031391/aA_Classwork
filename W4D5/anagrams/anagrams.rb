# Phase 1
def anagram_1?(str1, str2)
    anagram = str1.split("").permutation.to_a.join("") 
    anagram.include?(str2)
end
# O(n!)

#phase 2
def anagram_2?(str1, str2)
    arr = str2.split("") # O(n)
    str1.each_char do |char| # O(n)
        index = arr.index(char) # O(n)
        arr.delete_at(index) if index != nil # O(n^2)
    end
    arr.empty?
end
#O(n^2)

#phase 3
def anagram_3?(str1, str2) 
    str1.split("").sort == str2.split("").sort
end
#O(nlogn)


#phase 4
def anagram_4?(str1, str2)
    hash_1 = Hash.new(0)
    hash_2 = Hash.new(0)
    str1.each_char {|char| hash_1[char] += 1 } #O(n)
    str2.each_char {|char| hash_2[char] += 1 } #O(n)
    hash_1 == hash_2 #O(n)
end
#O(n)

#phase 5
def anagram_5?(str1, str2)
    hash = Hash.new(0)
    str1.each_char {|char| hash[char] += 1 } #O(n)
    str2.each_char {|char| hash[char] -= 1 } #O(n)
    hash.all? {|k,v| v == 0} #O(n)
end
#O(n)

p anagram_5?("gizmo", "sally")    #=> false
p anagram_5?("elvis", "lives")    #=> true



