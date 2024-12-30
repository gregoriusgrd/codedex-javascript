# Social Media View Analysis 📊
This project analyzes viewership data from TikTok, Instagram, and YouTube to calculate key statistics.

## Features
The program calculates:
1. Mean (average number of views).
2. Median (middle value of sorted views).
   
## How It Works
1. Define three viewership arrays:
```
const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];
```

2. Create two functions to calculate:
Mean: Uses the total views to calculate the average.
Median: Sorts the array and finds the middle value.

3. Call the functions for each array and log the results.

## Example Output:
```
TikTok  
Mean: 4625.142857142857  
Median: 5222  

Instagram  
Mean: 3970  
Median: 3921  

YouTube  
Mean: 3698.285714285714  
Median: 2789
```

Check out the implementation in social_media_view_analysis.js!
