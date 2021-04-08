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

    def my_transpose
        arr = Array.new(self.length) {Array.new} 
        self.each_with_index do |el, i|
            self.each_with_index do |el, j|
                arr[i] << self[j][i]
            end
        end
        arr 
    end
    
    def stock_picker
        # min = self[0]
        # max = self[0]
        # self.each do |el|
        #     min = el if min > el
        #     max = el if max < el
        # end
        # [self.index(min), self.index(max)]
        diff = 0
        arr = []
        self.each_with_index do |price, i|
            (i+1...self.length).each do |j|
                curr_diff = self[j]- price
                if diff < curr_diff
                    diff = curr_diff
                    arr = [i,j]
                end
            end
        end
        arr
    end

end