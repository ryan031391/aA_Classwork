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

    def find_path

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