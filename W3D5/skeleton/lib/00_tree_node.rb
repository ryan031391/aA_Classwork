class PolyTreeNode
    attr_reader :parent, :children, :value

    def initialize(new_node)
        @parent = nil 
        @children = []
        @value = new_node
    end

    def parent=(parent_node)
        if @parent == nil
            @parent = parent_node
            parent_node.children << self
        elsif parent_node == nil
            @parent.children.delete(self)
            @parent = nil
        else 
            @parent.children.delete(self)
            @parent = parent_node
            parent_node.children << self
        end
    end

    def add_child(node)
        node.parent = self
    end

    def remove_child(node)
        raise "error" if !@children.include?(node)
        node.parent = nil
    end

    def dfs(target, node = self)     # a [b,c] [d,e,f,g] [b,c] => [c] => [d,e,c]
        if self == target
            return true
        else
            if !self.children.empty?
                self.children.each do |child_node|
                    child_node.dfs(target)
                end
            else 
                return nil
            end
            
        end
    end

end

    # def dfs(target, node = self)
    #     return nil if node.children.empty?
    #        if node.children[-1] == target
    #            return true
    #        else
    #            node.children.pop
    #            dfs(target, node.children[-1])
    #        end
    # end


    #   a
    # b   c
    #d e f g
    # a => b => d => e => c => f => g

