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

class Hanoi
    attr_reader :stacks

    def initialize
        @stacks = [[3,2,1],[],[]]
    end

    def get
        puts "Please enter your start position and end position"
        pos = gets.chomp.split(",").map {|ele| ele.to_i}
        while pos.length != 2 
            puts "Please enter your start position and end position"
            pos = gets.chomp.split(",").map {|ele| ele.to_i} 
        end
        pos
    end

    def move(start_pos, end_pos)
        # input = self.get
        # start_pos, end_pos = input
        if valid_move?(start_pos, end_pos)
            var = stacks[start_pos].pop
            stacks[end_pos].push(var)
        else
            raise "Invalid move, plaeas enter valid start_pos and end_pos!"
            # self.move(start_pos, end_pos)
        end
    end

    def [](pos)
        @stacks[pos]
    end

    def valid_move?(start_pos, end_pos)
        # if self[start_pos] == nil
        #     return false
        # elsif self[end_pos].empty?
        #     return true
        
        return false if !start_pos.between?(0,2) || !end_pos.between?(0,2) 
            
        !@stacks[start_pos].empty? && (@stacks[end_pos].empty? || @stacks[start_pos].last < @stacks[end_pos].last) # stack[end] == [nil]
        # elsif self[start_pos].last > self[end_pos].last
        #     return false
        # end
        # return true
    end

    def won?

    end

end