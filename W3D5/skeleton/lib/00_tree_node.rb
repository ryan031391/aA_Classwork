require "byebug"
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
    # debugger

    def dfs(target=nil)      # a [b,c] [d,e,f,g] [b,c] => [c] => [d,e,c]
        # prc ||= Proc.new {|node| node.value == target}

        if self.value == target
            return self
        end

        children.each do |child_node|
            result = child_node.dfs(target) 
            return result if result != nil
        end
        return nil
    end

    def bfs(target)
        
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
    # a => b => c => d => e => f => g

<<<<<<< HEAD
# nodes = ('a'..'g').map { |value| PolyTreeNode.new(value) } 
# nodes.first.dfs('e')
=======
nodes = ('a'..'g').map { |value| PolyTreeNode.new(value) } 
nodes.first.dfs('e')
>>>>>>> ba0d8588040ced2b07cf31b2087eb0f610dd093d
