# denoise

專題報告

https://docs.google.com/document/d/1-iO-0EdDZN9ZGx75HZLj4YUe5lQw0IvuyecpOpocytc/edit?usp=sharing

### usage
```

sudo apt install npm
git checkout video_server
npm install express
npm start
```

### Preprocessing

1. Image Restoration
先利用median filter對影像作初步的修復，得到一張近似未被雜訊汙染的原圖
![](https://i.imgur.com/PbI3Xlt.jpg)

2. Noise Restoration
將步驟1與input的雜訊圖做pixel wise的相減，相減的差值即為雜訊圖
![](https://i.imgur.com/9AdbmLR.png)

3. Histogram Transform

將步驟2的雜訊圖的各個pixel的value Normalize成0-1,並根據各個value的出現頻率為y軸，value為x軸畫成直方圖

![](https://i.imgur.com/JWPH0nH.png)

### Prediction
Classification Model
![](https://i.imgur.com/5muAMaM.png)


### Predict Result

![](https://i.imgur.com/jGUHpiF.jpg)
