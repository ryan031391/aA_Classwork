require 'practice'
require 'rspec'

describe '#remove_dups' do
    it 'method should remove duplicate from the array.' do 
        expect([1, 2, 1, 3, 3].remove_dups ).to eq([1, 2, 3])
    end
end

describe '#two_sum' do 
    it 'finds all pairs of positions where the elements at those positions sum to zero' do
        expect([-1, 0, 2, -2, 1].two_sum).to eq([[0,4], [2, 3]])
    end
end

describe '#my_transpose' do 
    it 'should transpose a matrix' do
        expect( [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ].my_transpose
        ).to eq([
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
          ])
    end
end

describe '#stock_picker' do
    it 'outputs the pair of days which the first day has the lowest price and the second day has the highest pirce' do
        expect([2,5,7,4,8,5,7,9,1,6].stock_picker).to eq([0,7])
    end
end

describe Hanoi do
    subject(:tower) {Hanoi.new}
    let(:stack) { double('Board', valid_pos?: true) }
    
    describe '#initialize' do
        context'one stack should be [3,2,1] and two empty stacks' do
            it 'should set up a hanoi tower' do
                expect(tower.stacks).to eq([[3,2,1],[],[]])
            end
        end
    end

    describe '#move' do
        context'valid input' do
            it 'should not error if input is valid' do
                tower.move(0,2)
                expect(tower.move(0,1)).not_to raise_error
            end       

            it 'allows smaller bricks to go on top of bigger bricks' do
                a = Hanoi.new
                a.move(0,2)
                a.move(0,1)
                # tower.move(2,1)
                expect(a.move(2,1)).not_to raise_error
            end

        end

        # context 'invalid input' do 
        #     it 'should raise error if start position is empty' do
        #         tower.move(1,2)
        #         expect{ tower.move }.to raise_error('Invalid move, plaeas enter valid start_pos and end_pos!')
        #     end

        #     it 'should raise error if the last element of start position is greater than the last element of end position' do
        #         tower.mvoe(0,2)
        #         tower.move(0,2)
        #         expect{tower.move}.to raise_error('Invalid move, plaeas enter valid start_pos and end_pos!')
        #     end
        # end
        
    end

end
# [4,3,6,1]  
# [5,2]
# [7]
#
# [7,6,5,4,3,2,1]

#[2,1]
#[]
#[3]