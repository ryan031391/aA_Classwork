#Phase 1
def windowed_max_range(arr, window) #[1, 0, 2, 5, 4, 8]
    current_max_range = 0
    (0..arr.length-window).each do |i|
        win = arr[i...i+window] # O(n)
        min = win.min # O(n)
        max = win.max # O(n)
        current_max_range = max - min if max - min > current_max_range
    end 
    current_max_range
end
#O(n^2)

#Phase 2
class MyQueue

    def initialize
        @store = []
    end

    def enqueue(ele)
        store << ele
        ele
    end

    def dequeue
        store.shift
    end

    def size
        store.length
    end

    def empty?
        store.empty?
    end

    def peek
        store.first
    end

    def inspect
        "#{self.class}"
    end

    private
    attr_reader :store

end

class MyStack

    def initialize
        @store = []
    end

    def push(ele)
        store << ele
        ele
    end

    def pop
        store.pop
    end

    def size
        store.length
    end

    def empty?
        store.empty?
    end

    def peek
        store.last
    end

    def inspect
        "#{self.class}"
    end

    private 
    attr_reader :store
end





# p windowed_max_range([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
# p windowed_max_range([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5
# p windowed_max_range([1, 0, 2, 5, 4, 8], 4) #== 6 # 2, 5, 4, 8
# p windowed_max_range([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 8
