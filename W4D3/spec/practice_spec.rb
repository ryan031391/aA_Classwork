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

