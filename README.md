# Workshop-9


Notes from workshop:
How to add live video to canvas:

![Screen Shot 2025-01-27 at 9 08 26 PM](https://github.com/user-attachments/assets/51560d31-02b7-4126-9111-fc43537f04d6)


How to turn live video into an image/ to be manipulated like an image: (this one has been manipulated to be in greyscale

![Screen Shot 2025-01-27 at 9 08 50 PM](https://github.com/user-attachments/assets/00d6cc3f-a0f6-479e-9e50-671ddb828d74)


How to rescale video/image size on canvas 

![Screen Shot 2025-01-27 at 9 09 08 PM](https://github.com/user-attachments/assets/35c0787a-6726-4d08-ba27-7bdad5a140ff)

Full code:

![Screen Shot 2025-01-27 at 9 09 35 PM](https://github.com/user-attachments/assets/4942f51b-f801-47b5-aa9e-066b766a5720)

![Screen Shot 2025-01-27 at 9 09 47 PM](https://github.com/user-attachments/assets/cbe2dee5-6aaf-4f55-b476-c83c6440808d)



Objective:
Make an experimental 'smart mirror' using live video capture.
Include manipulations at the level of the pixel.

Current Sketch: https://melissss4.github.io/Workshop-9/ 

To start experimenting with the origins code, after getting it into P5.js, I kept getting this error:

![Screen Shot 2025-01-27 at 9 10 07 PM](https://github.com/user-attachments/assets/1e4b575a-57c3-4bdf-9756-3e7001bfa842)

At first I thought this was just an issue with my computer being too old to allow webcam, but then it also did not work on a Microsoft device. I tried this in VS Codium as well, and it still would not run. It kept coming up as a blank page. 

![Screen Shot 2025-01-27 at 9 10 26 PM](https://github.com/user-attachments/assets/db3b09a7-f7e0-4893-849a-d1bfc8767c7b)

Following the advice given to me in the Discord chat, I tried this with a more simple code, and still this would not run. 

![Screen Shot 2025-01-27 at 9 10 47 PM](https://github.com/user-attachments/assets/8fe0920c-1cae-4f38-af7d-7c1250baacb5)

After moving to another browser (safari) and allowing access on that, I was able to run this basic code. 
However, I ended up getting a script error when I tried to run the Ball systems code. 

![Screen Shot 2025-01-27 at 9 11 08 PM](https://github.com/user-attachments/assets/e6a6d9d4-19db-4e86-b36f-988566ebb7c7)

I asked my friend who does coding for some help and they suggested plugging it into ChatGPT. I entered my full code and the error  was getting. 

![Screen Shot 2025-01-27 at 9 11 27 PM](https://github.com/user-attachments/assets/f71336b6-3777-4fc6-92ee-a49cc81e21e0)

I realised that I just didn't define X when I initialised the constructor. Now I could finally continue to experiment with my code. 

![Screen Shot 2025-01-27 at 9 11 46 PM](https://github.com/user-attachments/assets/01a6ff22-3b45-471a-a9d9-b0dad7e72a91)

I tried merging my code from my workshop 6 (the poem generator) but then the ball system got messed up and became very small, and they did not keep generating. 

![Screen Shot 2025-01-27 at 9 12 04 PM](https://github.com/user-attachments/assets/9ed22671-af81-4521-b587-652e5366bbdf)

I realised I still had a background function set to (220) so I removed that and it worked like it should:

![Screen Shot 2025-01-27 at 9 12 20 PM](https://github.com/user-attachments/assets/99a59548-4421-4eda-bcea-27ffcfee130b)

I liked the way that the poem is written on top of the live stream, I feel like it adds to the ever evolving feeling of the poem and makes it feel like an art piece. 























