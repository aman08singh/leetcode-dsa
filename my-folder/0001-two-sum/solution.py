class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        arr = []
        for x in range(len(nums)):
            for y in range(x+1, len(nums)):
                if nums[y] == target - nums[x]:
                    arr = [x, y]
        if(len(arr) > 0):
            return arr
        else:
            return "No two sum solution"
