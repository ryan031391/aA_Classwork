# require 'practice_spec.rb'
class Array

    def remove_dups
        arr = []
        self.each do |el|
            arr << el if !arr.include?(el)
        end
        arr
    end

    def two_sum
        arr = []

        self.each_with_index do |el, i|
            (i + 1...self.length).each do |j|
                arr << [i, j] if el + self[j] == 0
            end
        end
        arr
    end

end