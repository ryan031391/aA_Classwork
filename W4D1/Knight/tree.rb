class PolyTreeNode
    attr_reader :parent, :children, :value

    def initialize(new_node)
        @grid 
        @parent = nil 
        @children = []
        @value = new_node
        @passed = true
    end

    def board
        @grid ||= Array.new(8) {Array.new}
    end

    # def parent=(parent_node)
    #     if @parent == nil
    #         @parent = parent_node
    #         parent_node.children << self
    #     elsif parent_node == nil
    #         @parent.children.delete(self)
    #         @parent = nil
    #     else 
    #         @parent.children.delete(self)
    #         @parent = parent_node
    #         parent_node.children << self
    #     end
    # end
    def valid_child?

    end

    def find_children
        row = self.value[0]
        col = self.value[1]
        children << [row-2,col+1]
        
    end

end