class PolyTreeNode
    attr_reader :parent, :children, :value

    def initialize(new_node)
        # @grid 
        @parent = nil 
        @children = []
        @value = new_node
        # @passed = true
        @child = nil
    end

    # def board
    #     @grid ||= Array.new(8) {Array.new}
    # end

    def parent
        child.parent = self
    end

    # def valid_child?(arr)
    #     row, col = arr
    #     (0..7).to_a.include?(row) && (0..7).to_a.include?(col)
    # end

    # def find_children
    #     row = self.value[0]
    #     col = self.value[1]
    #     children << [row-2,col+1] if valid_child([row-2,col+1])
    #     children << [row+2,col+1] if valid_child([row+2,col+1])
    #     children << [row-2,col-1] if valid_child([row-2,col-1])
    #     children << [row+2,col-1] if valid_child([row+2,col-1])
    #     children << [row-1,col+2] if valid_child([row-1,col+2])
    #     children << [row-1,col-2] if valid_child([row-1,col-2])
    #     children << [row+1,col+2] if valid_child([row+1,col+2])
    #     children << [row+1,col-2] if valid_child([row+1,col-2])
    # end

    def next_step
        child = PolyTreeNode.new(children.sample)
    end


end

bfs dfs
    