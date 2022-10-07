# Documentation Micro Services

# Presentation

This application has to goal to play the game motus. The goal of the application is to guess a word. The user have a score for each word he guess and an average for the word he have. 

The application is divided in two micro services. Each micro services is in one folder. There are two servers and the client can connect in both of the servers. The motus server is running on the port 3000 and the score server is running on the port 4000. The motus service permits to the user to play and the score server permits to the user to calculate his score every day and his average. 

Here are the links of the pratical work : 

[https://simongomezuniv.github.io/td_rtfm](https://simongomezuniv.github.io/td_rtfm)

[https://simongomezuniv.github.io/td_score](https://simongomezuniv.github.io/td_score)

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
[![](https://mermaid.ink/img/pako:eNqtlMFu2zAMhl-F0HVudjfQ7NAW24CuG-ABu_iiSUzsVhYziVoWFH33UZbT1EHTFth8sSH9-viBInyvDFlUtYr4K6E3eNnrddBD60GeC9ej57Pl8gtxitBg-I0Bavh49R3eQ8nMtiQ6HZJU7y3-WdxGOF_CJ3SOYEvB2TegJWdfoz_iq4y1QCvgDsHqHawoDJrhNpKHyKH365drfvvaSNGN07sPGXXOGLmccEQbuOjQ3MGPR6djryNgLW8dTAd9MRrtMhL6eFg46BYo-ol-Q4xAWazoVkeyn59QZRsD2gz2xKfhp7vY0YCLjgdXQRSF8ZihENAwOGTBR2n0gaynjDTL4D8J_wfZrQwVWNp62FGSW0-TXMYu4OU7L4O2ocBvHWPy1Uj3esC9dEdyre9KRwS1X44FI40bZ7DM49wIznKRRnqNR8Mf81qJzrZz_pqMdtAwBb3G6cBYcAzuL0dLPO-X1ckpidRkMKc849Fc3Vy-xn3OcNa3MTVd1zb0MiSniU8dpWsaWP90qCo1oLSut_KDus8FWyWxAVtVy6fFlU6OW9X6B4nqxNTsvFE1h4SVShuref8_U_VKu4gPfwE_2qUs)](https://mermaid.live/edit#pako:eNqtlMFu2zAMhl-F0HVudjfQ7NAW24CuG-ABu_iiSUzsVhYziVoWFH33UZbT1EHTFth8sSH9-viBInyvDFlUtYr4K6E3eNnrddBD60GeC9ej57Pl8gtxitBg-I0Bavh49R3eQ8nMtiQ6HZJU7y3-WdxGOF_CJ3SOYEvB2TegJWdfoz_iq4y1QCvgDsHqHawoDJrhNpKHyKH365drfvvaSNGN07sPGXXOGLmccEQbuOjQ3MGPR6djryNgLW8dTAd9MRrtMhL6eFg46BYo-ol-Q4xAWazoVkeyn59QZRsD2gz2xKfhp7vY0YCLjgdXQRSF8ZihENAwOGTBR2n0gaynjDTL4D8J_wfZrQwVWNp62FGSW0-TXMYu4OU7L4O2ocBvHWPy1Uj3esC9dEdyre9KRwS1X44FI40bZ7DM49wIznKRRnqNR8Mf81qJzrZz_pqMdtAwBb3G6cBYcAzuL0dLPO-X1ckpidRkMKc849Fc3Vy-xn3OcNa3MTVd1zb0MiSniU8dpWsaWP90qCo1oLSut_KDus8FWyWxAVtVy6fFlU6OW9X6B4nqxNTsvFE1h4SVShuref8_U_VKu4gPfwE_2qUs)