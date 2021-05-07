def bubblesort(arr)
    sorted = false

    while !sorted
        sorted = true
        arr.each_with_index do |num, i|
            if arr[i] > arr[i+1]
                arr[i], arr[i+1] = arr[i+1], arr[i]
                sorted = false
            end
        end
    end
end