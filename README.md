# Documentation Micro Services

# Presentation

This application has to goal to play the game motus. The goal of the application is to guess a word. The user have a score for each word he guess and an average for the word he have. 

The application is divided in two micro services. Each micro services is in one folder. There are two servers and the client can connect in both of the servers. The motus server is running on the port 3000 and the score server is running on the port 4000. The motus service permits to the user to play and the score server permits to the user to calculate his score every day and his average. 

Here are the links of the pratical work : 

[https://simongomezuniv.github.io/td2_NODE](https://simongomezuniv.github.io/td2_NODE)

[https://simongomezuniv.github.io/td_rtfm](https://simongomezuniv.github.io/td_rtfm)

[https://simongomezuniv.github.io/td_score](https://simongomezuniv.github.io/td_score)

[https://simongomezuniv.github.io/td_oauth2](https://simongomezuniv.github.io/td_oauth2)

[https://simongomezuniv.github.io/td_monitoring](https://simongomezuniv.github.io/td_monitoring)

[https://simongomezuniv.github.io/assessment](https://simongomezuniv.github.io/assessment)

# How it works ?

To run the project, you have to install nodejs. Go on their website for further information. 

Once you clone the github repository, open two terminals at the root of the project. Run the following commands in the first terminal : 

```bash
cd motus/
npm install 
npm start
```

In the other terminal, run : 
```bash
cd score/
npm install 
npm start
```

Now, you can go into [http://localhost:3001](http://localhost:3001/)/. You can also go into [http://localhost:3000/](http://localhost:3000/). Both go into the same adress because we use a reverse proxy. The Url  [http://localhost:4000](http://localhost:4000/) is also working for the service score of the app.  

# Sequence diagram

Here is the sequence diagram to understand how the the two servers interact with the user.
[![](https://mermaid.ink/img/pako:eNqtlM1u2zAQhF9lwWsVF70KiHtIgjZAmxZQgV50Ycm1pYTiuvypawR59y5JKY4MOwnQ6CKJHM5-Wg51LxRpFLXw-DuiVXjZy7WTQ2uBrwvTow1ny-VXCtFDg-4POqjh09UPeA9FM5ti6biIVb3V-Hdx6-F8CZ_RGIItOaNfYc06_ZL7o32VbDXQCkKHoOUOVuQGGeDWkwUfXG_Xz9f8_q3hohsjdx-T1XlAH8oKQ7SBiw7VHfx8ZDrkOjCs-S6d6qAvRJkuWULv9wN73GKK9tQXfyElDTSBnFwj015b5XBITUgGXpFD7kV-MVnqRymX-LAopjcU-D05lh5UBx24foLK0-hQJ1pL4TTx6a3paMBFFwZTgefvyssY06EKYDCwvZ-Is7McNbwDCv8L-A1gt5xU0LS1sKPIUYojXLJdwPNBKundkAuvPRtkq-xu5YATdEeclXelI2w1Dftiw43LwS4hnxPBWSrS5EjMT1SOSZHOpo8FLC3YR2vaHMnyNF9GR6bIUCPB3OUIR3N1c_mS7zHCWd-yatyures5JKcdnzJy1yQE-cugqMSA3Lpe81_vPhVsBcsGbEXNjxpXMprQitY-sFTGQM3OKlEHF7EScaNlmH6Sol5J4_HhH_sLwbY)](https://mermaid.live/edit#pako:eNqtlM1u2zAQhF9lwWsVF70KiHtIgjZAmxZQgV50Ycm1pYTiuvypawR59y5JKY4MOwnQ6CKJHM5-Wg51LxRpFLXw-DuiVXjZy7WTQ2uBrwvTow1ny-VXCtFDg-4POqjh09UPeA9FM5ti6biIVb3V-Hdx6-F8CZ_RGIItOaNfYc06_ZL7o32VbDXQCkKHoOUOVuQGGeDWkwUfXG_Xz9f8_q3hohsjdx-T1XlAH8oKQ7SBiw7VHfx8ZDrkOjCs-S6d6qAvRJkuWULv9wN73GKK9tQXfyElDTSBnFwj015b5XBITUgGXpFD7kV-MVnqRymX-LAopjcU-D05lh5UBx24foLK0-hQJ1pL4TTx6a3paMBFFwZTgefvyssY06EKYDCwvZ-Is7McNbwDCv8L-A1gt5xU0LS1sKPIUYojXLJdwPNBKundkAuvPRtkq-xu5YATdEeclXelI2w1Dftiw43LwS4hnxPBWSrS5EjMT1SOSZHOpo8FLC3YR2vaHMnyNF9GR6bIUCPB3OUIR3N1c_mS7zHCWd-yatyures5JKcdnzJy1yQE-cugqMSA3Lpe81_vPhVsBcsGbEXNjxpXMprQitY-sFTGQM3OKlEHF7EScaNlmH6Sol5J4_HhH_sLwbY)
