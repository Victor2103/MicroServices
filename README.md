# Documentation Micro Services

## Presentation

This application has to goal to play the game motus. The goal of the application is to guess a word. The user have a score for each word he guess and an average for the word he have. 

The application is divided in two micro services. Each micro services is in one folder. There are two servers and the client can connect in both of the servers. The motus server is running on the port 3000 and the score server is running on the port 4000. The motus service permits to the user to play and the score server permits to the user to calculate his score every day and his average. 

Here are the link of the pratical work : 

[https://simongomezuniv.github.io/](https://simongomezuniv.github.io/)

And here the link of the assement :

[https://simongomezuniv.github.io/assessment](https://simongomezuniv.github.io/assessment)

## How it works ?
 
Download the github repository, open a terminal at the root of the project. Run the following commands : 

``` docker compose -f "docker-compose.yml" up -d --build ```

### Game
Now, you can go into [http://localhost:8080](http://localhost:8080/) Who will redirect you to the auth [http://localhost:5000](http://localhost:5000/) if u are not identified. The port [http://localhost:4000](http://localhost:4000/) is also working for the service score, it's an api, so it's show nothing but communicate with the motus app.  

### Logs
You can also go into [http://localhost:3000/](http://localhost:3000/) for Grafana. 
We also have implemented loki [http://localhost:3100/](http://localhost:3100/) (no user interface)

### Metrics
You can also go into [http://localhost:9090/](http://localhost:9090/) for Prometheus. 
[http://localhost:9100/](http://localhost:9100/) or [http://localhost:8080/metrics](http://localhost:8080/metrics) for metrics. 


## Sequence diagram

Here is the sequence diagram to understand how the the two servers interact with the user.
[![](https://mermaid.ink/img/pako:eNqtlM1u2zAQhF9lwWsVF70KiHtIgjZAmxZQgV50Ycm1pYTiuvypawR59y5JKY4MOwnQ6CKJHM5-Wg51LxRpFLXw-DuiVXjZy7WTQ2uBrwvTow1ny-VXCtFDg-4POqjh09UPeA9FM5ti6biIVb3V-Hdx6-F8CZ_RGIItOaNfYc06_ZL7o32VbDXQCkKHoOUOVuQGGeDWkwUfXG_Xz9f8_q3hohsjdx-T1XlAH8oKQ7SBiw7VHfx8ZDrkOjCs-S6d6qAvRJkuWULv9wN73GKK9tQXfyElDTSBnFwj015b5XBITUgGXpFD7kV-MVnqRymX-LAopjcU-D05lh5UBx24foLK0-hQJ1pL4TTx6a3paMBFFwZTgefvyssY06EKYDCwvZ-Is7McNbwDCv8L-A1gt5xU0LS1sKPIUYojXLJdwPNBKundkAuvPRtkq-xu5YATdEeclXelI2w1Dftiw43LwS4hnxPBWSrS5EjMT1SOSZHOpo8FLC3YR2vaHMnyNF9GR6bIUCPB3OUIR3N1c_mS7zHCWd-yatyures5JKcdnzJy1yQE-cugqMSA3Lpe81_vPhVsBcsGbEXNjxpXMprQitY-sFTGQM3OKlEHF7EScaNlmH6Sol5J4_HhH_sLwbY)](https://mermaid.live/edit#pako:eNqtlM1u2zAQhF9lwWsVF70KiHtIgjZAmxZQgV50Ycm1pYTiuvypawR59y5JKY4MOwnQ6CKJHM5-Wg51LxRpFLXw-DuiVXjZy7WTQ2uBrwvTow1ny-VXCtFDg-4POqjh09UPeA9FM5ti6biIVb3V-Hdx6-F8CZ_RGIItOaNfYc06_ZL7o32VbDXQCkKHoOUOVuQGGeDWkwUfXG_Xz9f8_q3hohsjdx-T1XlAH8oKQ7SBiw7VHfx8ZDrkOjCs-S6d6qAvRJkuWULv9wN73GKK9tQXfyElDTSBnFwj015b5XBITUgGXpFD7kV-MVnqRymX-LAopjcU-D05lh5UBx24foLK0-hQJ1pL4TTx6a3paMBFFwZTgefvyssY06EKYDCwvZ-Is7McNbwDCv8L-A1gt5xU0LS1sKPIUYojXLJdwPNBKundkAuvPRtkq-xu5YATdEeclXelI2w1Dftiw43LwS4hnxPBWSrS5EjMT1SOSZHOpo8FLC3YR2vaHMnyNF9GR6bIUCPB3OUIR3N1c_mS7zHCWd-yatyures5JKcdnzJy1yQE-cugqMSA3Lpe81_vPhVsBcsGbEXNjxpXMprQitY-sFTGQM3OKlEHF7EScaNlmH6Sol5J4_HhH_sLwbY)
