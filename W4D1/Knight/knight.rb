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

    def build_move_tree(finish)
        path_tree = [@start_pos.value]
        curr_pos = path_tree[0]
        if curr_pos != finish
            path_tree += new_move_position(path_tree[0])
            prev_pos = path_tree.shift
            path_tree.each do |node|
                make_node(node, prev_pos)
            end
        end
    end

    def make_node(pos, prev_pos = nil)
        node = PolyTreeNode.new(pos, prev_pos)
        node.children += new_move_position(pos)
    end

    #pos => instance Poly
    # children 
    #parent = prev poly

    def bfs(target)
        arr = [self]
        until arr.empty?
            if arr[0].value != target
                if !arr[0].children.empty?
                    arr += arr[0].children
                    arr.shift
                else
                    arr.shift
                end
            else
                return arr[0]
            end
        end
    end

    def find_path()

    end


    
    def new_move_position(pos)
        arr = []
        row = pos[0]
        col = pos[1]
        arr << [row-2,col+1] if KnightPathFinder.valid_moves([row-2,col+1])
        arr << [row+2,col+1] if KnightPathFinder.valid_moves([row+2,col+1])
        arr << [row-2,col-1] if KnightPathFinder.valid_moves([row-2,col-1])
        arr << [row+2,col-1] if KnightPathFinder.valid_moves([row+2,col-1])
        arr << [row-1,col+2] if KnightPathFinder.valid_moves([row-1,col+2])
        arr << [row-1,col-2] if KnightPathFinder.valid_moves([row-1,col-2])
        arr << [row+1,col+2] if KnightPathFinder.valid_moves([row+1,col+2])
        arr << [row+1,col-2] if KnightPathFinder.valid_moves([row+1,col-2])
        @consider_positon += arr
        return arr
    end

end


