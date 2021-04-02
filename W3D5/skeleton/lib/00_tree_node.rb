class PolyTreeNode
    attr_reader :parent, :children, :value

    def initialize(new_node)
        @parent = nil
        @children = []
        @value = new_node
    end

    def parent=(parent_node)
        if parent_node == nil
            @parent = parent_node
            parent_node.children << self
        else 
            @parent.children.delete(self)
            @parent = parent_node
            parent_node.children << self
        end
        
    end


end