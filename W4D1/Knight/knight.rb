require 'tree.rb'

class KnightPathFinder

    def self.root_node(pos)
        PolyTreeNode.new(pos)
    end

    def self.valid_moves(pos)
        row, col = pos
        (0..7).to_a.include?(row) && (0..7).to_a.include?(col) && !@consider_positon.inclulde?(pos)
    end
    
    def initialize(start_pos)
        @start_pos = KnightPathFinder.root_node(start_pos)
        @consider_positon = [start_pos]
        # @current_position = consider_positon[-1]
    end

    def build_move_tree
        path_tree = [@start_pos]
        until path_tree.empty? 
            curr_node = path_tree.shift
            new_move_position(curr_node.value).each do |node|
                curr_node.add_child(node)
                path_tree << node
            end
        end
    end

    def make_node(pos, prev_pos = nil)
        node = PolyTreeNode.new(pos, prev_pos)
        node.children += new_move_position(pos)
    end


    # def bfs(target)
    #     arr = [self]
    #     until arr.empty?
    #         if arr[0].value != target
    #             if !arr[0].children.empty?
    #                 arr += arr[0].children
    #                 arr.shift
    #             else
    #                 arr.shift
    #             end
    #         else
    #             return arr[0]
    #         end
    #     end
    # end

    def find_path()

    end


    
    def new_move_position(pos)
        arr = []
        row = pos[0]
        col = pos[1]
        arr << PolyTreeNode.new([row-2,col+1], pos) if KnightPathFinder.valid_moves([row-2,col+1])
        arr << PolyTreeNode.new([row+2,col+1], pos) if KnightPathFinder.valid_moves([row+2,col+1])
        arr << PolyTreeNode.new([row-2,col-1], pos) if KnightPathFinder.valid_moves([row-2,col-1])
        arr << PolyTreeNode.new([row+2,col-1], pos) if KnightPathFinder.valid_moves([row+2,col-1])
        arr << PolyTreeNode.new([row-1,col+2], pos) if KnightPathFinder.valid_moves([row-1,col+2])
        arr << PolyTreeNode.new([row-1,col-2], pos) if KnightPathFinder.valid_moves([row-1,col-2])
        arr << PolyTreeNode.new([row+1,col+2], pos) if KnightPathFinder.valid_moves([row+1,col+2])
        arr << PolyTreeNode.new([row+1,col-2], pos) if KnightPathFinder.valid_moves([row+1,col-2])
        arr.each {|ele| @consider_positon << ele.value}
        return arr
    end

end


